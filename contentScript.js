// Ajuste o seletor para o elemento que contém o token
const tokenElement = document.querySelector('#token'); // Substitua por um seletor válido
if (tokenElement) {
    const token = tokenElement.textContent.trim();
    chrome.runtime.sendMessage({ token });
} else {
    console.error('Token não encontrado na página.');
}
