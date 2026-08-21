document.addEventListener("DOMContentLoaded", function() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hour = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');

    const currentTimeStr = `${year}${month}${day}${hour}${minute}`;
    
    // --- ऑटोमैटिक डेटा डिटेक्शन (यह सीधे चेक करेगा कि कौन सी .js फाइल का डेटा मौजूद है) ---
    let allData = null;

    if (typeof suryaData !== 'undefined') {
        allData = suryaData;
    } else if (typeof chandraData !== 'undefined') {
        allData = chandraData;
    } else if (typeof mangalData !== 'undefined') {
        allData = mangalData;
    } else if (typeof budhData !== 'undefined') {
        allData = budhData;
    } else if (typeof guruData !== 'undefined') {
        allData = guruData;
    } else if (typeof shukraData !== 'undefined') {
        allData = shukraData;
    } else if (typeof shaniData !== 'undefined') {
        allData = shaniData;
    } else if (typeof rahuData !== 'undefined') {
        allData = rahuData;
    } else if (typeof ketuData !== 'undefined') {
        allData = ketuData;
    }
      // इसी तरह अगर आपके पास कोई अलग उपाय या नया डेटा है, तो ऐसे जोड़ सकते हैं:
    else if (typeof upayData !== 'undefined') {
        allData = upayData;}
        
    if (typeof allData !== 'undefined' && allData !== null) {
        const sortedKeys = Object.keys(allData).sort();
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

        const rashifalData = allData[activeKey];
        
        const dateElement = document.getElementById('current-date');
        if (dateElement) {
            dateElement.innerText = new Date().toLocaleDateString('hi-IN');
        }

        const container = document.getElementById('rashifal-container');
        if (container) {
            container.innerHTML = '';

            if (!rashifalData) {
                container.innerHTML = "<h2 style='text-align:center;'>आज के लिए अभी कोई गोचर अपडेट नहीं है।</h2>";
                return;
            }

            rashifalData.forEach((item) => {
                const card = document.createElement('div');
                card.className = 'card';
                
                const points = item.msg.split('.').filter(p => p.trim() !== "").map(p => `<li>${p.trim()}</li>`).join('');
                
                let upayHtml = item.upay ? `<p style="margin-top: 10px; color: #b22222; font-weight: bold;">💡 उपाय: ${item.upay}</p>` : '';

                card.innerHTML = `
                    <div class="card-header">
                        <span class="rashi-icon">${item.icon}</span>
                        <h3>${item.title || item.rashi}</h3>
                    </div>
                    <ul class="analysis-list">${points}</ul>
                    ${upayHtml}
                `;
                container.appendChild(card);
            });
        }
    }
});

window.addEventListener('load', function() {
    if (typeof addDownloadButton === 'function') {
        addDownloadButton('capture-area', 'rashifal.png');
    }
});
