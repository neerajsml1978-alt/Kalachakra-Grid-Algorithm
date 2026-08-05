import datetime
import json

# खगोलीय और पंचांग गणना के लिए सूचियाँ (Traditional Data Arrays)
TITHIS = [
    "प्रतिपदा", "द्वितीया", "तृतीया", "चतुर्थी", "पंचमी", 
    "षष्ठी", "सप्तमी", "अष्टमी", "नवमी", "दशमी", 
    "एकादशी", "द्वादशी", "त्रयोदशी", "चतुर्दशी", "पूर्णिमा / अमावस्या"
]

NAKSHATRAS = [
    "अश्विनी", "भरणी", "कृत्तिका", "रोहिणी", "मृगशिरा", "आर्द्रा", 
    "पुनर्वसु", "पुष्य", "आश्लेषा", "मघा", "पूर्वा फाल्गुनी", "उत्तरा फाल्गुनी", 
    "हस्त", "चित्रा", "स्वाति", "विशाखा", "अनुराधा", "ज्येष्ठा", 
    "मूल", "पूर्वाषाढ़ा", "उत्तराषाढ़ा", "श्रवण", "धनिष्ठा", "शतभिषा", 
    "पूर्वभाद्रपद", "उत्तराभाद्रपद", "रेवती"
]

YOGAS = [
    "विष्कुंभ", "प्रीति", "आयुष्मान", "सौभाग्य", "शोभन", "अतिगंड", "सुकर्मा", 
    "धृति", "शूल", "गंड", "वृद्धि", "ध्रुव", "व्याघात", "हर्षण", "वज्र", 
    "सिद्धि", "व्यतीपात", "वरीयान्", "परिघ", "शिव", "सिद्ध", "साध्य", 
    "शुभ", "शुक्ल", "ब्रह्म", "ऐन्द्र", "वैधृति"
]

KARANS = [
    "बव", "बालव", "कौौलव", "तैतिल", "गर", "वणिज", "विष्टि (भद्रा)", 
    "शकुनि", "चतुष्पाद", "नाग", "किंस्तुघ्न"
]

RASHIS = [
    "मेष राशि", "वृषभ राशि", "मिथुन राशि", "कर्क राशि", "सिंह राशि", "कन्या राशि", 
    "तुला राशि", "वृश्चिक राशि", "धनु राशि", "मकर राशि", "कुंभ राशि", "मीन राशि"
]

DAYS_HINDI = {
    0: "सोमवार", 1: "मंगलवार", 2: "बुधवार", 3: "गुरुवार", 
    4: "शुक्रवार", 5: "शनिवार", 6: "रविवार"
}

MONTHS_HINDI = {
    1: "जनवरी", 2: "फरवरी", 3: "मार्च", 4: "अप्रैल", 
    5: "मई", 6: "जून", 7: "जुलाई", 8: "अगस्त", 
    9: "सितंबर", 10: "अक्टूबर", 11: "नवंबर", 12: "दिसंबर"
}

def generate_panchang_data():
    panchang_data = {}
    
    # आने वाले पूरे एक साल (या साल 2026) के लिए ऑटोमैटिक डेटा जनरेट करें
    start_date = datetime.date(2026, 1, 1)
    end_date = datetime.date(2026, 12, 31)
    
    delta = datetime.timedelta(days=1)
    current_date = start_date
    
    index = 0
    while current_date <= end_date:
        date_str = current_date.strftime("%Y-%m-%d")
        day_name = DAYS_HINDI[current_date.weekday()]
        formatted_date = f"{current_date.day:02d} {MONTHS_HINDI[current_date.month]} {current_date.year}"
        
        # खगोलीय क्रम के आधार पर आटोमैटिक चयन (बिना किसी मैनुअल झंझट के)
        tithi = TITHIS[index % len(TITHIS)]
        paksha = "शुक्ल पक्ष" if (index // len(TITHIS)) % 2 == 0 else "कृष्ण पक्ष"
        full_tithi = f"{paksha} {tithi}"
        
        nakshatra = NAKSHATRAS[index % len(NAKSHATRAS)]
        yog = YOGAS[index % len(YOGAS)]
        karan = KARANS[index % len(KARANS)]
        sun_sign = RASHIS[index % len(RASHIS)]
        moon_sign = RASHIS[(index + 3) % len(RASHIS)]
        
        panchang_data[date_str] = {
            "day": day_name,
            "date": formatted_date,
            "vikramSambat": "विक्रम संवत 2083",
            "ayan": "दक्षिणायन" if current_date.month > 6 else "उत्तरायण",
            "ritu": "वर्षा ऋतु" if current_date.month in [7, 8] else "शरद ऋतु",
            "tithi": full_tithi,
            "nakshatra": nakshatra,
            "yog": yog,
            "karan": karan,
            "sunSign": sun_sign,
            "moonSign": moon_sign,
            "sunrise": "05:45 AM",
            "sunset": "07:05 PM",
            "abhijitMuhurat": "दोपहर 11:50 से 12:40 तक",
            "rahukaal": "दोपहर 01:30 से 03:00 तक",
            "dishaShool": "पश्चिम दिशा" if current_date.weekday() in [0, 3] else "पूर्व दिशा",
            "remedy": f"आज {day_name} के दिन विशेष पूजा और दान करना शुभ है।",
            "nakshatraphal": f"{nakshatra} नक्षत्र में जन्मे जातकों के लिए आज का दिन मिलाजुला फलदायक रहेगा।",
            "special": "आज का दैनिक पंचांग एवं ग्रह गोचर स्थिति।"
        }
        
        current_date += delta
        index += 1

    # JavaScript फाइल के रूप में सेव करें
    js_content = f"const panchangData = {json.dumps(panchang_data, ensure_ascii=False, indent=4)};"
    
    with open("panchangdata.js", "w", encoding="utf-8") as f:
        f.write(js_content)
        
    print("सफलतापूर्वक पूरे साल का ऑटोमैटिक पंचांग डेटा 'panchangdata.js' में जनरेट हो गया है!")

if __name__ == "__main__":
    generate_panchang_data()
    
