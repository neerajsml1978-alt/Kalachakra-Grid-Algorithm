// यह फंक्शन किसी भी पेज पर हाई-रेजोल्यूशन डाउनलोड बटन जोड़ देगा
function addDownloadButton(targetContainerId, fileName) {
    // बटन बनाना
    const btn = document.createElement('button');
    btn.className = 'download-btn';
    btn.innerText = 'डाउनलोड करें (High Quality Image)';
    btn.style.display = 'block';
    btn.style.margin = '20px auto';
    btn.style.padding = '15px 30px';
    btn.style.fontSize = '16px';
    btn.style.backgroundColor = '#8b0000';
    btn.style.color = 'white';
    btn.style.border = 'none';
    btn.style.borderRadius = '10px';
    btn.style.cursor = 'pointer';
    btn.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';

    // बटन पर क्लिक इवेंट (High Resolution Scale 4 के साथ)
    btn.addEventListener('click', function() {
        const container = document.getElementById(targetContainerId);
        
        // पिक्सल फटने और फेड होने की समस्या को दूर करने के लिए scale: 4 और useCORS का उपयोग
        html2canvas(container, { 
            scale: 4, 
            useCORS: true,
            logging: false,
            backgroundColor: '#f4f7f6' 
        }).then(canvas => {
            const link = document.createElement('a');
            link.download = fileName || 'mera-rashifal.png';
            link.href = canvas.toDataURL('image/png', 1.0);
            link.click();
        });
    });

    // बटन को बॉडी में सबसे नीचे जोड़ना
    document.body.appendChild(btn);
}
