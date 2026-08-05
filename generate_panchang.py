import json
from datetime import datetime, timedelta

# यहाँ आप जितने दिन का डेटा आगे बढ़ाना चाहें, संख्या लिख सकते हैं (जैसे 30 या 60 दिन)
total_days = 365
start_date = datetime.now()
panchang_data = {}

# दिनों और महीनों के नाम हिंदी में
days_hindi = {
    "Monday": "सोमवार", "Tuesday": "मंगलवार", "Wednesday": "बुधवार", 
    "Thursday": "गुरुवार", "Friday": "शुक्रवार", "Saturday": "शनिवार", "Sunday": "रविवार"
}

months_hindi = {
    1: "जनवरी", 2: "फरवरी", 3: "मार्च", 4: "अप्रैल", 5: "मई", 6: "जून",
    7: "जुलाई", 8: "अगस्त", 9: "सितंबर", 10: "अक्टूबर", 11: "नवंबर", 12: "दिसंबर"
}

for i in range(total_days):
    current_date = start_date + timedelta(days=i)
    
    # अब की (Key) में समय नहीं, केवल सीधी तारीख बनेगी (जैसे: "2026-08-05")
    date_key = current_date.strftime("%Y-%m-%d")
    
    eng_day = current_date.strftime("%A")
    day_name = days_hindi.get(eng_day, eng_day)
    formatted_date = f"{current_date.day:02d} {months_hindi[current_date.month]} {current_date.year}"

    # पंचांग का डेटा ढांचा (आप चाहें तो अपनी जरूरत के अनुसार इसमें आगे बदलाव कर सकते हैं)
    panchang_data[date_key] = {
        "day": day_name,
        "date": formatted_date,
        "vikramSambat": "विक्रम संवत 2083",
        "ayan": "दक्षिणायन",
        "ritu": "वर्षा ऋतु",
        "tithi": "यहाँ तिथि भरें",
        "nakshatra": "यहाँ नक्षत्र भरें",
        "yog": "यहाँ योग भरें",
        "karan": "यहाँ करण भरें",
        "sunSign": "सिंह राशि",
        "moonSign": "कन्या राशि",
        "sunrise": "05:44 AM",
        "sunset": "07:09 PM",
        "abhijitMuhurat": "दोपहर 12:00 से 12:54 तक",
        "rahukaal": "दोपहर 12:26 से 02:08 तक",
        "dishaShool": "उत्तर दिशा",
        "remedy": "आज का विशेष उपाय",
        "nakshatraphal": "नक्षत्र फल विवरण",
        "special": "आज का विशेष विवरण या पर्व"
    }

# सीधे panchangdata.js फाइल के रूप में सेव करना
js_content = "const panchangData = " + json.dumps(panchang_data, ensure_ascii=False, indent=4) + ";"

with open("panchangdata.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"सफलतापूर्वक आज से अगले {total_days} दिनों का पंचांग डेटा (केवल तारीख फॉर्मेट में) जनरेट हो गया है!")
