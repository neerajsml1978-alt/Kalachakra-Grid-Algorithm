const rashifalData = [
    { rashi: "मेष (Aries)", icon: "🐏", msg: "आज का दिन मिश्रित है।. आपको अपने क्रोध पर नियंत्रण रखने की आवश्यकता है, धैर्य से काम लें।" },
    { rashi: "वृषभ (Taurus)", icon: "🐂", msg: "आज का दिन आर्थिक स्थिरता के लिए अच्छा है।. मंगल आपके पक्ष में है, कार्यक्षेत्र में मेहनत का फल मिलेगा।" },
    { rashi: "मिथुन (Gemini)", icon: "👯", msg: "संचार में सावधानी बरतें क्योंकि बुध वक्री है।. आज किसी भी महत्वपूर्ण दस्तावेज पर हस्ताक्षर करने से पहले उसे अच्छी तरह पढ़ लें।" },
    { rashi: "कर्क (Cancer)", icon: "🦀", msg: "सूर्य और बृहस्पति का आपकी राशि में होना आपको आध्यात्मिक और पारिवारिक रूप से बल देगा।. बड़ों का आशीर्वाद मिलेगा।" },
    { rashi: "सिंह (Leo)", icon: "🦁", msg: "आज चंद्रमा आपकी ही राशि में है, जिससे आपका आत्मविश्वास चरम पर रहेगा।. नेतृत्व करने के बेहतरीन अवसर मिलेंगे।" },
    { rashi: "कन्या (Virgo)", icon: "👩", msg: "आज का दिन थोड़ा संयम मांगता है।. दूसरों के मामलों में दखल देने से बचें, कार्य पर अधिक ध्यान दें।" },
    { rashi: "तुला (Libra)", icon: "⚖️", msg: "सामाजिक स्तर पर आज आपकी प्रशंसा होगी।. आज नए लोगों से जुड़ना आपके करियर के लिए लाभकारी साबित हो सकता है।" },
    { rashi: "वृश्चिक (Scorpio)", icon: "🦂", msg: "आज कार्यक्षेत्र में कुछ चुनौतियों का सामना करना पड़ सकता है।. अपनी योजनाओं को गुप्त रखें और मेहनत जारी रखें।" },
    { rashi: "धनु (Sagittarius)", icon: "🏹", msg: "आज का दिन भाग्यशाली है।. लंबी दूरी की यात्रा या किसी नए प्रोजेक्ट की शुरुआत के लिए समय अनुकूल है।" },
    { rashi: "मकर (Capricorn)", icon: "🐐", msg: "आज का दिन शांतिपूर्ण रहेगा।. शनि की स्थिति के कारण काम धीरे-धीरे लेकिन निश्चित रूप से पूरे होंगे।" },
    { rashi: "कुंभ (Aquarius)", icon: "🏺", msg: "आज का दिन आपके व्यक्तित्व में निखार लाएगा।. सामाजिक मान-सम्मान बढ़ेगा और आप किसी बड़े लक्ष्य को हासिल कर पाएंगे।" },
    { rashi: "मीन (Pisces)", icon: "🐟", msg: "आज का दिन थोड़ा आध्यात्मिक रहने वाला है।. मन में शांति रहेगी और आप भविष्य की योजनाओं पर बेहतर विचार कर पाएंगे।" }
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
