const upayData = [
    { rashi: "मेष (Aries)", icon: "🐏", upay: "हनुमान जी को लाल पुष्प अर्पित करें।. शनि देव के प्रभाव को कम करने के लिए आज काले तिल का दान करना शुभ रहेगा।" },
    { rashi: "वृषभ (Taurus)", icon: "🐂", upay: "आज का दिन शनि के नाम है, अतः संध्या के समय पीपल के वृक्ष के नीचे सरसों के तेल का दीपक प्रज्वलित करें।" },
    { rashi: "मिथुन (Gemini)", icon: "👯", upay: "शनिवार के दिन अपनी वाणी पर संयम रखें।. गणेश जी की पूजा करें और जरूरतमंदों को फल का दान करें।" },
    { rashi: "कर्क (Cancer)", icon: "🦀", upay: "मानसिक शांति हेतु शिव जी पर जल चढ़ाएं।. किसी काले कुत्ते को आज रोटी खिलाना आपके लिए अत्यंत लाभकारी होगा।" },
    { rashi: "सिंह (Leo)", icon: "🦁", upay: "आज सूर्य देव को जल दें।. शनि के दुष्प्रभाव से बचने के लिए लोहे की वस्तु का दान करने से लाभ होगा।" },
    { rashi: "कन्या (Virgo)", icon: "👩", upay: "बुध ग्रह की शुभता के लिए आज पक्षियों को दाना डालें।. शनि मंदिर में तेल अर्पित करने से कार्यक्षेत्र में आ रही बाधा दूर होगी।" },
    { rashi: "तुला (Libra)", icon: "⚖️", upay: "शनि देव की कृपा पाने के लिए आज किसी गरीब को काले कपड़े का दान करें।. लक्ष्मी जी की उपासना भी करें।" },
    { rashi: "वृश्चिक (Scorpio)", icon: "🦂", upay: "हनुमान चालीसा का पाठ करें।. आज के दिन तामसिक भोजन से बचें।. शनि देव को उड़द की दाल का भोग लगाएं।" },
    { rashi: "धनु (Sagittarius)", icon: "🏹", upay: "केले के वृक्ष की पूजा करें।. आज के दिन शनि के प्रकोप से बचने के लिए किसी वृद्ध व्यक्ति की सहायता अवश्य करें।" },
    { rashi: "मकर (Capricorn)", icon: "🐐", upay: "आज आपका स्वामी शनि है।. हनुमान जी की पूजा करें और शनिवार के विशेष मंत्र 'ॐ शं शनैश्चराय नमः' का जाप करें।" },
    { rashi: "कुंभ (Aquarius)", icon: "🏺", upay: "शनि देव की प्रसन्नता के लिए आज गरीबों में तिल और गुड़ का वितरण करें।. आज का दिन दान-पुण्य के लिए उत्तम है।" },
    { rashi: "मीन (Pisces)", icon: "🐟", upay: "आज विष्णु सहस्त्रनाम का पाठ करें।. शाम को शनि देव के सम्मुख सरसों के तेल का दीपक जलाकर शांति की प्रार्थना करें।" }
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
