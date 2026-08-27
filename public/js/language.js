
(function () {
  const dict = {
    "Home":"होम","Services":"सेवाएँ","Categories":"श्रेणियाँ","States":"राज्य",
    "About":"हमारे बारे में","Contact":"संपर्क","EXPLORE":"जानें","BROWSE":"ब्राउज़ करें",
    "SAFETY FIRST":"सुरक्षा पहले","ABOUT SEVAPOINT":"सेवापॉइंट के बारे में",
    "Popular Services":"लोकप्रिय सेवाएँ","Services by Category":"श्रेणी के अनुसार सेवाएँ",
    "Helping you find the genuine source":"आपको आधिकारिक स्रोत खोजने में मदद",
    "Public services, made easier.":"जन सेवाएँ, अब आसान।",
    "Find the service you need.":"अपनी ज़रूरत की सेवा खोजें।",
    "Find the official source.":"आधिकारिक स्रोत खोजें।",
    "One trusted place for public services":"जन सेवाओं के लिए एक भरोसेमंद जगह",
    "Official source":"आधिकारिक स्रोत","✓ Official source":"✓ आधिकारिक स्रोत",
    "View Details →":"विवरण देखें →","Official Website ↗":"आधिकारिक वेबसाइट ↗",
    "Visit Official Website →":"आधिकारिक वेबसाइट खोलें →","Back to SevaPoint":"सेवापॉइंट पर वापस जाएँ",
    "Identity & Documents":"पहचान और दस्तावेज़","Education":"शिक्षा",
    "Government Jobs":"सरकारी नौकरियाँ","Schemes & Benefits":"योजनाएँ और लाभ",
    "Health":"स्वास्थ्य","Agriculture":"कृषि","Identity":"पहचान","Documents":"दस्तावेज़",
    "Jobs":"नौकरियाँ","Schemes":"योजनाएँ","Central":"केंद्र","Rajasthan":"राजस्थान",
    "Citizen Services":"नागरिक सेवाएँ","Identity & Welfare":"पहचान और कल्याण",
    "State Services":"राज्य सेवाएँ","Who can use this service?":"इस सेवा का उपयोग कौन कर सकता है?",
    "Documents / Requirements":"दस्तावेज़ / आवश्यकताएँ",
    "How to access this service":"इस सेवा का उपयोग कैसे करें","Stay Safe":"सुरक्षित रहें",
    "SevaPoint Source Information":"सेवापॉइंट स्रोत जानकारी","Official source:":"आधिकारिक स्रोत:",
    "Last verified:":"अंतिम सत्यापन:","No service found":"कोई सेवा नहीं मिली",
    "Something went wrong":"कुछ गलत हो गया","Please try again.":"कृपया फिर से प्रयास करें।",
    "States & Union Territories":"राज्य और केंद्र शासित प्रदेश",
    "Services coming soon":"सेवाएँ जल्द उपलब्ध होंगी",
    "Search":"खोजें","Popular:":"लोकप्रिय:",
    "GET IN TOUCH":"संपर्क करें","Contact SevaPoint":"सेवापॉइंट से संपर्क करें",
    "Have feedback, a correction, or a public-service question? Send us a message.":"सुझाव, सुधार या जन सेवा से जुड़ा सवाल है? हमें संदेश भेजें।",
    "We would like to hear from you.":"हम आपसे सुनना चाहेंगे।",
    "Help us keep SevaPoint clear, useful, and connected to genuine public-service sources.":"सेवापॉइंट को स्पष्ट, उपयोगी और आधिकारिक जन सेवा स्रोतों से जुड़ा रखने में हमारी मदद करें।",
    "Your name":"आपका नाम","Email address":"ईमेल पता","Message":"संदेश",
    "Send message":"संदेश भेजें",
    "Public services, made easier.":"जन सेवाएँ, अब आसान।",
    "SevaPoint helps people find, understand, and safely access public services from one trusted guide.":"सेवापॉइंट लोगों को एक भरोसेमंद गाइड के ज़रिए जन सेवाएँ खोजने, समझने और सुरक्षित रूप से उपयोग करने में मदद करता है।",
    "Find. Verify. Access.":"खोजें। जाँचें। उपयोग करें।",
    "Government services can be difficult to find and confusing to navigate. SevaPoint brings useful service information together and guides visitors toward genuine official websites.":"सरकारी सेवाएँ खोजना और उनका उपयोग करना कठिन हो सकता है। सेवापॉइंट उपयोगी जानकारी को एक जगह लाता है और लोगों को आधिकारिक वेबसाइटों तक पहुँचने में मदद करता है।",
    "SevaPoint is an independent public-service guide. It is not a government website and does not replace official government portals.":"सेवापॉइंट एक स्वतंत्र जन सेवा गाइड है। यह सरकारी वेबसाइट नहीं है और आधिकारिक सरकारी पोर्टल का विकल्प नहीं है।",
    "THE PERSON BEHIND SEVAPOINT":"सेवापॉइंट के संस्थापक",
    "Founder & Developer":"संस्थापक और डेवलपर",
    "Ankit Saini created SevaPoint to make public-service information simpler, safer, and easier for everyone to access.":"अंकित सैनी ने सेवापॉइंट को जन सेवा की जानकारी को सभी के लिए सरल, सुरक्षित और आसानी से उपलब्ध बनाने के लिए बनाया है।",
    "MEET THE TEAM":"टीम से मिलिए",
    "The team behind SevaPoint.":"सेवापॉइंट के पीछे की टीम।",
    "Co-founder & Developer":"सह-संस्थापक और डेवलपर",
    "Co-founder & Design Management":"सह-संस्थापक और डिज़ाइन प्रबंधन",
    "Co-founder & Website Management":"सह-संस्थापक और वेबसाइट प्रबंधन",
    "Leads the vision and develops the SevaPoint platform.":"सेवापॉइंट की दिशा तय करते हैं और प्लेटफॉर्म विकसित करते हैं।",
    "Helps build and improve the platform’s features.":"प्लेटफॉर्म के फीचर्स बनाने और बेहतर करने में मदद करते हैं।",
    "Shapes the visual experience and design direction.":"विज़ुअल अनुभव और डिज़ाइन की दिशा तय करते हैं।",
    "Manages the website and keeps it running smoothly.":"वेबसाइट का प्रबंधन करते हैं और इसे सुचारु रूप से चलाते हैं।"
  };

  function translateTextNodes(root, hindi) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    let node;

    while ((node = walker.nextNode())) textNodes.push(node);

    textNodes.forEach(textNode => {
      if (!textNode.spOriginal) textNode.spOriginal = textNode.nodeValue;

      const original = textNode.spOriginal.trim();
      const translation = dict[original];
      if (!translation) return;

      const source = hindi ? translation : original;
      const leadingWhitespace = textNode.nodeValue.match(/^\s*/)[0];
      const trailingWhitespace = textNode.nodeValue.match(/\s*$/)[0];
      textNode.nodeValue = leadingWhitespace + source + trailingWhitespace;
    });
  }

  function setLang(lang) {
    const hindi = lang === "hi";
    document.documentElement.lang = hindi ? "hi" : "en";
    document.body.classList.toggle("hindi-mode", hindi);

    translateTextNodes(document.body, hindi);

    const input = document.getElementById("searchInput");
    if (input) input.placeholder = hindi
      ? "आधार, पैन, छात्रवृत्ति, ड्राइविंग लाइसेंस खोजें..."
      : "Search Aadhaar, PAN, scholarship, driving licence...";

    const btn = document.getElementById("languageBtn");
    if (btn) btn.textContent = hindi ? "English" : "हिंदी";

    localStorage.setItem("sevapointLanguage", lang);
  }

  function initializeLanguage() {
    const btn = document.getElementById("languageBtn");
    if (btn) btn.addEventListener("click", function () {
      setLang((localStorage.getItem("sevapointLanguage") || "en") === "en" ? "hi" : "en");
    });
    setLang(localStorage.getItem("sevapointLanguage") || "en");
    document.documentElement.classList.remove("language-pending");
  }

  initializeLanguage();
})();
