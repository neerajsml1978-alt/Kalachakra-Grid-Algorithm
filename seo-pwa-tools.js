// इंस्टॉल बटन लॉजिक
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    const btn = document.getElementById('installBtn');
    if(btn) btn.style.display = 'block';
});

function installApp() {
    if (deferredPrompt) deferredPrompt.prompt();
}

// सर्विस वर्कर रजिस्ट्रेशन
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
}
// टेस्टिंग के लिए: सिर्फ यह लाइन जोड़ें, इंस्टॉल करने पर हटा दें
document.getElementById('installBtn').style.display = 'block'; 
