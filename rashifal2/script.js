function loadPlanetWiseRashifal() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hour = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');
    const currentTimeStr = `${year}${month}${day}${hour}${minute}`;
    
    const container = document.getElementById('rashifal-container');
    if (!container) return; 
    container.innerHTML = '';

    let currentRashi = "";
    const pagePath = window.location.pathname.toLowerCase();
    
    if (pagePath.includes("mesh") || pagePath.includes("aries")) currentRashi = "मेष";
    else if (pagePath.includes("vrishabh") || pagePath.includes("taurus")) currentRashi = "वृषभ";
    else if (pagePath.includes("mithun") || pagePath.includes("gemini")) currentRashi = "मिथुन";
    else if (pagePath.includes("kark") || pagePath.includes("cancer")) currentRashi = "कर्क";
    else if (pagePath.includes("सिंह") || pagePath.includes("singh") || pagePath.includes("leo")) currentRashi = "सिंह";
    else if (pagePath.includes("kanya") || pagePath.includes("virgo")) currentRashi = "कन्या";
    else if (pagePath.includes("tula") || pagePath.includes("libra")) currentRashi = "तुला";
    else if (pagePath.includes("vrishchik") || pagePath.includes("scorpio")) currentRashi = "वृश्चिक";
    else if (pagePath.includes("dhanu") || pagePath.includes("sagittarius")) currentRashi = "धनु";
    else if (pagePath.includes("makar") || pagePath.includes("capricorn")) currentRashi = "मकर";
    else if (pagePath.includes("kumbh") || pagePath.includes("aquarius")) currentRashi = "कुंभ";
    else if (pagePath.includes("meen") || pagePath.includes("pisces")) currentRashi = "मीन";

    if (!currentRashi) return;

    // सभी 9 ग्रहों की डेटा फाइलों और उनके नामों की सूची
    const planetDataSources = [
        { name: "सूर्य गोचर", icon: "☀️", dataObj: typeof suryaData !== 'undefined' ? suryaData : null },
        { name: "चंद्रमा गोचर", icon: "🌙", dataObj: typeof chandraData !== 'undefined' ? chandraData : null },
        { name: "मंगल गोचर", icon: "🔴", dataObj: typeof mangalData !== 'undefined' ? mangalData : null },
        { name: "बुध गोचर", icon: "🟢", dataObj: typeof budhData !== 'undefined' ? budhData : null },
        { name: "गुरु गोचर", icon: "🟡", dataObj: typeof guruData !== 'undefined' ? guruData : null },
        { name: "शुक्र गोचर", icon: "✨", dataObj: typeof shukraData !== 'undefined' ? shukraData : null },
        { name: "शनि गोचर", icon: "🪐", dataObj: typeof shaniData !== 'undefined' ? shaniData : null },
        { name: "राहु गोचर", icon: "☊", dataObj: typeof rahuData !== 'undefined' ? rahuData : null },
        { name: "केतु गोचर", icon: "☋", dataObj: typeof ketuData !== 'undefined' ? ketuData : null }
    ];

    planetDataSources.forEach(planet => {
        if (!planet.dataObj) return;

        const sortedKeys = Object.keys(planet.dataObj).sort();
        let activeKey = null;

        for (let key of sortedKeys) {
            let keyNumeric = key.replace(/-/g, '');
            if (keyNumeric <= currentTimeStr) {
                activeKey = key;
            }
        }

        if (!activeKey && sortedKeys.length > 0) {
            activeKey = sortedKeys[sortedKeys.length - 1];
        }

        if (activeKey) {
            const planetList = planet.dataObj[activeKey];
            const targetItem = planetList.find(item => item.rashi && item.rashi.includes(currentRashi));

            if (targetItem) {
                const card = document.createElement('div');
                card.className = 'card';
                
                const points = targetItem.msg.split('.').filter(p => p.trim() !== "").map(p => `<li>${p.trim()}</li>`).join('');
                let upayHtml = targetItem.upay ? `<p style="margin-top: 10px; color: #b22222; font-weight: bold;">💡 उपाय: ${targetItem.upay}</p>` : '';

                // ग्रह के नाम के साथ उसका भाव जोड़ने का लॉजिक
                let headerTitle = planet.name;
                if (targetItem.house) {
                    headerTitle += ` - ${targetItem.house}`;
                } else if (targetItem.title && targetItem.title.includes('(')) {
                    let houseMatch = targetItem.title.match(/\(([^)]+)\)/);
                    if (houseMatch) {
                        headerTitle += ` - ${houseMatch[1]}`;
                    }
                }

                card.innerHTML = `
                    <div class="card-header">
                        <span class="rashi-icon">${planet.icon}</span>
                        <h3>${headerTitle}</h3>
                    </div>
                    <ul class="analysis-list">${points}</ul>
                    ${upayHtml}
                `;
                container.appendChild(card);
            }
        }
    });

    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        dateElement.innerText = new Date().toLocaleDateString('hi-IN', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    }
}
