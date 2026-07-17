const upayData = [
    { rashi: "मेष (Aries)", icon: "🐏", upay: "हनुमान जी को आज सिंदूर का तिलक लगाएं।. इससे ऊर्जा का सही दिशा में उपयोग होगा और कार्यों में आ रही बाधाएं दूर होंगी।" },
    { rashi: "वृषभ (Taurus)", icon: "🐂", upay: "शुक्रवार के दिन सफेद मिठाई का भोग लगाएं।. माता लक्ष्मी की कृपा से आर्थिक स्थिति मजबूत होगी और मन में शांति बनी रहेगी।" },
    { rashi: "मिथुन (Gemini)", icon: "👯", upay: "गणेश जी को दूर्वा (हरी घास) अर्पित करें।. बुध की वक्री चाल के नकारात्मक प्रभाव को कम करने के लिए यह अचूक उपाय है।" },
    { rashi: "कर्क (Cancer)", icon: "🦀", upay: "सूर्य और बृहस्पति आपकी राशि में हैं।. इसलिए आज शिवलिंग पर दूध और जल से अभिषेक करना विशेष फलदायी रहेगा।" },
    { rashi: "सिंह (Leo)", icon: "🦁", upay: "चंद्रमा आज आपकी राशि में है, इसलिए उगते सूर्य को जल में लाल फूल डालकर अर्घ्य दें।. आत्मविश्वास में अभूतपूर्व वृद्धि होगी।" },
    { rashi: "कन्या (Virgo)", icon: "👩", upay: "आज किसी गाय को हरा चारा खिलाएं।. इससे बुध ग्रह के दोष शांत होंगे और आपकी निर्णय लेने की क्षमता में सुधार आएगा।" },
    { rashi: "तुला (Libra)", icon: "⚖️", upay: "आज के दिन सुगंधित इत्र का प्रयोग करें।. इससे शुक्र का शुभ प्रभाव बढ़ेगा और सामाजिक जीवन में मान-सम्मान की प्राप्ति होगी।" },
    { rashi: "वृश्चिक (Scorpio)", icon: "🦂", upay: "हनुमान चालीसा का पाठ करें।. आज के ग्रह गोचर में यह उपाय आपको मानसिक मजबूती और कार्यक्षेत्र में सफलता प्रदान करेगा।" },
    { rashi: "धनु (Sagittarius)", icon: "🏹", upay: "आज माथे पर केसर का तिलक लगाएं।. बृहस्पति का शुभ प्रभाव आपके भाग्य को प्रबल करेगा और अटके हुए काम पूरे होंगे।" },
    { rashi: "मकर (Capricorn)", icon: "🐐", upay: "शनि देव की आराधना करें और किसी निर्धन को भोजन कराएं।. इससे करियर में आने वाली बाधाएं दूर होंगी और कार्य में स्थिरता आएगी।" },
    { rashi: "कुंभ (Aquarius)", icon: "🏺", upay: "आज के दिन काले तिल का दान करें।. इससे मानसिक तनाव कम होगा और आपके द्वारा किए गए प्रयासों के बेहतर परिणाम मिलेंगे।" },
    { rashi: "मीन (Pisces)", icon: "🐟", upay: "केले के वृक्ष पर जल चढ़ाएं।. देव गुरु बृहस्पति की कृपा से आपके पारिवारिक जीवन में सुख और शांति का संचार होगा।" }
];

function loadUpay() {
    document.getElementById('current-date').innerText = new Date().toLocaleDateString('hi-IN');
    const container = document.getElementById('upay-container');
    container.innerHTML = '';

    upayData.forEach((item) => {
        const card = document.createElement('div');
        card.className = 'card';
        
        // उपाय को वाक्यों में तोड़ना (split by period)
        const points = item.upay.split('.').filter(p => p.trim() !== "").map(p => `<li>${p.trim()}</li>`).join('');
        
        // स्ट्रक्चर अपडेट किया गया ताकि CSS क्लास मैच करे
        card.innerHTML = `
            <div class="card-header">
                <div class="rashi-icon">${item.icon}</div>
                <h3>${item.rashi}</h3>
            </div>
            <ul class="analysis-list">
                ${points}
            </ul>
        `;
        container.appendChild(card);
    });
}

window.onload = loadUpay;
