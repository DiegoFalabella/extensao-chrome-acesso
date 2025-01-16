// Usage example with token extraction
const tokenElement = document.querySelector('#token'); // Adjust selector as needed
if (tokenElement) {
    const token = tokenElement.textContent.trim();

    // Make the API call
    makeSecureApiCall(token)
        .then(response => {
            console.log('API response:', response);
        })
        .catch(error => {
            console.error('Failed to make API call:', error);
        });
} else {
    console.error('Token not found on page.');
}