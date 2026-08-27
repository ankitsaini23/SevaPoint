
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
    "Search":"खोजें","Popular:":"लोकप्रिय:"
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
