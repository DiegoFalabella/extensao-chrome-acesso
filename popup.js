document.addEventListener('DOMContentLoaded', () => {
    const tokenDisplay = document.getElementById('tokenDisplay');
    const copyButton = document.getElementById('copyButton');

    chrome.storage.local.get(['token'], (result) => {
        if (result.token) {
            tokenDisplay.textContent = `Token: ${result.token}`;
        } else {
            tokenDisplay.textContent = 'Nenhum token capturado.';
        }
    });

    copyButton.addEventListener('click', () => {
        chrome.storage.local.get(['token'], (result) => {
            if (result.token) {
                navigator.clipboard.writeText(result.token).then(() => {
                    //alert('Token copiado!');
                });
            } else {
                alert('Nenhum token para copiar.');
            }
        });
    });
});
