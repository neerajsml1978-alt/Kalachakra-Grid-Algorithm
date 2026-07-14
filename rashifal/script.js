const rashifalData = [
    { rashi: "मेष (Aries)", icon: "🐏", msg: "मंगलवार का दिन धैर्य की परीक्षा लेगा। जल्दबाजी में निर्णय न लें, कामकाज में सुधार के योग हैं।" },
    { rashi: "वृषभ (Taurus)", icon: "🐂", msg: "कार्यस्थल पर आपकी मेहनत रंग लाएगी। वरिष्ठ अधिकारियों का सहयोग प्राप्त होगा, पदोन्नति के संकेत हैं।" },
    { rashi: "मिथुन (Gemini)", icon: "👯", msg: "आर्थिक लेन-देन में सतर्क रहें। आज किसी को उधार देने से बचें, निवेश के लिए समय थोड़ा चुनौतीपूर्ण है।" },
    { rashi: "कर्क (Cancer)", icon: "🦀", msg: "आज आपकी रचनात्मकता चरम पर रहेगी। परिवार के साथ किसी मांगलिक कार्य की योजना बन सकती है।" },
    { rashi: "सिंह (Leo)", icon: "🦁", msg: "सेहत को लेकर लापरवाही न बरतें। योग और संतुलित आहार को दिनचर्या में शामिल करें, ऊर्जा बनी रहेगी।" },
    { rashi: "कन्या (Virgo)", icon: "👩", msg: "आज का दिन सामाजिक विस्तार का है। नए लोगों से संपर्क भविष्य में बड़े लाभ का द्वार खोलेगा।" },
    { rashi: "तुला (Libra)", icon: "⚖️", msg: "करियर में सकारात्मक बदलाव की आहट है। आज अपनी एकाग्रता बनाए रखें, लक्ष्य प्राप्ति के करीब हैं।" },
    { rashi: "वृश्चिक (Scorpio)", icon: "🦂", msg: "पुराने निवेश से आज आर्थिक राहत मिल सकती है। लंबी अवधि के लक्ष्यों पर ध्यान केंद्रित करना फायदेमंद रहेगा।" },
    { rashi: "धनु (Sagittarius)", icon: "🏹", msg: "आपकी वाकपटुता आज कार्यस्थल पर लोगों को प्रभावित करेगी। टीम वर्क से कठिन काम भी आसान होंगे।" },
    { rashi: "मकर (Capricorn)", icon: "🐐", msg: "आज का दिन शांति और चिंतन के लिए है। आध्यात्मिक कार्यों में संलग्न रहने से मन को गहरा सुकून मिलेगा।" },
    { rashi: "कुंभ (Aquarius)", icon: "🏺", msg: "मित्रों का भरपूर सहयोग मिलेगा। आज के दिन शुरू किए गए काम पूरे होने की प्रबल संभावना है।" },
    { rashi: "मीन (Pisces)", icon: "🐟", msg: "कलात्मक कार्यों में रुचि बढ़ेगी। आज घर के नवीनीकरण या साज-सज्जा की योजना पर काम कर सकते हैं।" }
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
