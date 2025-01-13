// Variável para armazenar o ID da aba ativa
let activeTabId = null;

// Atualiza o ID da aba ativa quando o usuário muda de aba
chrome.tabs.onActivated.addListener((activeInfo) => {
    activeTabId = activeInfo.tabId;
    console.log("Aba ativa atualizada:", activeTabId);
});

// Atualiza o ID da aba ativa quando uma aba é carregada
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete") {
        activeTabId = tabId;
        console.log("Aba ativa atualizada após carregamento:", activeTabId);
    }
});

// Monitora requisições feitas pela aba ativa
chrome.webRequest.onSendHeaders.addListener(
    function (details) {
        if (details.tabId === activeTabId) {
            // Verifica se o cabeçalho `authorizationproxy` está presente
            const authorizationHeader = details.requestHeaders.find(
                (header) => header.name.toLowerCase() === "authorizationproxy"
            );

            if (authorizationHeader) {
                const token = authorizationHeader.value.trim();
                console.log("Token capturado:", token);

                // Salva o token no armazenamento local
                chrome.storage.local.set({ token: token }, () => {
                    console.log("Token salvo com sucesso no storage!");
                });
            }
        }
    },
    {
        urls: ["<all_urls>"] // Ajuste as URLs específicas, se necessário
    },
    ["requestHeaders"]
);
