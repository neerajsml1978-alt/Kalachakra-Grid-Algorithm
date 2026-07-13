const rashifalData = [
    { rashi: "मेष (Aries)", icon: "🐏", msg: "आज किसी भी कार्य में जल्दबाजी न करें। धैर्य बनाए रखें, आपके लंबित कार्य आज व्यवस्थित हो सकते हैं।" },
    { rashi: "वृषभ (Taurus)", icon: "🐂", msg: "कार्यक्षेत्र में अपनी कार्यक्षमता का प्रदर्शन करें। आज आपको वरिष्ठों से प्रशंसा और महत्वपूर्ण सुझाव मिल सकते हैं।" },
    { rashi: "मिथुन (Gemini)", icon: "👯", msg: "आर्थिक मामलों में सावधानी बरतें। आज किसी भी बड़े लेनदेन से पहले दस्तावेजों को अच्छी तरह पढ़ लें।" },
    { rashi: "कर्क (Cancer)", icon: "🦀", msg: "आज मन प्रसन्न रहेगा और आप स्वयं को अधिक रचनात्मक महसूस करेंगे। पारिवारिक संबंधों में मधुरता आएगी।" },
    { rashi: "सिंह (Leo)", icon: "🦁", msg: "स्वास्थ्य पर थोड़ा ध्यान देने की आवश्यकता है। खान-पान में संतुलन बनाए रखें और अधिक पानी पिएं।" },
    { rashi: "कन्या (Virgo)", icon: "👩", msg: "आज सामाजिक मेल-जोल बढ़ेगा। किसी नए व्यक्ति से मुलाकात भविष्य के लिए फायदेमंद साबित हो सकती है।" },
    { rashi: "तुला (Libra)", icon: "⚖️", msg: "करियर में नए अवसर दस्तक दे सकते हैं। अपनी ऊर्जा को सही दिशा में लगाएं, सफलता निश्चित है।" },
    { rashi: "वृश्चिक (Scorpio)", icon: "🦂", msg: "आज पुराने निवेश से लाभ मिल सकता है। भविष्य की योजनाओं पर ध्यान केंद्रित करना सही रहेगा।" },
    { rashi: "धनु (Sagittarius)", icon: "🏹", msg: "आज आपकी संवाद शैली लोगों को प्रभावित करेगी। कार्यस्थल पर टीम के साथ तालमेल बेहतर होगा।" },
    { rashi: "मकर (Capricorn)", icon: "🐐", msg: "आज आप आत्मचिंतन में समय बिताएंगे। आध्यात्मिक गतिविधियों में रुचि बढ़ेगी, जिससे मन को शांति मिलेगी।" },
    { rashi: "कुंभ (Aquarius)", icon: "🏺", msg: "मित्रों और सहयोगियों का पूरा समर्थन मिलेगा। आज कोई भी कठिन कार्य सरलता से पूर्ण हो जाएगा।" },
    { rashi: "मीन (Pisces)", icon: "🐟", msg: "आज रचनात्मक कार्यों में मन लगेगा। घर के नवीनीकरण या साज-सज्जा पर विचार कर सकते हैं।" }
];

const colors = ["#ffebee", "#e3f2fd", "#e8f5e9", "#fff3e0", "#f3e5f5", "#fce4ec"];

function loadRashifal() {
    // तारीख अपडेट करें
    document.getElementById('current-date').innerText = new Date().toLocaleDateString('hi-IN');
    
    const container = document.getElementById('rashifal-container');
    container.innerHTML = '';

    rashifalData.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.backgroundColor = colors[index % colors.length];
        card.innerHTML = `
          <div class="rashi-icon">${item.icon}</div>
            <h3>${item.rashi}</h3>
            <p>${item.msg}</p>
        `;
        container.appendChild(card);
    });
}

window.onload = loadRashifal;
