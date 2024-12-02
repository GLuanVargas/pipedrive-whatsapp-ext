chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log('Message received:', request.action);

    if (request.action === "insertPhoneNumber") {
        const inputField = document.querySelector('[contenteditable="true"][role="textbox"]');

        if (inputField) {
            try {
                inputField.focus();
                
                const selection = window.getSelection();
                const range = document.createRange();
                range.selectNodeContents(inputField);
                selection.removeAllRanges();
                selection.addRange(range);
                
                setTimeout(() => document.execCommand('paste'), 100);
            } catch (error) {
                console.error('Error during paste operation:', error);
            }
        } else {
            console.error('Input field not found');
        }
    }
}); 