"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, 
  Scale, 
  MessageSquare, 
  Search, 
  Cpu, 
  Users, 
  Download, 
  ChevronDown, 
  Globe,
  HelpCircle
} from "lucide-react";


// --- TRANSLATION CONTENT DICTIONARY ---
const translations = {
  en: {
    navHome: "How It Works",
    navFeatures: "Features",
    navPipeline: "8 AI Agents",
    navFuture: "Future Scope",
    navFaqs: "FAQs",
    downloadBtn: "Download APK",
    heroTag: "Scared of Legal Matters? Talash AI is Here!",
    heroTitleLine1: "Pakistan's First Easy",
    heroTitleLine2: "AI Legal Guide",
    heroDesc: "Don't understand Pakistani law? Trapped in a legal issue and feeling scared? Our app listens to your problem in simple language and guides you on the official legal path according to Pakistani law.",
    exploreBtn: "Understand How It Works",
    downloadApkBtn: "Download Android APK (Free)",
    aboutTag: "For Ordinary Citizens",
    aboutTitle: "No More Fear, Justice Made Easy",
    aboutDesc: "Many Pakistanis remain silent out of fear because they don't understand police procedures, court visits, or difficult legal terms. Talash AI eliminates this fear. You share your case on an easy User Dashboard, and our system does the deep research to guide you safely.",
    step1Title: "Step 1: You Tell Your Problem",
    step1Desc: '"My uncle forcefully took over my land and is threatening me..."',
    step2Title: "Step 2: 8 AI Agents Researching",
    step2Desc: "Analyzing evidence under relevant sections of the Pakistan Penal Code (PPC)...",
    step3Title: "Step 3: Your Solution Report",
    step3Desc: "✓ Don't panic! You have 3 clear legal rights. Approach this nearby authority immediately.",
    featuresTag: "App Features",
    featuresTitle: "The Ultimate Tool For Your Protection",
    feature1Title: "Talk In Your Language",
    feature1Desc: "Type or speak in Urdu, Roman Urdu, or English. Our app understands you effortlessly.",
    feature2Title: "Official Law Verification",
    feature2Desc: "Grounded with Pakistan Penal Code (PPC) and Civil laws, ensuring highly accurate guidance.",
    feature3Title: "Secure Dashboard",
    feature3Desc: "Your cases, chats, and evidence are completely encrypted. No unauthorized access allowed.",
    feature4Title: "Protection From Scams",
    feature4Desc: "No one can blackmail or scam you anymore. Our Misguide Detector alerts you beforehand.",
    pipelineTag: "Behind The Scenes",
    pipelineTitle: "How Our 8 AI Agents Work Together",
    pipelineDesc: "The moment you enter your case, 8 specialist AI agents work like a professional legal team to evaluate your situation:",
    agent1Name: "Case Listener",
    agent1Desc: "Listens to your problem without judgment, extracting key facts and emotional context.",
    agent2Name: "Case Classifier",
    agent2Desc: "Determines whether your matter falls under Criminal, Civil, or Family legal domains.",
    agent3Name: "Questioning Agent",
    agent3Desc: "Asks very simple follow-up questions if any critical piece of information is missing.",
    agent4Name: "Rights Analyzer",
    agent4Desc: "Queries the vector knowledge base to find your exact constitutional rights from official Pakistani laws.",
    agent5Name: "Document Checker",
    agent5Desc: "Reviews your available documents or receipts to evaluate how strong your case is.",
    agent6Name: "Action Planner",
    agent6Desc: "Generates a step-by-step roadmap showing you exactly where to go, what to do, and estimated timelines.",
    agent7Name: "Misguide Detector",
    agent7Desc: "Crucial! Instantly alerts you if someone is trying to mislead, scam, or exploit you.",
    agent8Name: "Final Formatter",
    agent8Desc: "Combines insights from all agents to provide a clean, easy-to-read final advice summary report.",
    futureTag: "The Upcoming Tomorrow",
    futureTitle: "Future Plans: Connecting Citizens & Lawyers",
    futureDesc: "Very soon we are launching the Lawyer Dashboard, where AI will bridge the gap between verified local advocates and citizens.",
    f1Title: "Verified Lawyer Marketplace",
    f1Desc: "Based on your case, the AI will suggest the best verified Pakistani lawyers who can help you affordably.",
    f2Title: "Direct Lawyer Chat System",
    f2Desc: "Chat directly inside the app, discuss fees securely, and share legal documents safely.",
    f3Title: "Digital Courtroom Predictor",
    f3Desc: "Analyzes case parameters to estimate probability scores of the judgment turning in your favor.",
    faqTag: "Questions & Answers",
    faqTitle: "Frequently Asked Questions",
    faq1Q: "Is there any fee to use Talash AI?",
    faq1A: "No, using Talash AI for initial legal intake and understanding your rights is completely free for ordinary citizens.",
    faq2Q: "Will my personal legal data be leaked?",
    faq2A: "Absolutely not. Our database uses secure authentication schemas, keeping your case profiles completely private.",
    faq3Q: "If I know nothing about law, can I still use it?",
    faq3A: "This app is built exactly for people who fear or don't know the law. You just tell your story simply, and our 8 agents handle the rest.",
    footerSubtitle: "A mission to provide legal empowerment to every citizen of Pakistan.",
    footerRights: "Talash AI. Powered by DigiXta. All Rights Reserved."
  },
  roman: {
    navHome: "App Kaise Chalti Hai",
    navFeatures: "Khasooziat",
    navPipeline: "8 Agents Pipeline",
    navFuture: "Aane Wale Features",
    navFaqs: "Sawal Jawab",
    downloadBtn: "Download APK",
    heroTag: "Ab Qanoon Se Darna Kaisa? Talash AI Hai Na!",
    heroTitleLine1: "Pakistan Ka Pehla Aasan",
    heroTitleLine2: "AI Qanooni Guide",
    heroDesc: "Kya aapko Pakistan ke qanoon ki samajh nahi hai? Kisi maslay me phans gaye hain aur dar lag raha hai? Hamari app aapki kahani sun kar, Pakistan ke official qanoon ke mutabiq aapko sahi rasta dikhati hai.",
    exploreBtn: "Samjhein Yeh Kaise Kaam Karta Hai",
    downloadApkBtn: "Download Android APK (Free)",
    aboutTag: "Aam Shehriyon Ke Liye",
    aboutTitle: "Darr Khatam, Ab Insaf Hoga Aasan",
    aboutDesc: "Bohat se Pakistani sirf is darr se chup rehte hain kyunke unhe police station ya court ke chakkar aur mushkil qanooni alfaaz samajh nahi aate. Talash AI is darr ko khatam karti hai. Aap ek aasan User Dashboard par apna poora mamla likhte hain, aur hamara system poori research karke aapko sahi raah dikhata hai.",
    step1Title: "Step 1: Aapne Masla Bataya",
    step1Desc: '"Meri zameen par chacha ne jabri kabza kar liya hai aur mujhe daraya ja raha hai..."',
    step2Title: "Step 2: 8 AI Agents Ki Research",
    step2Desc: "Pakistan Penal Code (PPC) ki mutaliqa daf'aat ke tehat sabooton ka jaiza liya ja raha hai...",
    step3Title: "Step 3: Aapki Solution Report",
    step3Desc: "✓ Ghabraein nahi! Aap ke paas 3 qanooni haqooq hain. Foran is qareebi authority se ruju karein.",
    featuresTag: "App Ki Khasooziat",
    featuresTitle: "Aapki Hifazat Ke Liye Behtareen Tool",
    feature1Title: "Apni Zaban Me Baat Karein",
    feature1Desc: "Urdu, Roman Urdu ya English me likhein ya bolein. Hamari app aapki baat aasani se samajh sakti hai.",
    feature2Title: "Official Qanoon Se Tasdeeq",
    feature2Desc: "Hamaray system me Pakistan Penal Code (PPC) aur Civil laws mehfooz hain, nateeja hamesha sacha hota hai.",
    feature3Title: "Mehfooz Dashboard",
    feature3Desc: "Aapka case, aapki guftagu aur saboot bilkul mehfooz hain. Kisi teesray shaksh ko ijazat nahi.",
    feature4Title: "Dhoke Se Hifazat",
    feature4Desc: "Qanoon ke naam par darana ya paise thagrat karna ab nahi chalega. Misguide Detector aapko alert kar dega.",
    pipelineTag: "Parde Ke Peeche",
    pipelineTitle: "Hamare 8 AI Agents Kaise Kaam Karte Hain?",
    pipelineDesc: "Jaise hi aap masla likhte hain, 8 alag-alag expert agents ek team ki tarah aapke case par kaam shuru karte hain:",
    agent1Name: "Case Listener",
    agent1Desc: "Aapki pareshani ko bina kisi darr ke sunda hai, ahem nukat aur jazbaat ko samajhta hai.",
    agent2Name: "Case Classifier",
    agent2Desc: "Yeh taye karta hai ke aapka mamla kis qanoon (Criminal, Civil, ya Family) ke tehat aata hai.",
    agent3Name: "Questioning Agent",
    agent3Desc: "Agar mamle me koi zaroori baat adhuri reh jaye, to aasan sawalat ke zariye use poora karta hai.",
    agent4Name: "Rights Analyzer",
    agent4Desc: "Pakistan ke official qanoon aur daf'aat me se aapke haqooq talash karta hai.",
    agent5Name: "Document Checker",
    agent5Desc: "Aapke paas majood kaghazat aur sabooton ko check karke batata hai ke mamla kitna mazboot hai.",
    agent6Name: "Action Planner",
    agent6Desc: "Aapko step-by-step agla qadam batata hai—kahan jana hai, kya karna hai aur kitna waqt lagega.",
    agent7Name: "Misguide Detector",
    agent7Desc: "Sabse ahem! Yeh aapko kisi bhi qisam ke fraud, dhoke ya galat mashwaro se foran alert karta hai.",
    agent8Name: "Final Formatter",
    agent8Desc: "Saare agents ki research ko mila kar aapko ek aasan aur saaf nateeja (Final Advice) pesh karta hai.",
    futureTag: "Aane Wala Kal",
    futureTitle: "Future Plans: Wakeel Aur Shehri Ka Rabta",
    futureDesc: "Bohot jald hum Lawyer Dashboard launch kar rahe hain, jahan AI aapko direct verified Pakistani wakeelon se connect karega.",
    f1Title: "Verified Lawyer Marketplace",
    f1Desc: "Aapke case ke mutabiq AI aapko behtareen aur verified wakeel suggest karega jo aapki madad saste me kar sakein.",
    f2Title: "Direct Lawyer Chat System",
    f2Desc: "App ke andar hi aap wakeel se seedhi baat, fees ka faisla, aur files share kar sakenge.",
    f3Title: "Digital Court Room Predictor",
    f3Desc: "Aapke mamle ki nooriyat dekh kar AI pehle hi andaza lagayega ke faisla aap ke haq me aane ke kitne chances hain.",
    faqTag: "Sawal Jawab",
    faqTitle: "Aam Tor Par Pooche Jane Wale Sawal",
    faq1Q: "Kya Talash AI use karne par mujhe koi fees deni hogi?",
    faq1A: "Nahi, aam shehriyon ke liye shuruati legal intake aur apne haqooq ko samajhna bilkul muft (Free) hai.",
    faq2Q: "Kya mera data aur personal mamlaat leak to nahi honge?",
    faq2A: "Bilkul nahi. Hamara system end-to-end encrypted hai, aapka data kisi bhi ghair mutaliqa shaks ke sath share nahi hota.",
    faq3Q: "Agar mujhe bilkul qanoon nahi pata, to kya ye app mere kaam ki hai?",
    faq3A: "Yeh app bani hi un logo ke liye hai jo qanoon se darte hain. Aapko bas apni kahani batani hai, baki kaam hamare 8 agents karenge.",
    footerSubtitle: "Pakistan ke aam shehriyon ko qanooni tahaffuz dene ka ek azm.",
    footerRights: "Talash AI. Powered by DigiXta. All Rights Reserved."
  },
  urdu: {
    navHome: "ایپ کیسے چلتی ہے",
    navFeatures: "خصوصیات",
    navPipeline: "8 ایجنٹس پائپ لائن",
    navFuture: "آنے والے فیچرز",
    navFaqs: "سوال و جواب",
    downloadBtn: "ڈاؤن لوڈ APK",
    heroTag: "اب قانون سے ڈرنا کیسا؟ تلاش AI ہے نا!",
    heroTitleLine1: "پاکستان کا پہلا آسان",
    heroTitleLine2: "AI قانونی گائیڈ",
    heroDesc: "کیا آپ کو پاکستان کے قانون کی سمجھ نہیں ہے؟ کسی مسئلے میں پھنس گئے ہیں اور ڈر لگ رہا ہے؟ ہماری ایپ آپ کی کہانی سن کر، پاکستان کے آفیشل قانون کے مطابق آپ کو صحیح راستہ دکھاتی ہے۔",
    exploreBtn: "سمجھیں یہ کیسے کام کرتا ہے",
    downloadApkBtn: "ڈاؤن لوڈ اینڈرائیڈ APK (مفت)",
    aboutTag: "عام شہریوں کے لیے",
    aboutTitle: "ڈر ختم، اب انصاف ہوگا آسان",
    aboutDesc: "بہت سے پاکستانی صرف اس ڈر سے چپ رہتے ہیں کیونکہ انہیں پولیس اسٹیشن یا کورٹ کے چکر اور مشکل قانونی الفاظ سمجھ نہیں آتے۔ تلاش AI اس ڈر کو ختم کرتی ہے۔ آپ ایک آسان یوزر ڈیش بورڈ پر اپنا پورا معاملہ لکھتے ہیں، اور ہمارا سسٹم پوری ریسرچ کر کے آپ کو صحیح راہ دکھاتا ہے۔",
    step1Title: "مرحلہ 1: آپ نے مسئلہ بتایا",
    step1Desc: '"میری زمین پر چچا نے جبری قبضہ کر لیا ہے اور مجھے ڈرایا جا رہا ہے..."',
    step2Title: "مرحلہ 2: 8 AI ایجنٹس کی ریسرچ",
    step2Desc: "پاکستان پینل کوڈ (PPC) کی متعلقہ دفعات کے تحت ثبوتوں کا جائزہ لیا جا رہا ہے...",
    step3Title: "مرحلہ 3: آپ کی سلوشن رپورٹ",
    step3Desc: "✓ گھبرائیں نہیں! آپ کے پاس 3 قانونی حقوق ہیں۔ فوراً اس قریبی اتھارٹی سے رجوع کریں۔",
    featuresTag: "ایپ کی خصوصیات",
    featuresTitle: "آپ کی حفاظت کے لیے بہترین ٹول",
    feature1Title: "اپنی زبان میں بات کریں",
    feature1Desc: "اردو، رومن اردو یا انگلش میں لکھیں یا بولیں۔ ہماری ایپ آپ کی بات آسانی سے سمجھ سکتی ہے۔",
    feature2Title: "آفیشل قانون سے تصدیق",
    feature2Desc: "ہمارے سسٹم میں پاکستان پینل کوڈ (PPC) اور سول قوانین محفوظ ہیں، نتیجہ ہمیشہ سچا ہوتا ہے۔",
    feature3Title: "محفوظ ڈیش بورڈ",
    feature3Desc: "آپ کا کیس، آپ کی گفتگو اور ثبوت بالکل محفوظ ہیں۔ کسی تیسرے شخص کو اجازت نہیں ہوگی۔",
    feature4Title: "دھوکے سے حفاظت",
    feature4Desc: "قانون کے نام پر ڈرانا یا پیسے ٹھگنا اب نہیں چلے گا۔ مس گائیڈ ڈیٹیکٹر آپ کو پہلے ہی ہوشیار کر دے گا۔",
    pipelineTag: "پردے کے پیچھے",
    pipelineTitle: "ہمارے 8 AI ایجنٹس کیسے کام کرتے ہیں؟",
    pipelineDesc: "جیسے ہی آپ مسئلہ لکھتے ہیں، 8 الگ الگ ماہر ایجنٹس ایک ٹیم کی طرح آپ کے کیس پر کام شروع کرتے ہیں:",
    agent1Name: "کیس لسنر (Case Listener)",
    agent1Desc: "آپ کی پریشانی کو بنا کسی ڈر کے سنتا ہے، اہم نکات اور جذبات کو سمجھتا ہے۔",
    agent2Name: "کیس کلاسیفائر (Case Classifier)",
    agent2Desc: "یہ طے کرتا ہے کہ آپ کا معاملہ کس قانون (فوجداری، سول، یا فیملی) کے تحت آتا ہے۔",
    agent3Name: "کوسچننگ ایجنٹ (Questioning Agent)",
    agent3Desc: "اگر معاملے میں کوئی ضروری بات ادھوری رہ جائے، تو آسان سوالات کے ذریعے اسے پورا کرتا ہے۔",
    agent4Name: "رائٹس اینالائزر (Rights Analyzer)",
    agent4Desc: "پاکستان کے آفیشل قانون اور دفعات میں سے آپ کے حقوق تلاش کرتا ہے۔",
    agent5Name: "ڈاکومنٹ چیکر (Document Checker)",
    agent5Desc: "آپ کے پاس موجود کاغذات اور ثبوتوں کو چیک کر کے بتاتا ہے کہ معاملہ کتنا مضبوط ہے۔",
    agent6Name: "ایکشن پلانر (Action Planner)",
    agent6Desc: "آپ کو مرحلہ وار اگلا قدم بتاتا ہے—کہاں جانا ہے، کیا کرنا ہے اور کتنا وقت لگے گا۔",
    agent7Name: "مس گائیڈ ڈیٹیکٹر (Misguide Detector)",
    agent7Desc: "سب سے اہم! یہ آپ کو کسی بھی قسم کے فراڈ، دھوکے یا غلط مشوروں سے فوراً الرٹ کرتا ہے۔",
    agent8Name: "فائنل فارمیٹر (Final Formatter)",
    agent8Desc: "سارے ایجنٹس کی ریسرچ کو ملا کر آپ کو ایک آسان اور صاف نتیجہ پیش کرتا ہے۔",
    futureTag: "آنے والا کل",
    futureTitle: "مستقبل کے منصوبے: وکیل اور شہری کا رابطہ",
    futureDesc: "بہت جلد ہم وکیل ڈیش بورڈ لانچ کر رہے ہیں، جہاں AI آپ کو ڈائریکٹ تصدیق شدہ پاکستانی وکیلوں سے کنکٹ کرے گا۔",
    f1Title: "تصدیق شدہ وکیلوں کی مارکیٹ",
    f1Desc: "آپ کے کیس کے مطابق AI آپ کو بہترین اور تصدیق شدہ وکیل تجویز کرے گا جو آپ کی مدد سستے میں کر سکیں۔",
    f2Title: "براہِ راست وکیل چیٹ سسٹم",
    f2Desc: "ایپ کے اندر ہی آپ وکیل سے سیدھی بات، فیس کا فیصلہ، اور فائلز شیئر کر سکیں گے۔",
    f3Title: "ڈیجیٹل کورٹ روم پریڈیکٹر",
    f3Desc: "آپ کے معاملے کی نوعیت دیکھ کر AI پہلے ہی اندازہ لگائے گا کہ فیصلہ آپ کے حق میں آنے کے کتنے چانسز ہیں۔",
    faqTag: "سوال و جواب",
    faqTitle: "عام طور پر پوچھے جانے والے سوالات",
    faq1Q: "کیا تلاش AI استعمال کرنے پر مجھے کوئی فیس دینی ہوگی؟",
    faq1A: "نہیں، عام شہریوں کے لیے شروعاتی قانونی رہنمائی اور اپنے حقوق کو سمجھنا بالکل مفت (Free) ہے۔",
    faq2Q: "کیا میرا ڈیٹا اور ذاتی معاملات لیک تو نہیں ہوں گے؟",
    faq2A: "بالکل نہیں۔ ہمارا سسٹم اینڈ ٹو اینڈ انکرپٹڈ ہے، آپ کا ڈیٹا کسی بھی غیر متعلقہ شخص کے ساتھ شیئر نہیں ہوتا۔",
    faq3Q: "اگر مجھے بالکل قانون نہیں پتا، تو کیا یہ ایپ میرے کام کی ہے؟",
    faq3A: "یہ ایپ بنی ہی ان لوگوں کے لیے ہے جو قانون سے ڈرتے ہیں۔ آپ کو بس اپنی کہانی بتانی ہے، باقی کام ہمارے 8 ایجنٹس خود کریں گے۔",
    footerSubtitle: "پاکستان کے عام شہریوں کو قانونی تحفظ دینے کا ایک عزم۔",
    footerRights: "تلاش AI۔ پاورڈ بائی DigiXta۔ جملہ حقوق محفوظ ہیں۔"
  }
};

