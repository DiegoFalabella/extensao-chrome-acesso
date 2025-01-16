async function makeSecureApiCall(token) {
    try {
        const response = await fetch('https://medh.basehit.com.br/api/tce/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors',
            body: JSON.stringify({
                token: token
            })
        });

        // Check if the response status is OK (2xx)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Try to parse the response as JSON
        const text = await response.text(); // Get the raw response text
        const data = text ? JSON.parse(text) : null; // Parse JSON if text exists, otherwise set to null
        return data;

    } catch (error) {
        console.error('Error making API call:', error);
        throw error;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const tokenDisplay = document.getElementById('tokenDisplay');
    const copyButton = document.getElementById('copyButton');
    const sendRequestButton = document.getElementById('sendRequest');

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
                    alert('Token copiado!');
                });
            } else {
                alert('Nenhum token para copiar.');
            }
        });
    });

    sendRequestButton.addEventListener('click', () => {
        chrome.storage.local.get(['token'], (result) => {
            if (result.token) {
                makeSecureApiCall(result.token)
                    .then(response => {
                        alert('Sucesso! Verifique o console para a resposta da API.');
                        console.log('API response:', response);
                    })
                    .catch(error => {
                        console.error('Failed to make API call:', error);
                        alert('Failed to make API call: ' + error.message);
                    });
            } else {
                alert('Nenhum token capturado.');
            }
        });
    });
});
