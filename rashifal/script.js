const rashifalData = [
    { rashi: "मेष (Aries)", icon: "🐏", msg: "आज का दिन ऊर्जा से भरपूर है। रुके हुए काम पूरे होंगे और कार्यक्षेत्र में आपकी प्रशंसा होगी।" },
    { rashi: "वृषभ (Taurus)", icon: "🐂", msg: "आर्थिक स्थिति मजबूत होगी। निवेश के नए अवसर प्राप्त हो सकते हैं, लेकिन सोच-समझकर ही आगे बढ़ें।" },
    { rashi: "मिथुन (Gemini)", icon: "👯", msg: "आज यात्रा के योग बन रहे हैं। मन प्रसन्न रहेगा और किसी पुराने मित्र से मुलाकात होने की संभावना है।" },
    { rashi: "कर्क (Cancer)", icon: "🦀", msg: "पारिवारिक जीवन में मधुरता बनी रहेगी। आज कोई बड़ा फैसला लेने से पहले बड़ों की सलाह अवश्य लें।" },
    { rashi: "सिंह (Leo)", icon: "🦁", msg: "कार्यस्थल पर अतिरिक्त जिम्मेदारी मिल सकती है। धैर्य बनाए रखें, सफलता निश्चित रूप से मिलेगी।" },
    { rashi: "कन्या (Virgo)", icon: "👩", msg: "आज का दिन सीखने और नया कुछ करने का है। स्वास्थ्य के प्रति थोड़ा सचेत रहने की आवश्यकता है।" },
    { rashi: "तुला (Libra)", icon: "⚖️", msg: "आपकी मेहनत का फल आज मिल सकता है। आत्मविश्वास बढ़ा-चढ़ा रहेगा और काम समय पर पूरे होंगे।" },
    { rashi: "वृश्चिक (Scorpio)", icon: "🦂", msg: "आज धन लाभ के प्रबल योग हैं। कार्य में सफलता मिलेगी, लेकिन गुस्से पर नियंत्रण रखें।" },
    { rashi: "धनु (Sagittarius)", icon: "🏹", msg: "आज का दिन आपके पक्ष में है। रचनात्मक कार्यों में रुचि बढ़ेगी और सुखद समाचार प्राप्त होगा।" },
    { rashi: "मकर (Capricorn)", icon: "🐐", msg: "आज का दिन शांतिपूर्ण व्यतीत होगा। घरेलू मामलों में सावधानी बरतें और व्यर्थ के वाद-विवाद से बचें।" },
    { rashi: "कुंभ (Aquarius)", icon: "🏺", msg: "सामाजिक प्रतिष्ठा में वृद्धि होगी। आज कोई नया अनुबंध या प्रोजेक्ट मिल सकता है, ध्यान से काम करें।" },
    { rashi: "मीन (Pisces)", icon: "🐟", msg: "आज का दिन मिला-जुला रहेगा। खुद को सकारात्मक रखें, शाम तक कोई खुशखबरी मिल सकती है।" }
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
