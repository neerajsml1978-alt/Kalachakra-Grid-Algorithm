const rashifalData = [
    { rashi: "मेष (Aries)", icon: "♈", msg: "आज आपको कार्यक्षेत्र में नई जिम्मेदारियां मिल सकती हैं। धैर्य से काम लें, सफलता आपके कदम चूमेगी।" },
    { rashi: "वृषभ (Taurus)", icon: "♉", msg: "आज धन लाभ के अवसर प्राप्त होंगे। जीवनसाथी का सहयोग आपको मानसिक शांति प्रदान करेगा।" },
    { rashi: "मिथुन (Gemini)", icon: "♊", msg: "आज का दिन भागदौड़ भरा हो सकता है, लेकिन शाम को किसी पुराने मित्र से मिलकर प्रसन्नता होगी।" },
    { rashi: "कर्क (Cancer)", icon: "♋", msg: "आज निवेश करने से पहले अनुभवी लोगों की सलाह जरूर लें। स्वास्थ्य के प्रति थोड़ा सचेत रहने की आवश्यकता है।" },
    { rashi: "सिंह (Leo)", icon: "♌", msg: "आज आपके रुके हुए काम पूरे होने की संभावना है। मान-सम्मान में वृद्धि होगी और समाज में नई पहचान बनेगी।" },
    { rashi: "कन्या (Virgo)", icon: "♍", msg: "आज कार्यस्थल पर सहकर्मियों के साथ तालमेल बिठाकर चलें। पारिवारिक सुख में वृद्धि होगी।" },
    { rashi: "तुला (Libra)", icon: "♎", msg: "आज आप ऊर्जा से भरे रहेंगे। किसी बड़े प्रोजेक्ट में सफलता मिल सकती है, आर्थिक स्थिति सुदृढ़ होगी।" },
    { rashi: "वृश्चिक (Scorpio)", icon: "♏", msg: "आज किसी धार्मिक आयोजन में सम्मिलित होने का अवसर मिल सकता है। मन में सकारात्मक विचार आएंगे।" },
    { rashi: "धनु (Sagittarius)", icon: "♐", msg: "आज का दिन व्यापारिक यात्रा के लिए शुभ है। आय के नए स्रोत बनेंगे और बिगड़े काम बनने लगेंगे।" },
    { rashi: "मकर (Capricorn)", icon: "♑", msg: "आज आपको अपने क्रोध पर नियंत्रण रखने की जरूरत है। किसी भी विवाद से दूर रहना ही आपके हित में होगा।" },
    { rashi: "कुंभ (Aquarius)", icon: "♒", msg: "आज का दिन सुखद रहेगा। घर में किसी मांगलिक कार्य की रूपरेखा बन सकती है, अपनों का साथ मिलेगा।" },
    { rashi: "मीन (Pisces)", icon: "♓", msg: "आज आपकी आर्थिक स्थिति में सुधार होगा। छात्रों के लिए आज का दिन प्रतियोगी परीक्षाओं में सफलता का योग लेकर आया है।" }
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
