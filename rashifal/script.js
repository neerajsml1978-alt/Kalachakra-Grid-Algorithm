const rashifalData = [
    { rashi: "मेष (Aries)", icon: "♈", msg: "11 जुलाई को आपके साहस में वृद्धि होगी। कार्यक्षेत्र में नए सहयोगियों से लाभ मिलने के प्रबल योग हैं।" },
    { rashi: "वृषभ (Taurus)", icon: "♉", msg: "आज आर्थिक निवेश के लिए दिन शुभ है। परिवार के साथ किसी छोटी यात्रा पर जाने की योजना बन सकती है।" },
    { rashi: "मिथुन (Gemini)", icon: "♊", msg: "आज आपकी वाणी का प्रभाव बढ़ेगा। सामाजिक कार्यों में मान-सम्मान की प्राप्ति होगी, दिन सुखद है।" },
    { rashi: "कर्क (Cancer)", icon: "♋", msg: "आज आत्मविश्वास से भरपूर रहेंगे। व्यापार में किसी पुराने रुके हुए काम के पूरा होने से धन लाभ होगा।" },
    { rashi: "सिंह (Leo)", icon: "♌", msg: "आज का दिन रचनात्मक कार्यों के लिए उत्तम है। स्वास्थ्य में सुधार महसूस करेंगे, मन प्रसन्न रहेगा।" },
    { rashi: "कन्या (Virgo)", icon: "♍", msg: "आज व्यर्थ के खर्चों पर लगाम लगाने की जरूरत है। किसी भी दस्तावेज पर हस्ताक्षर करने से पहले सावधानी बरतें।" },
    { rashi: "तुला (Libra)", icon: "♎", msg: "आज पुराने दोस्तों से मुलाकात मन को खुशी देगी। कार्यस्थल पर आपके काम की प्रशंसा वरिष्ठ अधिकारियों द्वारा की जाएगी।" },
    { rashi: "वृश्चिक (Scorpio)", icon: "♏", msg: "आज किसी कठिन निर्णय में परिवार का साथ मिलेगा। सेहत के प्रति लापरवाही न बरतें, योग को दिनचर्या में शामिल करें।" },
    { rashi: "धनु (Sagittarius)", icon: "♐", msg: "आज का दिन पद-प्रतिष्ठा में वृद्धि लाएगा। आर्थिक स्थिति पहले से बेहतर होगी, यात्रा सुखद रहेगी।" },
    { rashi: "मकर (Capricorn)", icon: "♑", msg: "आज व्यावसायिक साझेदारी में लाभ के संकेत हैं। नए लोगों से संपर्क आपकी प्रगति के मार्ग खोलेगा।" },
    { rashi: "कुंभ (Aquarius)", icon: "♒", msg: "आज आपकी मेहनत रंग लाएगी। छात्रों के लिए आज का दिन शिक्षा के क्षेत्र में नई उपलब्धियां लेकर आ सकता है।" },
    { rashi: "मीन (Pisces)", icon: "♓", msg: "आज मन शांत रहेगा और अध्यात्म की ओर झुकाव बढ़ेगा। घर के बड़े-बुजुर्गों का आशीर्वाद आपके लिए सहायक सिद्ध होगा।" }
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
            <div style="font-size: 15px;">${item.icon}</div>
            <h3>${item.rashi}</h3>
            <p>${item.msg}</p>
        `;
        container.appendChild(card);
    });
}

window.onload = loadRashifal;
