document.addEventListener('click', function (event) {
    // Check if shift key is pressed during click
    if (event.shiftKey) {
        event.preventDefault();

        // Get the clicked element's text and extract last 8 digits
        const phoneText = event.target.textContent;
        const last8Digits = phoneText.replace(/\D/g, '').slice(-8);

        console.log('Original number:', phoneText);
        console.log('Last 8 digits:', last8Digits);

        // Copy to clipboard
        navigator.clipboard.writeText(last8Digits).then(() => {
            console.log('Number copied to clipboard:', last8Digits);
            
            // After successful copy, switch to WhatsApp
            chrome.runtime.sendMessage({ 
                action: "switchToWhatsApp",
                phoneNumber: last8Digits
            });
        }).catch(err => {
            console.error('Failed to copy:', err);
        });
    }
}); 