const rashifalData = [
    { rashi: "मेष (Aries)", icon: "♈", msg: "आज का दिन ऊर्जा से भरपूर रहेगा। कार्यक्षेत्र में प्रगति के योग हैं।" },
    { rashi: "वृषभ (Taurus)", icon: "♉", msg: "धन लाभ की संभावना है, लेकिन खर्चों पर नियंत्रण रखें।" },
    { rashi: "मिथुन (Gemini)", icon: "♊", msg: "आज आपको परिवार का सहयोग मिलेगा। मन प्रसन्न रहेगा।" },
    { rashi: "कर्क (Cancer)", icon: "♋", msg: "काम में एकाग्रता बनाए रखें, सफलता निश्चित मिलेगी।" },
    { rashi: "सिंह (Leo)", icon: "♌", msg: "आज का दिन आपके लिए नया अवसर लेकर आएगा। आत्मविश्वास बढ़ाएं।" },
    { rashi: "कन्या (Virgo)", icon: "♍", msg: "स्वास्थ्य का ध्यान रखें। आज कोई बड़ा फैसला न लें।" },
    { rashi: "तुला (Libra)", icon: "♎", msg: "मित्रों से मुलाकात होगी, पुराना निवेश लाभ देगा।" },
    { rashi: "वृश्चिक (Scorpio)", icon: "♏", msg: "आज का दिन कठिन हो सकता है, धैर्य बनाए रखें।" },
    { rashi: "धनु (Sagittarius)", icon: "♐", msg: "किसी यात्रा पर जा सकते हैं, आर्थिक स्थिति सुधरेगी।" },
    { rashi: "मकर (Capricorn)", icon: "♑", msg: "व्यापार में मुनाफा होगा, नए लोगों से जुड़ने का मौका मिलेगा।" },
    { rashi: "कुंभ (Aquarius)", icon: "♒", msg: "आज आपकी मेहनत का फल आपको जल्द ही मिलेगा।" },
    { rashi: "मीन (Pisces)", icon: "♓", msg: "रचनात्मक कार्यों में मन लगेगा, दिन बहुत सुखद है।" }
];

// पेज पर कार्ड्स लोड करने का फंक्शन
function loadRashifal() {
    const container = document.getElementById('rashifal-container');
    
    // यह सुनिश्चित करने के लिए कि पुराना कंटेंट साफ हो जाए
    container.innerHTML = '';

    rashifalData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div style="font-size: 30px;">${item.icon}</div>
            <h3>${item.rashi}</h3>
            <p>${item.msg}</p>
        `;
        container.appendChild(card);
    });
}

// पेज लोड होते ही फंक्शन कॉल करें
window.onload = loadRashifal;
// script.js में कार्ड बनाते समय यह जोड़ें:
const colors = ["#ffebee", "#e3f2fd", "#e8f5e9", "#fff3e0", "#f3e5f5", "#fce4ec"];
// ...
card.style.backgroundColor = colors[index % colors.length]; // हर कार्ड को अलग रंग देगा
