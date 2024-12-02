chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "switchToWhatsApp") {
        chrome.tabs.query({}, function(tabs) {
            const whatsappTab = tabs.find(tab => 
                tab.url && tab.url.includes("web.whatsapp.com")
            );
            
            if (whatsappTab) {
                chrome.tabs.update(whatsappTab.id, { active: true });
                chrome.windows.update(whatsappTab.windowId, { focused: true });
                
                chrome.tabs.sendMessage(whatsappTab.id, {
                    action: "insertPhoneNumber",
                    phoneNumber: request.phoneNumber
                });
            }
        });
    }
}); 