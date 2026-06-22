<div align="center">
  <h1>कालचक्र ग्रिड थ्योरी (Kalchakra Grid Theory)</h1>
  <p><b>शोधकर्ता:</b> ज्योतिषाचार्य नीरज गोयल</p>
  <p><i>ग्रेगोरियन कैलेंडर के लिए एक दृश्य-गणितीय गणना एल्गोरिदम</i></p>
</div>

<hr>

<h2>📖 प्रस्तावना (Introduction)</h2>
[span_0](start_span)<p>कालचक्र ग्रिड थ्योरी एक नवीन गणना पद्धति है जो ग्रेगोरियन कैलेंडर की तिथियों को 'वार' में परिवर्तित करने के लिए बीजगणितीय सूत्रों के स्थान पर 'मैट्रिक्स इंटरसेक्शन' (Matrix Intersection) का उपयोग करती है[span_0](end_span)। [span_1](start_span)यह पद्धति विशेष रूप से मानवीय गणना और कुशल सॉफ्टवेयर कार्यान्वयन के लिए डिज़ाइन की गई है[span_1](end_span) [span_2](start_span) [span_2](end_span) [span_3](start_span) [span_3](end_span) [span_4](start_span) [span_4](end_span) [span_5](start_span) [span_5](end_span) [span_6](start_span) [span_6](end_span) [span_7](start_span) [span_7](end_span) [span_8](start_span) [span_8](end_span) [span_9](start_span) [span_9](end_span) [span_10](start_span) [span_10](end_span) [span_11](start_span) [span_11](end_span) [span_12](start_span) [span_12](end_span) [span_13](start_span) [span_13](end_span) [span_14](start_span) [span_14](end_span) [span_15](start_span) [span_15](end_span) [span_16](start_span) [span_16](end_span) [span_17](start_span) [span_17](end_span).</p>

<hr>

<h2>📐 गणितीय ढांचा (Mathematical Architecture)</h2>
[span_18](start_span)<p>यह प्रणाली दो प्रमुख स्तंभों पर कार्य करती है[span_18](end_span):</p>

<h3>A. वर्ष कोड तालिका (Year Code Allocation)</h3>
<ul>
  [span_19](start_span)<li><b>शताब्दी कोड:</b> (शताब्दी / 400) के शेषफल के आधार पर निर्धारित[span_19](end_span)।</li>
  [span_20](start_span)<li><b>वर्ष कोड:</b> (वर्ष के अंतिम दो अंक + (वर्ष के अंतिम दो अंक / 4)) का 7 के साथ 'मॉड्यूलो' (Modulo 7) ऑपरेशन[span_20](end_span)।</li>
</ul>

<h3>B. दिन मिलान ग्रिड (Day Matching Grid)</h3>
<ul>
  [span_21](start_span)<li>यह एक 2D ग्रिड आधारित प्रणाली है[span_21](end_span)।</li>
  [span_22](start_span)<li><b>Rows (पंक्तियाँ):</b> महीने के 12 कोड (जनवरी से दिसंबर)[span_22](end_span)।</li>
  [span_23](start_span)<li><b>Columns (स्तंभ):</b> सप्ताह के 7 दिन (रविवार से शनिवार)[span_23](end_span)।</li>
  [span_24](start_span)<li><b>कार्यप्रणाली:</b> वर्ष कोड और महीने के कोड का योग सीधे ग्रिड के उस सेल पर 'इंटरसेक्ट' (प्रतिच्छेद) करता है, जो उस विशिष्ट तिथि का 'वार' प्रदर्शित करता है[span_24](end_span)।</li>
</ul>

<hr>

<h2>📊 तुलनात्मक विश्लेषण (Comparative Analysis)</h2>
<table border="1" cellpadding="10" style="border-collapse: collapse; width: 100%;">
  <thead>
    <tr>
      <th>आधार</th>
      <th>जेलर एल्गोरिदम</th>
      <th>कालचक्र ग्रिड थ्योरी</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>प्रक्रिया</td>
      <td>जटिल भाग और शेषफल</td>
      <td>विजुअल ग्रिड मैपिंग</td>
    </tr>
    <tr>
      <td>त्रुटि दर</td>
      <td>उच्च संभावना</td>
      <td>शून्य</td>
    </tr>
    <tr>
      <td>गति</td>
      <td>धीमी</td>
      <td>तीव्र</td>
    </tr>
  </tbody>
</table>