type LanguageKey = "en" | "roman" | "urdu";

export default function Home() {
  const [lang, setLang] = useState<LanguageKey>("en");
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Content current source selection
  const content = translations[lang];
  const isRtl = lang === "urdu";

  const pipelineSteps = [
    { id: 1, name: content.agent1Name, desc: content.agent1Desc },
    { id: 2, name: content.agent2Name, desc: content.agent2Desc },
    { id: 3, name: content.agent3Name, desc: content.agent3Desc },
    { id: 4, name: content.agent4Name, desc: content.agent4Desc },
    { id: 5, name: content.agent5Name, desc: content.agent5Desc },
    { id: 6, name: content.agent6Name, desc: content.agent6Desc },
    { id: 7, name: content.agent7Name, desc: content.agent7Desc },
    { id: 8, name: content.agent8Name, desc: content.agent8Desc },
  ];

  const featuresList = [
    { title: content.feature1Title, desc: content.feature1Desc, icon: <MessageSquare className="w-6 h-6 text-[#c9a84c]" /> },
    { title: content.feature2Title, desc: content.feature2Desc, icon: <Scale className="w-6 h-6 text-[#c9a84c]" /> },
    { title: content.feature3Title, desc: content.feature3Desc, icon: <Shield className="w-6 h-6 text-[#c9a84c]" /> },
    { title: content.feature4Title, desc: content.feature4Desc, icon: <Search className="w-6 h-6 text-[#c9a84c]" /> },
  ];

  const futureScopeList = [
    { title: content.f1Title, desc: content.f1Desc, icon: <Users className="w-6 h-6 text-[#c9a84c]" /> },
    { title: content.f2Title, desc: content.f2Desc, icon: <MessageSquare className="w-6 h-6 text-[#c9a84c]" /> },
    { title: content.f3Title, desc: content.f3Desc, icon: <Cpu className="w-6 h-6 text-[#c9a84c]" /> },
  ];

  const faqsList = [
    { q: content.faq1Q, a: content.faq1A },
    { q: content.faq2Q, a: content.faq2A },
    { q: content.faq3Q, a: content.faq3A },
  ];

  const languagesConfig = [
    { key: "en", label: "English" },
    { key: "roman", label: "Urdu (Roman)" },
    { key: "urdu", label: "اردو (Urdu)" }
  ];

  const currentLangLabel = languagesConfig.find(l => l.key === lang)?.label;

  const fadeInUp = {
    initial: { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" }
  } as const;

  return (
    <div className={`min-h-screen bg-[#0a0a0b] text-[#f4f4f6] font-sans antialiased selection:bg-[#c9a84c] selection:text-[#0a0a0b] ${isRtl ? "rtl text-right" : "ltr text-left"}`}>
      
      {/* --- NAVBAR --- */}
      <nav className="sticky top-0 z-50 w-full border-b border-[#151517]/80 bg-[#0a0a0b]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          
          <motion.div initial={{ opacity: 0, x: isRtl ? 20 : -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center space-x-2">
            <span className="text-2xl font-black tracking-wider text-[#c9a84c]">TALASH<span className="text-white">.AI</span></span>
          </motion.div>

          {/* Desktop Nav Links */}
          <div className="hidden items-center space-x-8 text-sm font-medium tracking-wide md:flex space-x-reverse">
            <a href="#flow" className="transition-colors duration-200 text-gray-400 hover:text-[#c9a84c]">{content.navHome}</a>
            <a href="#features" className="transition-colors duration-200 text-gray-400 hover:text-[#c9a84c]">{content.navFeatures}</a>
            <a href="#pipeline" className="transition-colors duration-200 text-gray-400 hover:text-[#c9a84c]">{content.navPipeline}</a>
            <a href="#future" className="transition-colors duration-200 text-gray-400 hover:text-[#c9a84c]">{content.navFuture}</a>
            <a href="#faqs" className="transition-colors duration-200 text-gray-400 hover:text-[#c9a84c]">{content.navFaqs}</a>
          </div>

          {/* Actions Block: Language Trigger & APK Download */}
          <div className="hidden items-center space-x-4 md:flex space-x-reverse">
            {/* Language Dropdown Selector */}
            <div className="relative">
              <button 
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="inline-flex items-center space-x-1.5 border border-[#151517] bg-[#151517] px-3 py-2 text-xs font-semibold text-gray-300 hover:border-[#c9a84c]/40 space-x-reverse"
              >
                <Globe className="w-3.5 h-3.5 text-[#c9a84c]" />
                <span>{currentLangLabel}</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${langMenuOpen ? "rotate-180" : ""}`} />
              </button>

         <AnimatePresence>
  {langMenuOpen && (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className={`absolute mt-2 w-40 border border-[#151517] bg-[#151517] shadow-xl ${isRtl ? "left-0 text-right" : "right-0 text-left"}`}
    >
      {languagesConfig.map((item) => (
        <button
          key={item.key}
          onClick={() => {
            setLang(item.key as LanguageKey);
            setLangMenuOpen(false);
          }}
          className={`w-full px-4 py-2.5 text-xs transition-colors hover:bg-[#0a0a0b] hover:text-[#c9a84c] ${
            isRtl ? "text-right" : "text-left"
          } ${
            lang === item.key ? "text-[#c9a84c] font-bold bg-[#0a0a0b]" : "text-gray-400"
          }`}
        >
          {item.label}
        </button>
      ))}
    </motion.div>
  )}
</AnimatePresence>
            </div>

            <a href="talashai.apk" download className="inline-flex items-center rounded-none border border-[#c9a84c] bg-[#c9a84c] px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#0a0a0b] transition-all duration-300 hover:bg-transparent hover:text-[#c9a84c]">
              <Download className="w-4 h-4 mr-1.5 rtl:ml-1.5" /> {content.downloadBtn}
            </a>
          </div>

          {/* Mobile Action Controls Trigger */}
          <div className="flex items-center space-x-3 md:hidden space-x-reverse">
            {/* Quick Language Toggle icon for mobile */}
            <button 
              onClick={() => {
                const cycle: LanguageKey[] = ["en", "roman", "urdu"];
                const nextIdx = (cycle.indexOf(lang) + 1) % cycle.length;
                setLang(cycle[nextIdx]);
              }}
              className="p-1.5 border border-[#151517] bg-[#151517]"
              title="Change Language"
            >
              <Globe className="w-4 h-4 text-[#c9a84c]" />
            </button>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-[#f4f4f6] focus:outline-none" aria-label="Toggle Menu">
              <div className="space-y-1.5">
                <span className={`block h-0.5 w-6 bg-[#c9a84c] transition-transform duration-300 ${mobileMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`block h-0.5 w-6 bg-[#c9a84c] transition-opacity duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-6 bg-[#c9a84c] transition-transform duration-300 ${mobileMenuOpen ? "-translate-y-1 -rotate-45" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="border-b border-[#151517] bg-[#0a0a0b] md:hidden">
              <div className="flex flex-col space-y-4 px-6 pb-6 pt-2 text-sm font-medium">
                <a href="#flow" onClick={() => setMobileMenuOpen(false)} className="text-gray-400 hover:text-[#c9a84c]">{content.navHome}</a>
                <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-gray-400 hover:text-[#c9a84c]">{content.navFeatures}</a>
                <a href="#pipeline" onClick={() => setMobileMenuOpen(false)} className="text-gray-400 hover:text-[#c9a84c]">{content.navPipeline}</a>
                <a href="#future" onClick={() => setMobileMenuOpen(false)} className="text-gray-400 hover:text-[#c9a84c]">{content.navFuture}</a>
                <a href="#faqs" onClick={() => setMobileMenuOpen(false)} className="text-gray-400 hover:text-[#c9a84c]">{content.navFaqs}</a>
                
                <div className="h-px bg-[#151517] w-full my-1" />
                <a href="talashai.apk" download onClick={() => setMobileMenuOpen(false)} className="w-full text-center bg-[#c9a84c] text-[#0a0a0b] py-2.5 text-xs uppercase font-bold tracking-wider inline-flex items-center justify-center">
                  <Download className="w-4 h-4 mr-2 rtl:ml-2" /> {content.downloadBtn}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- HERO / SCREEN SECTION --- */}
      <header id="hero" className="relative overflow-hidden px-6 py-24 lg:py-36">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,0.04),transparent_50%)]" />
        <div className="mx-auto max-w-5xl text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <span className="inline-block border border-[#c9a84c]/40 bg-[#151517] px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#c9a84c]">
              {content.heroTag}
            </span>
          </motion.div>
          
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl leading-tight">
            {content.heroTitleLine1} <br className="hidden sm:inline"/>
            <span className="text-[#c9a84c]">{content.heroTitleLine2}</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mx-auto mt-6 max-w-2xl text-sm sm:text-base text-gray-400 leading-relaxed">
            {content.heroDesc}
          </motion.p>

          <motion.div id="download" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-10 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 sm:space-x-reverse">
            <a href="#pipeline" className="w-full sm:w-auto px-8 py-4 bg-[#c9a84c] text-[#0a0a0b] font-bold text-xs uppercase tracking-widest transition-transform hover:scale-105 text-center">
              {content.exploreBtn}
            </a>
            <a href="talashai.apk" download className="w-full sm:w-auto px-8 py-4 bg-[#151517] border border-[#222226] hover:border-[#c9a84c]/50 text-white font-bold text-xs uppercase tracking-widest transition-colors inline-flex items-center justify-center">
              <Download className="w-4 h-4 mr-2 rtl:ml-2 text-[#c9a84c]" /> {content.downloadApkBtn}
            </a>
          </motion.div>
        </div>
      </header>

      <main>
        {/* --- ABOUT / APP ROADMAP SCENARIO --- */}
        <motion.section id="flow" {...fadeInUp} className="mx-auto max-w-7xl px-6 py-20 border-t border-[#151517]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#c9a84c]">{content.aboutTag}</span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{content.aboutTitle}</h2>
              <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                {content.aboutDesc}
              </p>
            </div>

            {/* Simulated Case Interaction Screen Flow Mockup */}
            <div className="lg:col-span-7 bg-[#151517] border border-[#222226] p-8 rounded-none shadow-2xl relative">
              <div className="absolute top-3 left-4 flex space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-gray-800" />
                <span className="w-2 h-2 rounded-full bg-gray-800" />
                <span className="w-2 h-2 rounded-full bg-gray-800" />
              </div>
              <div className="mt-4 space-y-4">
                <div className="border-l-2 border-[#c9a84c] pl-4 pr-4">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">{content.step1Title}</h4>
                  <p className="text-xs text-gray-400 mt-1 italic">{content.step1Desc}</p>
                </div>
                <div className="border-l-2 border-gray-700 pl-4 pr-4">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">{content.step2Title}</h4>
                  <p className="text-xs text-gray-500 mt-1">{content.step2Desc}</p>
                </div>
                <div className="border-l-2 border-green-600 pl-4 pr-4">
                  <h4 className="text-xs font-bold text-green-500 uppercase tracking-wider">{content.step3Title}</h4>
                  <p className="text-xs text-white mt-1 font-medium">{content.step3Desc}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* --- FEATURES SECTION --- */}
        <section id="features" className="bg-[#151517] py-20 px-6 border-y border-[#151517]">
          <div className="mx-auto max-w-7xl">
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#c9a84c]">{content.featuresTag}</span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{content.featuresTitle}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuresList.map((feat, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-[#0a0a0b] p-6 border border-transparent hover:border-[#c9a84c]/20 transition-all duration-300">
                  <div className="mb-4 bg-[#151517] w-12 h-12 flex items-center justify-center border border-gray-800 rounded-none">
                    {feat.icon}
                  </div>
                  <h3 className="text-base font-bold text-white tracking-wide">{feat.title}</h3>
                  <p className="mt-2 text-xs text-gray-400 leading-relaxed">{feat.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 8 MULTI-AGENT PIPELINE --- */}
        <section id="pipeline" className="py-20 px-6 mx-auto max-w-7xl">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c9a84c]">{content.pipelineTag}</span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{content.pipelineTitle}</h2>
            <p className="text-xs text-gray-400 mt-2">{content.pipelineDesc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pipelineSteps.map((agent) => (
              <motion.div key={agent.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: agent.id * 0.05 }} className="bg-[#151517] border border-transparent hover:border-[#c9a84c]/30 p-5 flex flex-col justify-between transition-all">
                <div>
                  <div className="flex items-center justify-between border-b border-[#0a0a0b] pb-3 mb-3">
                    <span className="text-[10px] font-mono text-gray-500 font-bold">STAGE 0{agent.id}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#c9a84c]" />
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight">{agent.name}</h3>
                  <p className="text-xs text-gray-400 mt-2 leading-relaxed">{agent.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- FUTURE FEATURES SCOPE --- */}
        <section id="future" className="bg-[#151517] py-20 px-6 border-t border-[#151517]">
          <div className="mx-auto max-w-7xl">
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#c9a84c]">{content.futureTag}</span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{content.futureTitle}</h2>
              <p className="text-xs text-gray-400 mt-2">{content.futureDesc}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {futureScopeList.map((fFeat, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.1 }} className="bg-[#0a0a0b] p-6 border-l-2 border-[#c9a84c] rtl:border-l-0 rtl:border-r-2 rtl:border-r-[#c9a84c] relative overflow-hidden">
                  <div className="mb-3 bg-[#151517] w-10 h-10 flex items-center justify-center border border-gray-800">
                    {fFeat.icon}
                  </div>
                  <h3 className="text-base font-bold text-white tracking-wide">{fFeat.title}</h3>
                  <p className="mt-2 text-xs text-gray-400 leading-relaxed">{fFeat.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- FAQS SECTION --- */}
        <section id="faqs" className="mx-auto max-w-4xl px-6 py-20">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c9a84c]">{content.faqTag}</span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{content.faqTitle}</h2>
          </div>

          <div className="space-y-4">
            {faqsList.map((faq, idx) => (
              <div key={idx} className="bg-[#151517] border border-[#151517]">
                <button onClick={() => setActiveFaq(activeFaq === idx ? null : idx)} className="w-full flex items-center justify-between p-5 text-left font-semibold text-sm text-white focus:outline-none space-x-reverse" aria-expanded={activeFaq === idx}>
                  <span className="flex items-center space-x-2 space-x-reverse">
                    <HelpCircle className="w-4 h-4 text-[#c9a84c] inline shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <span className={`text-[#c9a84c] text-lg transform transition-transform duration-200 ${activeFaq === idx ? "rotate-45" : "rotate-0"}`}>+</span>
                </button>
                
                <AnimatePresence initial={false}>
                  {activeFaq === idx && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2, ease: "easeInOut" }}>
                      <div className="px-5 pb-5 text-xs text-gray-400 leading-relaxed border-t border-[#0a0a0b] pt-3">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-[#0a0a0b] border-t border-[#151517] py-12 px-6">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 text-xs text-gray-500">
          <div className="flex flex-col space-y-1 text-center md:text-left rtl:md:text-right">
            <p className="font-bold text-sm tracking-widest text-white">TALASH<span className="text-[#c9a84c]">.AI</span></p>
            <p className="text-[11px] text-gray-400">{content.footerSubtitle}</p>
          </div>
          
          <div className="flex space-x-6 text-gray-400 space-x-reverse">
            <a href="#hero" className="hover:text-[#c9a84c] transition-colors">Top</a>
            <a href="#flow" className="hover:text-[#c9a84c] transition-colors">{content.navHome}</a>
            <a href="#pipeline" className="hover:text-[#c9a84c] transition-colors">{content.navPipeline}</a>
            <a href="#faqs" className="hover:text-[#c9a84c] transition-colors">{content.navFaqs}</a>
          </div>

          <div className="text-center md:text-right rtl:md:text-left font-mono text-[10px] text-gray-600">
            &copy; {new Date().getFullYear()} {content.footerRights}
          </div>
        </div>
      </footer>

    </div>
  );
}