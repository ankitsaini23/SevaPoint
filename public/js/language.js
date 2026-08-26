
(function () {
  const dict = {
    "Home":"होम","Services":"सेवाएँ","Categories":"श्रेणियाँ","States":"राज्य",
    "About":"हमारे बारे में","Contact":"संपर्क","EXPLORE":"जानें","BROWSE":"ब्राउज़ करें",
    "SAFETY FIRST":"सुरक्षा पहले","ABOUT SEVAPOINT":"सेवापॉइंट के बारे में",
    "Popular Services":"लोकप्रिय सेवाएँ","Services by Category":"श्रेणी के अनुसार सेवाएँ",
    "Helping you find the genuine source":"आपको आधिकारिक स्रोत खोजने में मदद",
    "Public services, made easier.":"जन सेवाएँ, अब आसान।",
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

  function translateElement(el, hindi) {
    if (!el.dataset.spOriginal) el.dataset.spOriginal = el.textContent;
    const original = el.dataset.spOriginal.trim();
    if (hindi && dict[original]) {
      el.textContent = el.textContent.replace(original, dict[original]);
    } else if (!hindi) {
      el.textContent = el.dataset.spOriginal;
    }
  }

  function setLang(lang) {
    const hindi = lang === "hi";
    document.documentElement.lang = hindi ? "hi" : "en";
    document.body.classList.toggle("hindi-mode", hindi);

    document.querySelectorAll("nav a, .language-btn, .eyebrow, h1, h2, h3, p, small, strong, span, a, button").forEach(el => {
      if (el.id === "languageBtn") return;
      translateElement(el, hindi);
    });

    const input = document.getElementById("searchInput");
    if (input) input.placeholder = hindi
      ? "आधार, पैन, छात्रवृत्ति, ड्राइविंग लाइसेंस खोजें..."
      : "Search Aadhaar, PAN, scholarship, driving licence...";

    const btn = document.getElementById("languageBtn");
    if (btn) btn.textContent = hindi ? "English" : "हिंदी";

    localStorage.setItem("sevapointLanguage", lang);
  }

  document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("languageBtn");
    if (btn) btn.addEventListener("click", function () {
      setLang((localStorage.getItem("sevapointLanguage") || "en") === "en" ? "hi" : "en");
    });
    setLang(localStorage.getItem("sevapointLanguage") || "en");
  });
})();
