const rashifalData = [
    { rashi: "मेष (Aries)", icon: "🐏", msg: "शनिवार का दिन आपके लिए नई योजनाएँ बनाने के लिए उत्तम है। स्वास्थ्य के प्रति सचेत रहें और काम के बीच थोड़ा आराम करें।" },
    { rashi: "वृषभ (Taurus)", icon: "🐂", msg: "आज आपको आर्थिक लाभ के नए अवसर मिल सकते हैं। परिवार के साथ बिताया गया समय आपके तनाव को दूर करेगा।" },
    { rashi: "मिथुन (Gemini)", icon: "👯", msg: "कार्यक्षेत्र में आज आपकी व्यस्तता बढ़ेगी, लेकिन परिणाम संतोषजनक रहेंगे। छोटी दूरी की यात्रा का योग बन सकता है।" },
    { rashi: "कर्क (Cancer)", icon: "🦀", msg: "रचनात्मक कार्यों में आपकी रुचि बढ़ेगी। आज किसी से विवाद करने से बचें और अपनी वाणी पर संयम रखें।" },
    { rashi: "सिंह (Leo)", icon: "🦁", msg: "आपकी कार्यशैली की सराहना होगी। भविष्य के निवेश के लिए आज का दिन सही है, विशेषज्ञों की सलाह लें।" },
    { rashi: "कन्या (Virgo)", icon: "👩", msg: "आज मन शांत रहेगा और रुके हुए काम पूरे होने की प्रबल संभावना है। कोई भी बड़ा फैसला जल्दबाजी में न लें।" },
    { rashi: "तुला (Libra)", icon: "⚖️", msg: "नए लोगों से जुड़ना आपके करियर के लिए फायदेमंद होगा। अपने खर्चों पर नियंत्रण रखें, भविष्य के लिए बचत जरूरी है।" },
    { rashi: "वृश्चिक (Scorpio)", icon: "🦂", msg: "आज आपका आत्मविश्वास बढ़ा रहेगा। व्यक्तिगत विकास के लिए समय निकालें, अपनों का साथ मिलेगा।" },
    { rashi: "धनु (Sagittarius)", icon: "🏹", msg: "आज कार्यस्थल पर दिन चुनौतीपूर्ण हो सकता है, लेकिन आपकी मेहनत रंग लाएगी। धैर्य ही सफलता की कुंजी है।" },
    { rashi: "मकर (Capricorn)", icon: "🐐", msg: "आज सामाजिक मेल-जोल बढ़ेगा। किसी प्रभावशाली व्यक्ति से मुलाकात आपके लिए मददगार साबित होगी।" },
    { rashi: "कुंभ (Aquarius)", icon: "🏺", msg: "आज आपको कोई शुभ समाचार मिल सकता है। मानसिक रूप से प्रसन्न रहेंगे और पुरानी योजनाओं को अमली जामा पहनाएंगे।" },
    { rashi: "मीन (Pisces)", icon: "🐟", msg: "अति-उत्साह में काम न करें, हर कदम सोच-समझकर उठाएं। आज का दिन धैर्य के साथ काम पूरे करने का है।" }
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
