const rashifalData = [
    { rashi: "मेष (Aries)", icon: "🐏", msg: "आज आपकी नेतृत्व क्षमता की सराहना होगी।. पुराने निवेश से लाभ मिलने की संभावना है, दिन उत्साहजनक रहेगा।" },
    { rashi: "वृषभ (Taurus)", icon: "🐂", msg: "कार्यक्षेत्र में नई चुनौतियाँ मिल सकती हैं, लेकिन अपनी मेहनत से आप उन्हें आसानी से पार कर लेंगे।. मानसिक शांति रहेगी।" },
    { rashi: "मिथुन (Gemini)", icon: "👯", msg: "आज किसी महत्वपूर्ण प्रोजेक्ट में सफलता मिलेगी।. परिवार के साथ अच्छा समय बीतेगा, पुरानी गलतफहमियां दूर होंगी।" },
    { rashi: "कर्क (Cancer)", icon: "🦀", msg: "आज आर्थिक मामलों में सावधानी बरतें।. नया काम शुरू करने के लिए दिन अच्छा है, बड़ों का आशीर्वाद लें।" },
    { rashi: "सिंह (Leo)", icon: "🦁", msg: "आज का दिन रचनात्मक कार्यों के लिए बेहतरीन है।. आपकी प्रतिभा की पहचान होगी, लेकिन स्वास्थ्य पर थोड़ा ध्यान दें।" },
    { rashi: "कन्या (Virgo)", icon: "👩", msg: "आज आपके रुके हुए काम पूरे हो सकते हैं।. कार्यस्थल पर सहकर्मियों का सहयोग मिलेगा, मन शांत रहेगा।" },
    { rashi: "तुला (Libra)", icon: "⚖️", msg: "आज का दिन धन लाभ का संकेत दे रहा है।. कोई भी बड़ा निर्णय सोच-समझकर लें और गुस्से पर काबू रखें।" },
    { rashi: "वृश्चिक (Scorpio)", icon: "🦂", msg: "आज नए लोगों से मुलाकात आपके लिए फायदेमंद साबित हो सकती है।. यात्रा का योग बन रहा है, दिन सुखद रहेगा।" },
    { rashi: "धनु (Sagittarius)", icon: "🏹", msg: "आज आपकी मेहनत रंग लाएगी।. आर्थिक स्थिति में सुधार होगा और घर में खुशहाली का वातावरण बना रहेगा।" },
    { rashi: "मकर (Capricorn)", icon: "🐐", msg: "आज किसी पुराने मित्र से संपर्क हो सकता है।. कार्यक्षेत्र में बदलाव की स्थिति है, धैर्य बनाए रखें।" },
    { rashi: "कुंभ (Aquarius)", icon: "🏺", msg: "आज आपकी सामाजिक प्रतिष्ठा बढ़ेगी।. किसी शुभ समाचार की प्राप्ति से परिवार में उत्सव का माहौल हो सकता है।" },
    { rashi: "मीन (Pisces)", icon: "🐟", msg: "आज का दिन मिला-जुला रहेगा। .किसी भी कार्य में अति-उत्साह से बचें और अपने काम पर ध्यान केंद्रित करें।" }
];

function loadRashifal() {
    document.getElementById('current-date').innerText = new Date().toLocaleDateString('hi-IN');
    const container = document.getElementById('rashifal-container');
    container.innerHTML = '';

    rashifalData.forEach((item) => {
        const card = document.createElement('div');
        card.className = 'card';
        const points = item.msg.split('.').filter(p => p.trim() !== "").map(p => `<li>${p.trim()}</li>`).join('');
        
        card.innerHTML = `
            <div class="card-header">
                <span class="rashi-icon">${item.icon}</span>
                <h3>${item.rashi}</h3>
            </div>
            <ul class="analysis-list">
                ${points}
            </ul>
        `;
        container.appendChild(card);
    });
}

window.onload = loadRashifal;
