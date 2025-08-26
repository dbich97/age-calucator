
import { type LocaleData } from '../types';

export const locales: LocaleData = {
  en: {
    // General
    title: 'Age Calculator',
    subtitle: 'Enter your date of birth to find out your exact age.',
    footer_rights: 'All rights reserved.',
    
    // Navigation
    nav_home: 'Home',
    nav_about: 'About Us',
    nav_privacy: 'Privacy Policy',
    nav_contact: 'Contact Us',

    // Home Page SEO Meta
    home_html_title: 'Age Calculator | How Old Am I? | Birthday Calculator',
    home_meta_description: "Accurately calculate your age in years, months, and days with our free online age calculator. Find out 'how old am I' and count down to your next birthday.",
    
    // Calculator
    button_calculate: 'Calculate Age',
    label_day: 'Day',
    label_month: 'Month',
    label_year: 'Year',
    calendar_gregorian: 'Gregorian',
    calendar_hijri: 'Hijri',
    
    // Months
    month_1: 'January', month_2: 'February', month_3: 'March', month_4: 'April', month_5: 'May', month_6: 'June', month_7: 'July', month_8: 'August', month_9: 'September', month_10: 'October', month_11: 'November', month_12: 'December',
    hijri_month_1: 'Muharram', hijri_month_2: 'Safar', hijri_month_3: "Rabi' al-awwal", hijri_month_4: "Rabi' al-thani", hijri_month_5: 'Jumada al-awwal', hijri_month_6: 'Jumada al-thani', hijri_month_7: 'Rajab', hijri_month_8: "Sha'ban", hijri_month_9: 'Ramadan', hijri_month_10: 'Shawwal', hijri_month_11: "Dhu al-Qi'dah", hijri_month_12: 'Dhu al-Hijjah',
    
    // Results
    result_intro: 'You are',
    result_years: 'years',
    result_months: 'months',
    result_and: 'and',
    result_days: 'days old',
    share_result: 'Share Result',
    copy_result: 'Copy Result',
    copied_success: 'Copied to clipboard!',
    summary_title: 'Age Summary',
    summary_birth_date: 'Birth Date',
    summary_day_of_birth: 'Day of Birth',
    summary_age_in_months: 'Age in Months',
    summary_age_in_weeks: 'Age in Weeks',
    summary_age_in_days: 'Age in Days',
    summary_next_birthday_date: 'Next Birthday Date',
    summary_next_birthday_weekday: 'Next Birthday Day',
    summary_days_remaining: 'Days Remaining',
    countdown_happy_birthday: 'Happy Birthday!',
    countdown_tomorrow: 'Your birthday is tomorrow!',
    countdown_days_remaining: '{days} days until your next birthday!',
    
    // Errors
    error_date_required: 'Please enter your date of birth.',
    error_future_date: 'Date of birth cannot be in the future.',
    error_invalid_date: 'Please enter a valid date.',
    
    // Home Page Content
    seo_content_title: 'Your Ultimate Guide to Age Calculation',
    seo_title_gregorian: 'Gregorian Age Calculation: The Global Standard',
    seo_p_gregorian: "Our tool makes it simple to calculate your age with the Gregorian calendar, used worldwide. Just enter your day, month, and year of birth to get an exact result in years, months, and days. Find out precisely 'how old am I' with a few clicks.",
    seo_title_hijri: 'Hijri Age Calculation: A Cultural Heritage',
    seo_p_hijri: "For those who follow the Islamic calendar, we offer a precise Hijri age calculation. Select the Hijri option, enter your birth date, and discover your age according to the lunar calendar. It's a perfect way to connect with your cultural roots.",
    seo_title_details: 'Discover More About Your Birthday',
    seo_p_details: "Beyond just your age, our calculator tells you how many days are left until your next birthday and reveals the exact day of the week you were born. It's everything you need to know about your special day, all in one place.",
    fun_fact_title: 'Amazing Birthday Facts',
    fun_fact_1: "Did you know that in a room of just 23 people, there’s a 50% chance that two of them share the same birthday? This is known as the Birthday Paradox.",
    fun_fact_2: "In Vietnam, everyone celebrates their birthday on the same day: New Year's Day, known as 'Tết'. Regardless of when they were actually born, everyone gets a year older on this day.",

    // About Page
    about_html_title: 'About Us | Age Calculator',
    about_meta_description: 'Learn more about the Age Calculator, our mission to provide a simple, accurate, and beautifully designed tool for everyone.',
    about_title: 'About Us',
    about_p1: 'Welcome to the Age Calculator, a project born out of a simple idea: to create the fastest, most beautiful, and easiest-to-use age calculation tool on the web.',
    about_p2: 'Our mission is to provide a free, accessible, and multilingual tool that helps anyone, anywhere, determine their exact age or calculate time differences with precision. We believe in clean design, user privacy, and providing a delightful experience.',
    about_p3: 'This tool was built with modern technology to ensure it is fast, reliable, and works perfectly on any device. We hope you find it useful!',

    // Privacy Policy Page
    privacy_html_title: 'Privacy Policy | Age Calculator',
    privacy_meta_description: 'Read our privacy policy. We respect your privacy. Our Age Calculator performs all calculations in your browser and does not collect any personal data.',
    privacy_title: 'Privacy Policy',
    privacy_p1: 'Your privacy is critically important to us. At Age Calculator, we have a few fundamental principles:',
    privacy_p2: 'We do not ask for, collect, or store any of your personal information. The date of birth you enter is used solely for the calculation and is never sent to our servers or saved anywhere. All calculations happen directly in your web browser.',
    privacy_p3: 'Since we do not collect any data, we do not share any data with third parties. Your use of this website is completely anonymous. We use localStorage only to save your language preference for your convenience.',

    // Contact Page
    contact_html_title: 'Contact Us | Age Calculator',
    contact_meta_description: 'Get in touch with the Age Calculator team. We welcome your feedback, suggestions, and questions.',
    contact_title: 'Contact Us',
    contact_p1: 'We love hearing from our users! If you have any feedback, suggestions for new features, or just want to say hello, please feel free to reach out.',
    contact_p2: 'You can contact us via email at:',
    contact_email: 'support@lazfan.com',
  },
  ar: {
    // General
    title: 'حاسبة العمر',
    subtitle: 'أدخل تاريخ ميلادك لمعرفة عمرك بدقة.',
    footer_rights: 'كل الحقوق محفوظة.',

    // Navigation
    nav_home: 'الرئيسية',
    nav_about: 'من نحن',
    nav_privacy: 'سياسة الخصوصية',
    nav_contact: 'تواصل معنا',

    // Home Page SEO Meta
    home_html_title: 'حاسبة العمر | كم عمري؟ | حساب تاريخ الميلاد',
    home_meta_description: "احسب عمرك بدقة بالسنوات والأشهر والأيام باستخدام حاسبة العمر المجانية عبر الإنترنت. اكتشف 'كم عمري' بالضبط وقم بالعد التنازلي لعيد ميلادك القادم.",
    
    // Calculator
    button_calculate: 'احسب العمر',
    label_day: 'يوم',
    label_month: 'شهر',
    label_year: 'سنة',
    calendar_gregorian: 'الميلادي',
    calendar_hijri: 'الهجري',

    // Months
    month_1: 'يناير', month_2: 'فبراير', month_3: 'مارس', month_4: 'أبريل', month_5: 'مايو', month_6: 'يونيو', month_7: 'يوليو', month_8: 'أغسطس', month_9: 'سبتمبر', month_10: 'أكتوبر', month_11: 'نوفمبر', month_12: 'ديسمبر',
    hijri_month_1: 'محرم', hijri_month_2: 'صفر', hijri_month_3: 'ربيع الأول', hijri_month_4: 'ربيع الثاني', hijri_month_5: 'جمادى الأولى', hijri_month_6: 'جمادى الآخرة', hijri_month_7: 'رجب', hijri_month_8: 'شعبان', hijri_month_9: 'رمضان', hijri_month_10: 'شوال', hijri_month_11: 'ذو القعدة', hijri_month_12: 'ذو الحجة',

    // Results
    result_intro: 'عمرك هو',
    result_years: 'سنوات',
    result_months: 'أشهر',
    result_and: 'و',
    result_days: 'أيام',
    share_result: 'مشاركة النتيجة',
    copy_result: 'نسخ النتيجة',
    copied_success: 'تم النسخ إلى الحافظة!',
    summary_title: 'ملخص العمر',
    summary_birth_date: 'تاريخ الميلاد',
    summary_day_of_birth: 'يوم الميلاد',
    summary_age_in_months: 'العمر بالشهور',
    summary_age_in_weeks: 'العمر بالأسابيع',
    summary_age_in_days: 'العمر بالأيام',
    summary_next_birthday_date: 'تاريخ الميلاد القادم',
    summary_next_birthday_weekday: 'يوم الميلاد القادم',
    summary_days_remaining: 'الأيام المتبقية',
    countdown_happy_birthday: 'عيد ميلاد سعيد!',
    countdown_tomorrow: 'عيد ميلادك غداً!',
    countdown_days_remaining: 'يتبقى {days} يومًا على عيد ميلادك القادم!',
    
    // Errors
    error_date_required: 'الرجاء إدخال تاريخ ميلادك.',
    error_future_date: 'لا يمكن أن يكون تاريخ الميلاد في المستقبل.',
    error_invalid_date: 'الرجاء إدخال تاريخ صحيح.',
    
    // Home Page Content
    seo_content_title: 'دليلك الشامل لحساب العمر',
    seo_title_gregorian: 'حساب العمر بالميلادي: المعيار العالمي',
    seo_p_gregorian: "أداتنا تجعل من السهل حساب عمرك بالتقويم الميلادي، المستخدم في جميع أنحاء العالم. فقط أدخل يوم وشهر وسنة ميلادك لتحصل على نتيجة دقيقة بالسنوات والأشهر والأيام. اكتشف بالضبط 'كم عمري' ببضع نقرات.",
    seo_title_hijri: 'حساب العمر بالهجري: تراث ثقافي',
    seo_p_hijri: "لمن يتبعون التقويم الإسلامي، نقدم حسابًا دقيقًا للعمر بالهجري. اختر خيار الهجري، وأدخل تاريخ ميلادك، واكتشف عمرك وفقًا للتقويم القمري. إنها طريقة مثالية للتواصل مع جذورك الثقافية.",
    seo_title_details: 'اكتشف المزيد عن يوم ميلادك',
    seo_p_details: "بالإضافة إلى حساب العمر، تخبرك حاسبتنا بعدد الأيام المتبقية حتى عيد ميلادك القادم وتكشف عن اليوم الذي ولدت فيه بالضبط. כל ما تحتاج لمعرفته حول يومك الخاص، في مكان واحد.",
    fun_fact_title: 'حقائق مدهشة عن عيد ميلادك',
    fun_fact_1: "هل تعلم أن فرصة مشاركة عيد ميلادك مع شخص آخر في غرفة بها 23 شخصًا فقط هي حوالي 50%؟ تُعرف هذه الظاهرة بـ 'مفارقة عيد الميلاد'.",
    fun_fact_2: "في فيتنام، يحتفل الجميع بعيد ميلادهم في نفس اليوم، وهو يوم رأس السنة الجديدة 'Tết'. بغض النظر عن يوم مولدهم الفعلي، يصبح الجميع أكبر بسنة في هذا اليوم.",

    // About Page
    about_html_title: 'من نحن | حاسبة العمر',
    about_meta_description: 'تعرف على المزيد حول حاسبة العمر، مهمتنا هي توفير أداة بسيطة ودقيقة ومصممة بشكل جميل للجميع.',
    about_title: 'من نحن',
    about_p1: 'أهلاً بك في حاسبة العمر، مشروع وُلد من فكرة بسيطة: إنشاء أسرع وأجمل وأسهل أداة لحساب العمر على الإنترنت.',
    about_p2: 'مهمتنا هي توفير أداة مجانية، سهلة الوصول، ومتعددة اللغات تساعد أي شخص في أي مكان على تحديد عمره بدقة أو حساب الفروق الزمنية. نحن نؤمن بالتصميم النظيف، وخصوصية المستخدم، وتقديم تجربة ممتعة.',
    about_p3: 'تم بناء هذه الأداة بأحدث التقنيات لضمان أنها سريعة وموثوقة وتعمل بشكل مثالي على أي جهاز. نأمل أن تجدها مفيدة!',

    // Privacy Policy Page
    privacy_html_title: 'سياسة الخصوصية | حاسبة العمر',
    privacy_meta_description: 'اقرأ سياسة الخصوصية الخاصة بنا. نحن نحترم خصوصيتك. تقوم حاسبة العمر بجميع العمليات الحسابية في متصفحك ولا تجمع أي بيانات شخصية.',
    privacy_title: 'سياسة الخصوصية',
    privacy_p1: 'خصوصيتك مهمة للغاية بالنسبة لنا. في حاسبة العمر، لدينا بعض المبادئ الأساسية:',
    privacy_p2: 'نحن لا نطلب أو نجمع أو نخزن أيًا من معلوماتك الشخصية. يتم استخدام تاريخ الميلاد الذي تدخله فقط لغرض الحساب ولا يتم إرساله أبدًا إلى خوادمنا أو حفظه في أي مكان. تحدث جميع العمليات الحسابية مباشرة في متصفح الويب الخاص بك.',
    privacy_p3: 'بما أننا لا نجمع أي بيانات، فإننا لا نشارك أي بيانات مع أطراف ثالثة. استخدامك لهذا الموقع مجهول تمامًا. نستخدم التخزين المحلي (localStorage) فقط لحفظ تفضيلات اللغة الخاصة بك لراحتك.',

    // Contact Page
    contact_html_title: 'تواصل معنا | حاسبة العمر',
    contact_meta_description: 'تواصل مع فريق حاسبة العمر. نرحب بملاحظاتك واقتراحاتك وأسئلتك.',
    contact_title: 'تواصل معنا',
    contact_p1: 'يسعدنا أن نسمع من مستخدمينا! إذا كان لديك أي ملاحظات أو اقتراحات لميزات جديدة، أو ترغب فقط في إلقاء التحية، فلا تتردد في التواصل معنا.',
    contact_p2: 'يمكنك التواصل معنا عبر البريد الإلكتروني على:',
    contact_email: 'support@lazfan.com',
  },
  es: {
    // General
    title: 'Calculadora de Edad',
    subtitle: 'Introduce tu fecha de nacimiento para saber tu edad exacta.',
    footer_rights: 'Todos los derechos reservados.',

    // Navigation
    nav_home: 'Inicio',
    nav_about: 'Sobre Nosotros',
    nav_privacy: 'Política de Privacidad',
    nav_contact: 'Contacto',

    // Home Page SEO Meta
    home_html_title: 'Calculadora de Edad | ¿Cuántos años tengo? | Calculadora de Cumpleaños',
    home_meta_description: "Calcula tu edad exacta en años, meses y días con nuestra calculadora de edad en línea gratuita. Descubre '¿cuántos años tengo?' y cuenta los días que faltan para tu próximo cumpleaños.",
    
    // Calculator
    button_calculate: 'Calcular Edad',
    label_day: 'Día',
    label_month: 'Mes',
    label_year: 'Año',
    calendar_gregorian: 'Gregoriano',
    calendar_hijri: 'Hégira',
    
    // Months
    month_1: 'Enero', month_2: 'Febrero', month_3: 'Marzo', month_4: 'Abril', month_5: 'Mayo', month_6: 'Junio', month_7: 'Julio', month_8: 'Agosto', month_9: 'Septiembre', month_10: 'Octubre', month_11: 'Noviembre', month_12: 'Diciembre',
    hijri_month_1: 'Muharram', hijri_month_2: 'Safar', hijri_month_3: "Rabi' I", hijri_month_4: "Rabi' II", hijri_month_5: 'Jumada I', hijri_month_6: 'Jumada II', hijri_month_7: 'Rajab', hijri_month_8: "Sha'ban", hijri_month_9: 'Ramadán', hijri_month_10: 'Shawwal', hijri_month_11: 'Dhu al-Qadah', hijri_month_12: 'Dhu al-Hijjah',
    
    // Results
    result_intro: 'Tienes',
    result_years: 'años',
    result_months: 'meses',
    result_and: 'y',
    result_days: 'días',
    share_result: 'Compartir Resultado',
    copy_result: 'Copiar Resultado',
    copied_success: '¡Copiado al portapapeles!',
    summary_title: 'Resumen de Edad',
    summary_birth_date: 'Fecha de Nacimiento',
    summary_day_of_birth: 'Día de Nacimiento',
    summary_age_in_months: 'Edad en Meses',
    summary_age_in_weeks: 'Edad en Semanas',
    summary_age_in_days: 'Edad en Días',
    summary_next_birthday_date: 'Próximo Cumpleaños',
    summary_next_birthday_weekday: 'Día del Próximo Cumpleaños',
    summary_days_remaining: 'Días Restantes',
    countdown_happy_birthday: '¡Feliz Cumpleaños!',
    countdown_tomorrow: '¡Tu cumpleaños es mañana!',
    countdown_days_remaining: '¡Faltan {days} días para tu próximo cumpleaños!',
    
    // Errors
    error_date_required: 'Por favor, introduce tu fecha de nacimiento.',
    error_future_date: 'La fecha de nacimiento no puede ser en el futuro.',
    error_invalid_date: 'Por favor, introduce una fecha válida.',
    
    // Home Page Content
    seo_content_title: 'Tu Guía Definitiva para el Cálculo de Edad',
    seo_title_gregorian: 'Cálculo de Edad Gregoriano: El Estándar Global',
    seo_p_gregorian: "Nuestra herramienta facilita el cálculo de tu edad con el calendario gregoriano, utilizado en todo el mundo. Simplemente introduce tu día, mes y año de nacimiento para obtener un resultado exacto en años, meses y días. Descubre precisamente '¿cuántos años tengo?' con unos pocos clics.",
    seo_title_hijri: 'Cálculo de Edad en Hégira: Un Legado Cultural',
    seo_p_hijri: "Para quienes siguen el calendario islámico, ofrecemos un cálculo preciso de la edad en Hégira. Selecciona la opción Hégira, introduce tu fecha de nacimiento y descubre tu edad según el calendario lunar. Es una forma perfecta de conectar con tus raíces culturales.",
    seo_title_details: 'Descubre Más Sobre Tu Cumpleaños',
    seo_p_details: "Más allá de tu edad, nuestra calculadora te dice cuántos días faltan para tu próximo cumpleaños y revela el día exacto de la semana en que naciste. Es todo lo que necesitas saber sobre tu día especial, todo en un solo lugar.",
    fun_fact_title: 'Datos curiosos sobre tu cumpleaños',
    fun_fact_1: "¿Sabías que en una habitación de solo 23 personas, hay un 50% de probabilidad de que dos de ellas compartan el mismo cumpleaños? Esto se conoce como la Paradoja del Cumpleaños.",
    fun_fact_2: "En Vietnam, todo el mundo celebra su cumpleaños el mismo día: el Día de Año Nuevo, conocido como 'Tết'. Independientemente de cuándo nacieron realmente, todos cumplen un año más en este día.",

    // About Page
    about_html_title: 'Sobre Nosotros | Calculadora de Edad',
    about_meta_description: 'Conozca más sobre la Calculadora de Edad, nuestra misión de proporcionar una herramienta simple, precisa y con un diseño atractivo para todos.',
    about_title: 'Sobre Nosotros',
    about_p1: 'Bienvenido a la Calculadora de Edad, un proyecto que nació de una idea simple: crear la herramienta de cálculo de edad más rápida, bonita y fácil de usar de la web.',
    about_p2: 'Nuestra misión es proporcionar una herramienta gratuita, accesible y multilingüe que ayude a cualquier persona, en cualquier lugar, a determinar su edad exacta o a calcular diferencias de tiempo con precisión. Creemos en el diseño limpio, la privacidad del usuario y en ofrecer una experiencia agradable.',
    about_p3: 'Esta herramienta fue construida con tecnología moderna para asegurar que sea rápida, confiable y que funcione perfectamente en cualquier dispositivo. ¡Esperamos que la encuentres útil!',

    // Privacy Policy Page
    privacy_html_title: 'Política de Privacidad | Calculadora de Edad',
    privacy_meta_description: 'Lea nuestra política de privacidad. Respetamos su privacidad. Nuestra Calculadora de Edad realiza todos los cálculos en su navegador y no recopila ningún dato personal.',
    privacy_title: 'Política de Privacidad',
    privacy_p1: 'Su privacidad es de vital importancia para nosotros. En la Calculadora de Edad, tenemos algunos principios fundamentales:',
    privacy_p2: 'No pedimos, recopilamos ni almacenamos ninguna de su información personal. La fecha de nacimiento que introduce se utiliza únicamente para el cálculo y nunca se envía a nuestros servidores ni se guarda en ningún sitio. Todos los cálculos se realizan directamente en su navegador web.',
    privacy_p3: 'Como no recopilamos ningún dato, no compartimos ningún dato con terceros. Su uso de este sitio web es completamente anónimo. Usamos localStorage solo para guardar su preferencia de idioma para su comodidad.',

    // Contact Page
    contact_html_title: 'Contacto | Calculadora de Edad',
    contact_meta_description: 'Póngase en contacto con el equipo de la Calculadora de Edad. Agradecemos sus comentarios, sugerencias y preguntas.',
    contact_title: 'Contacto',
    contact_p1: '¡Nos encanta saber de nuestros usuarios! Si tiene algún comentario, sugerencia para nuevas funciones o simplemente quiere saludarnos, no dude en comunicarse.',
    contact_p2: 'Puede contactarnos por correo electrónico en:',
    contact_email: 'support@lazfan.com',
  },
  fr: {
    // General
    title: 'Calculateur d’âge',
    subtitle: 'Entrez votre date de naissance pour connaître votre âge exact.',
    footer_rights: 'Tous droits réservés.',

    // Navigation
    nav_home: 'Accueil',
    nav_about: 'À propos',
    nav_privacy: 'Politique de confidentialité',
    nav_contact: 'Contact',

    // Home Page SEO Meta
    home_html_title: "Calculateur d'âge | Quel âge ai-je ? | Calcul Anniversaire",
    home_meta_description: "Calculez votre âge exact en années, mois et jours avec notre calculateur d'âge en ligne gratuit. Découvrez 'quel âge ai-je ?' et faites le décompte jusqu'à votre prochain anniversaire.",
    
    // Calculator
    button_calculate: 'Calculer l’âge',
    label_day: 'Jour',
    label_month: 'Mois',
    label_year: 'Année',
    calendar_gregorian: 'Grégorien',
    calendar_hijri: 'Hégirien',
    
    // Months
    month_1: 'Janvier', month_2: 'Février', month_3: 'Mars', month_4: 'Avril', month_5: 'Mai', month_6: 'Juin', month_7: 'Juillet', month_8: 'Août', month_9: 'Septembre', month_10: 'Octobre', month_11: 'Novembre', month_12: 'Décembre',
    hijri_month_1: 'Mouharram', hijri_month_2: 'Safar', hijri_month_3: "Rabi' I", hijri_month_4: "Rabi' II", hijri_month_5: 'Joumada I', hijri_month_6: 'Joumada II', hijri_month_7: 'Rajab', hijri_month_8: 'Chaabane', hijri_month_9: 'Ramadan', hijri_month_10: 'Chawwal', hijri_month_11: "Dhou al-Qi'da", hijri_month_12: 'Dhou al-Hijja',
    
    // Results
    result_intro: 'Vous avez',
    result_years: 'ans',
    result_months: 'mois',
    result_and: 'et',
    result_days: 'jours',
    share_result: 'Partager le Résultat',
    copy_result: 'Copier le Résultat',
    copied_success: 'Copié dans le presse-papiers !',
    summary_title: "Résumé de l'âge",
    summary_birth_date: 'Date de naissance',
    summary_day_of_birth: 'Jour de naissance',
    summary_age_in_months: 'Âge en mois',
    summary_age_in_weeks: 'Âge en semaines',
    summary_age_in_days: 'Âge en jours',
    summary_next_birthday_date: 'Prochain anniversaire',
    summary_next_birthday_weekday: 'Jour du prochain anniversaire',
    summary_days_remaining: 'Jours restants',
    countdown_happy_birthday: 'Joyeux Anniversaire !',
    countdown_tomorrow: 'Votre anniversaire est demain !',
    countdown_days_remaining: 'Plus que {days} jours avant votre prochain anniversaire !',
    
    // Errors
    error_date_required: 'Veuillez entrer votre date de naissance.',
    error_future_date: 'La date de naissance ne peut pas être dans le futur.',
    error_invalid_date: 'Veuillez entrer une date valide.',
    
    // Home Page Content
    seo_content_title: "Votre Guide Ultime pour le Calcul de l'Âge",
    seo_title_gregorian: "Calcul de l'Âge Grégorien : La Norme Mondiale",
    seo_p_gregorian: "Notre outil simplifie le calcul de votre âge avec le calendrier grégorien, utilisé dans le monde entier. Entrez simplement votre jour, mois et année de naissance pour obtenir un resultado exact en années, mois et jours. Découvrez précisément 'quel âge ai-je ?' en quelques clics.",
    seo_title_hijri: "Calcul de l'Âge Hégirien : Un Héritage Culturel",
    seo_p_hijri: "Pour ceux qui suivent le calendrier islamique, nous offrons un calcul précis de l'âge hégirien. Sélectionnez l'option Hégirien, entrez votre date de naissance et découvrez votre âge selon le calendrier lunaire. C'est un moyen parfait de renouer avec vos racines culturelles.",
    seo_title_details: "Découvrez-en Plus sur Votre Anniversaire",
    seo_p_details: "Au-delà de votre âge, notre calculateur vous indique combien de jours il reste avant votre prochain anniversaire et révèle le jour exact de la semaine où vous êtes né. C'est tout ce que vous devez savoir sur votre jour spécial, en un seul endroit.",
    fun_fact_title: 'Faits amusants sur votre anniversaire',
    fun_fact_1: "Saviez-vous que dans une pièce de seulement 23 personnes, il y a 50 % de chances que deux d'entre elles partagent le même anniversaire ? C'est ce qu'on appelle le paradoxe des anniversaires.",
    fun_fact_2: "Au Vietnam, tout le monde célèbre son anniversaire le même jour : le jour de l'An, connu sous le nom de 'Tết'. Indépendamment de leur date de naissance réelle, tout le monde vieillit d'un an ce jour-là.",

    // About Page
    about_html_title: 'À propos | Calculateur d’âge',
    about_meta_description: "En savoir plus sur le Calculateur d'âge, notre mission de fournir un outil simple, précis et magnifiquement conçu pour tous.",
    about_title: 'À propos de nous',
    about_p1: "Bienvenue sur le Calculateur d'âge, un projet né d'une idée simple : créer l'outil de calcul d'âge le plus rapide, le plus beau et le plus simple à utiliser sur le web.",
    about_p2: "Notre mission est de fournir un outil gratuit, accessible et multilingue qui aide n'importe qui, n'importe où, à déterminer son âge exact ou à calculer des différences de temps avec précision. Nous croyons en un design épuré, la confidentialité des utilisateurs et une expérience agréable.",
    about_p3: "Cet outil a été conçu avec des technologies modernes pour garantir qu'il soit rapide, fiable et fonctionne perfectly sur n'importe quel appareil. Nous espérons que vous le trouverez utile !",

    // Privacy Policy Page
    privacy_html_title: 'Politique de confidentialité | Calculateur d’âge',
    privacy_meta_description: 'Lisez notre politique de confidentialité. Nous respectons votre vie privée. Notre Calculateur d’âge effectue tous les calculs dans votre navigateur et ne collecte aucune donnée personnelle.',
    privacy_title: 'Politique de confidentialité',
    privacy_p1: 'Votre vie privée est d’une importance capitale pour nous. Chez Calculateur d’âge, nous avons quelques principes fondamentaux :',
    privacy_p2: 'Nous ne demandons, ne collectons ni ne stockons aucune de vos informations personnelles. La date de naissance que vous entrez est utilisée uniquement pour le calcul et n’est jamais envoyée à nos serveurs ou sauvegardée où que ce soit. Tous les calculs se font directement dans votre navigateur web.',
    privacy_p3: 'Comme nous ne collectons aucune donnée, nous ne partageons aucune donnée avec des tiers. Votre utilisation de ce site est totalement anonyme. Nous utilisons localStorage uniquement pour enregistrer votre préférence linguistique pour votre commodité.',

    // Contact Page
    contact_html_title: 'Contact | Calculateur d’âge',
    contact_meta_description: "Prenez contact avec l'équipe du Calculateur d'âge. Vos commentaires, suggestions et questions sont les bienvenus.",
    contact_title: 'Contactez-nous',
    contact_p1: "Nous aimons avoir des nouvelles de nos utilisateurs ! Si vous avez des commentaires, des suggestions de nouvelles fonctionnalités ou si vous voulez simplement dire bonjour, n'hésitez pas à nous contacter.",
    contact_p2: 'Vous pouvez nous contacter par e-mail à l’adresse :',
    contact_email: 'support@lazfan.com',
  },
  de: {
    // General
    title: 'Altersrechner',
    subtitle: 'Geben Sie Ihr Geburtsdatum ein, um Ihr genaues Alter zu ermitteln.',
    footer_rights: 'Alle Rechte vorbehalten.',

    // Navigation
    nav_home: 'Startseite',
    nav_about: 'Über uns',
    nav_privacy: 'Datenschutz',
    nav_contact: 'Kontakt',
    
    // Home Page SEO Meta
    home_html_title: 'Altersrechner | Wie alt bin ich? | Geburtstagsrechner',
    home_meta_description: "Berechnen Sie Ihr genaues Alter in Jahren, Monaten und Tagen mit unserem kostenlosen Online-Altersrechner. Finden Sie heraus, 'wie alt bin ich', und zählen Sie die Tage bis zu Ihrem nächsten Geburtstag.",
    
    // Calculator
    button_calculate: 'Alter berechnen',
    label_day: 'Tag',
    label_month: 'Monat',
    label_year: 'Jahr',
    calendar_gregorian: 'Gregorianisch',
    calendar_hijri: 'Hijri',
    
    // Months
    month_1: 'Januar', month_2: 'Februar', month_3: 'März', month_4: 'April', month_5: 'Mai', month_6: 'Juni', month_7: 'Juli', month_8: 'August', month_9: 'September', month_10: 'Oktober', month_11: 'November', month_12: 'Dezember',
    hijri_month_1: 'Muharram', hijri_month_2: 'Safar', hijri_month_3: "Rabi' I", hijri_month_4: "Rabi' II", hijri_month_5: 'Dschumada I', hijri_month_6: 'Dschumada II', hijri_month_7: 'Radschab', hijri_month_8: 'Schaʿbān', hijri_month_9: 'Ramadan', hijri_month_10: 'Schauwāl', hijri_month_11: 'Dhū l-Qaʿda', hijri_month_12: 'Dhū l-Hiddscha',
    
    // Results
    result_intro: 'Du bist',
    result_years: 'Jahre',
    result_months: 'Monate',
    result_and: 'und',
    result_days: 'Tage alt',
    share_result: 'Ergebnis teilen',
    copy_result: 'Ergebnis kopieren',
    copied_success: 'In die Zwischenablage kopiert!',
    summary_title: 'Altersübersicht',
    summary_birth_date: 'Geburtsdatum',
    summary_day_of_birth: 'Geburtstag (Wochentag)',
    summary_age_in_months: 'Alter in Monaten',
    summary_age_in_weeks: 'Alter in Wochen',
    summary_age_in_days: 'Alter in Tagen',
    summary_next_birthday_date: 'Nächster Geburtstag',
    summary_next_birthday_weekday: 'Tag des nächsten Geburtstags',
    summary_days_remaining: 'Verbleibende Tage',
    countdown_happy_birthday: 'Alles Gute zum Geburtstag!',
    countdown_tomorrow: 'Dein Geburtstag ist morgen!',
    countdown_days_remaining: 'Noch {days} Tage bis zu deinem nächsten Geburtstag!',
    
    // Errors
    error_date_required: 'Bitte geben Sie Ihr Geburtsdatum ein.',
    error_future_date: 'Das Geburtsdatum kann nicht in der Zukunft liegen.',
    error_invalid_date: 'Bitte geben Sie ein gültiges Datum ein.',
    
    // Home Page Content
    seo_content_title: 'Ihr Ultimativer Leitfaden zur Altersberechnung',
    seo_title_gregorian: 'Gregorianische Altersberechnung: Der Globale Standard',
    seo_p_gregorian: "Unser Tool erleichtert die Berechnung Ihres Alters mit dem gregorianischen Kalender, der weltweit verwendet wird. Geben Sie einfach Ihren Tag, Monat und Ihr Geburtsjahr ein, um ein genaues Ergebnis in Jahren, Monaten und Tagen zu erhalten. Finden Sie mit wenigen Klicks genau heraus, 'wie alt bin ich'.",
    seo_title_hijri: 'Hijri-Altersberechnung: Ein Kulturelles Erbe',
    seo_p_hijri: "Für diejenigen, die dem islamischen Kalender folgen, bieten wir eine präzise Hijri-Altersberechnung an. Wählen Sie die Hijri-Option, geben Sie Ihr Geburtsdatum ein und entdecken Sie Ihr Alter gemäß dem Mondkalender. Es ist eine perfekte Möglichkeit, sich mit Ihren kulturellen Wurzeln zu verbinden.",
    seo_title_details: 'Entdecken Sie Mehr über Ihren Geburtstag',
    seo_p_details: "Über Ihr Alter hinaus zeigt Ihnen unser Rechner, wie viele Tage bis zu Ihrem nächsten Geburtstag verbleiben, und verrät den genauen Wochentag, an dem Sie geboren wurden. Es ist alles, was Sie über Ihren besonderen Tag wissen müssen, an einem Ort.",
    fun_fact_title: 'Erstaunliche Fakten zum Geburtstag',
    fun_fact_1: "Wussten Sie, dass in einem Raum mit nur 23 Personen eine 50-prozentige Wahrscheinlichkeit besteht, dass zwei von ihnen am selben Geburtstag haben? Dies ist als das Geburtstagsparadoxon bekannt.",
    fun_fact_2: "In Vietnam feiern alle am selben Tag ihren Geburtstag: am Neujahrstag, bekannt als 'Tết'. Unabhängig davon, wann sie tatsächlich geboren wurden, werden an diesem Tag alle ein Jahr älter.",

    // About Page
    about_html_title: 'Über uns | Altersrechner',
    about_meta_description: 'Erfahren Sie mehr über den Altersrechner, unsere Mission, ein einfaches, genaues und schön gestaltetes Werkzeug für jedermann bereitzustellen.',
    about_title: 'Über uns',
    about_p1: 'Willkommen beim Altersrechner, einem Projekt, das aus einer einfachen Idee geboren wurde: das schnellste, schönste und benutzerfreundlichste Werkzeug zur Altersberechnung im Web zu schaffen.',
    about_p2: 'Unsere Mission ist es, ein kostenloses, zugängliches und mehrsprachiges Werkzeug bereitzustellen, das jedem, überall, hilft, sein genaues Alter zu bestimmen oder Zeitunterschiede präzise zu berechnen. Wir glauben an sauberes Design, den Schutz der Privatsphäre der Benutzer und ein angenehmes Erlebnis.',
    about_p3: 'Dieses Tool wurde mit moderner Technologie entwickelt, um sicherzustellen, dass es schnell und zuverlässig ist und auf jedem Gerät perfekt funktioniert. Wir hoffen, Sie finden es nützlich!',

    // Privacy Policy Page
    privacy_html_title: 'Datenschutzrichtlinie | Altersrechner',
    privacy_meta_description: 'Lesen Sie unsere Datenschutzrichtlinie. Wir respektieren Ihre Privatsphäre. Unser Altersrechner führt alle Berechnungen in Ihrem Browser durch und sammelt keine persönlichen Daten.',
    privacy_title: 'Datenschutzrichtlinie',
    privacy_p1: 'Ihre Privatsphäre ist uns sehr wichtig. Beim Altersrechner haben wir einige grundlegende Prinzipien:',
    privacy_p2: 'Wir fragen nicht nach Ihren persönlichen Daten, sammeln oder speichern sie nicht. Das von Ihnen eingegebene Geburtsdatum wird ausschließlich für die Berechnung verwendet und niemals an unsere Server gesendet oder irgendwo gespeichert. Alle Berechnungen finden direkt in Ihrem Webbrowser statt.',
    privacy_p3: 'Da wir keine Daten sammeln, geben wir keine Daten an Dritte weiter. Ihre Nutzung dieser Website ist völlig anonym. Wir verwenden localStorage nur, um Ihre Spracheinstellung zu Ihrer Bequemlichkeit zu speichern.',

    // Contact Page
    contact_html_title: 'Kontakt | Altersrechner',
    contact_meta_description: 'Nehmen Sie Kontakt mit dem Team des Altersrechners auf. Wir freuen uns über Ihr Feedback, Ihre Vorschläge und Fragen.',
    contact_title: 'Kontakt',
    contact_p1: 'Wir freuen uns, von unseren Benutzern zu hören! Wenn Sie Feedback, Vorschläge für neue Funktionen haben oder einfach nur Hallo sagen möchten, zögern Sie bitte nicht, uns zu kontaktieren.',
    contact_p2: 'Sie können uns per E-Mail unter folgender Adresse erreichen:',
    contact_email: 'support@lazfan.com',
  },
};