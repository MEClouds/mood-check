import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

function LanguageProvider({ children }) {
  const [isRTL, setIsRTL] = useState(false);
  const [questions, setQuestions] = useState([
    { en: "Feeling sad or down", ar: "هل تشعر بالحزن أو الاكتئاب؟", value: 1 },
    {
      en: "Feeling more irritable than usual",
      ar: "هل تشعر بالتهيج أكثر من المعتاد؟",
      value: 0,
    },
    {
      en: "Feeling discouraged or hopeless about your future",
      ar: "هل تشعر باليأس أو فقدان الأمل؟",
      value: 0,
    },
    {
      en: "Feeling guilty or worthless",
      ar: "هل تشعر بالذنب أو انعدام القيمة؟",
      value: 0,
    },
    {
      en: "Finding it hard to concentrate",
      ar: "هل تجد صعوبة في التركيز؟",
      value: 0,
    },
    {
      en: "Losing interest in your usual activities",
      ar: "هل فقدت الاهتمام بأنشطتك العادية؟",
      value: 0,
    },
    {
      en: "Lacking energy and feeling tired all the time",
      ar: "هل تفتقر إلى الطاقة وتشعر بالتعب في كل الأوقات؟",
      value: 0,
    },
    {
      en: "Having trouble sleeping or sleeping too much",
      ar: "هل تواجه صعوبة في النوم أو تنام كثيرًا؟",
      value: 0,
    },
    {
      en: "Losing your appetite or eating too much",
      ar: "هل فقدت شهيتك أو تأكل كثيرًا؟",
      value: 0,
    },
    {
      en: "Feeling that life is not worth living",
      ar: "هل تشعر بأن الحياة لا تستحق العيش؟",
      value: 0,
    },
    {
      en: "Feeling that everything is a chore",
      ar: "هل تشعر بأن كل شيء هو عمل روتيني ؟",
      value: 0,
    },
    {
      en: "Feeling that nothing can be enjoyed",
      ar: "هل تشعر بأنه لا يمكن الاستمتاع بأي شيء؟",
      value: 0,
    },
    {
      en: "Feeling that you are a failure",
      ar: "هل تشعر بأنك فاشل؟",
      value: 0,
    },
    {
      en: "Feeling that you have let yourself or your family down",
      ar: "هل تشعر بأنك خذلت نفسك أو عائلتك؟",
      value: 0,
    },
    {
      en: "Feeling that you have disappointed others",
      ar: "هل تشعر بأنك خيبت أمل الآخرين؟",
      value: 0,
    },
    {
      en: "Feeling that you are not as good as other people",
      ar: "هل تشعر بأنك لست جيدًا مثل الاخرين ",
      value: 0,
    },
    {
      en: "Feeling anxious or worried",
      ar: "الشعور بالقلق أو الخوف",
      value: 0,
    },
    {
      en: "Experiencing physical symptoms such as headaches or stomachaches",
      ar: "تواجه أعراض جسدية مثل الصداع أو آلام المعدة",
      value: 0,
    },
    {
      en: "Feeling like you have no control over your life",
      ar: "الشعور بأنك لا تملك السيطرة على حياتك",
      value: 0,
    },
    {
      en: "Avoiding social situations or isolating yourself",
      ar: "تتجنب المواقف الاجتماعية أو تعزل نفسك",
      value: 0,
    },
    {
      en: "Experiencing panic attacks or sudden feelings of terror",
      ar: "تواجه هجمات الذعر أو الشعور المفاجئ بالإرهاب",
      value: 0,
    },
    {
      en: "Feeling restless or on edge",
      ar: "الشعور بالقلق أو العصبية",
      value: 0,
    },
    {
      en: "Having thoughts of harming yourself or others",
      ar: "وجود أفكار بالإيذاء الذاتي أو الآخرين",
      value: 0,
    },
    {
      en: "Feeling like you are disconnected from reality",
      ar: "الشعور بالانعزال عن الواقع",
      value: 0,
    },
    {
      en: "Experiencing flashbacks or nightmares related to a traumatic event",
      ar: "تجربة الذكريات الفورية أو الكوابيس المتعلقة بحدث مؤلم",
      value: 0,
    },
    {
      en: "Feeling like you are constantly on guard or in danger",
      ar: "الشعور بأنك دائمًا في حالة تأهب أو في خطر",
      value: 0,
    },

    // Add more questions here
  ]);

  const toggleLanguage = () => {
    setIsRTL((prev) => !prev);
  };

  const direction = isRTL ? "rtl" : "ltr";

  const handleValueChange = (index, newValue) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].value = newValue;
    setQuestions(updatedQuestions);
  };

  return (
    <LanguageContext.Provider
      value={{
        questions,
        setQuestions,
        toggleLanguage,
        direction,
        handleValueChange,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
