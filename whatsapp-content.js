chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log('Message received:', request.action);

    if (request.action === "insertPhoneNumber") {
        const inputField = document.querySelector('[contenteditable="true"][role="textbox"]');

        if (inputField) {
            try {
                inputField.focus();
                
                // Select all existing text first
                document.execCommand('selectAll');
                
                // Small delay to ensure selection is complete
                setTimeout(() => {
                    // Clear selection with delete command
                    document.execCommand('delete');
                    
                    // Now paste the new number
                    setTimeout(() => document.execCommand('paste'), 50);
                }, 50);
            } catch (error) {
                console.error('Error during paste operation:', error);
            }
        } else {
            console.error('Input field not found');
        }
    }
}); 