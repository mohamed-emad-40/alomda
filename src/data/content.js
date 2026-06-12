export const NAV_LINKS = [
  { label: 'الرئيسية', href: '#home' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'أسطولنا', href: '#fleet' },
  { label: 'مشاريعنا', href: '#projects' },
  { label: 'عن الشركة', href: '#about' },
  { label: 'تواصل معنا', href: '#contact' },
]

export const STATS = [
  { num: 500, suffix: '+', label: 'مشروع منجز' },
  { num: 200, suffix: '+', label: 'معدة في الأسطول' },
  { num: 15, suffix: '+', label: 'سنة خبرة' },
  { num: 50, suffix: '+', label: 'عميل موثوق' },
]

export const SERVICES = [
  {
    id: 1,
    icon: 'crane',
    title: 'تأجير المعدات',
    desc: 'أسطول ضخم من أحدث المعدات الثقيلة جاهز للتأجير اليومي والشهري والسنوي بأفضل الأسعار وخدمة متكاملة.',
    features: ['تأجير يومي وشهري وسنوي', 'صيانة دورية مجانية', 'دعم فني 24/7'],
  },
  {
    id: 2,
    icon: 'wrench',
    title: 'الصيانة والإصلاح',
    desc: 'فرق متخصصة لصيانة وإصلاح جميع أنواع المعدات الثقيلة بقطع غيار أصلية معتمدة من الشركات المصنعة.',
    features: ['قطع غيار أصلية 100%', 'فنيون معتمدون', 'ضمان على الإصلاح'],
  },
  {
    id: 3,
    icon: 'truck',
    title: 'النقل والشحن',
    desc: 'خدمات نقل المعدات الثقيلة داخل مصر بأمان تام وفي المواعيد المحددة مع تغطية تأمينية شاملة.',
    features: ['نقل بأمان تام', 'مواعيد دقيقة', 'تأمين شامل'],
  },
  {
    id: 4,
    icon: 'users',
    title: 'توفير المشغلين',
    desc: 'مشغلون محترفون معتمدون لتشغيل المعدات بأعلى معايير الكفاءة والسلامة مع خبرة موثقة.',
    features: ['معتمدون دولياً', 'خبرة +10 سنوات', 'ملتزمون بالسلامة'],
  },
  {
    id: 5,
    icon: 'clipboard',
    title: 'إدارة المشاريع',
    desc: 'حلول شاملة لإدارة المعدات والموارد في المشاريع الكبرى من البداية للنهاية بفريق هندسي متخصص.',
    features: ['تخطيط وجدولة', 'متابعة يومية', 'تقارير مفصلة'],
  },
  {
    id: 6,
    icon: 'shield',
    title: 'التأمين والضمان',
    desc: 'تغطية تأمينية شاملة على جميع المعدات مع ضمان الأداء طوال فترة العقد لراحة بالك التامة.',
    features: ['تأمين شامل', 'ضمان الأداء', 'تعويض فوري'],
  },
]

export const FLEET = [
  { id: 1, name: 'حفارات هيدروليكية', brand: 'Caterpillar / Komatsu', capacity: 'من 20 إلى 100 طن', available: true, icon: '🏗️' },
  { id: 2, name: 'رافعات برجية', brand: 'Liebherr / Potain', capacity: 'حتى 80 طن', available: true, icon: '🏛️' },
  { id: 3, name: 'بلدوزر وجريدر', brand: 'CAT / John Deere', capacity: 'D6 – D11', available: true, icon: '🚜' },
  { id: 4, name: 'لودر أمامي', brand: 'Volvo / Komatsu', capacity: 'حتى 6 م³', available: true, icon: '🔧' },
  { id: 5, name: 'شاحنات قلابة', brand: 'Volvo / Mercedes', capacity: '20 – 40 طن', available: false, icon: '🚛' },
  { id: 6, name: 'رافعات شوكية', brand: 'Toyota / Hyster', capacity: 'حتى 25 طن', available: true, icon: '⚙️' },
  { id: 7, name: 'آلات ضغط وتربة', brand: 'Dynapac / Bomag', capacity: 'متعددة', available: true, icon: '🛤️' },
  { id: 8, name: 'مضخات خرسانة', brand: 'Putzmeister', capacity: '36 – 52 متر', available: false, icon: '🏗️' },
]

export const PROJECTS = [
  {
    id: 1,
    title: 'طريق القاهرة – السويس الجديد',
    category: 'طرق وكباري',
    year: '2023',
    desc: 'توفير 45 معدة ثقيلة لأعمال الحفر والتسوية لمدة 18 شهراً.',
    value: '85 مليون جنيه',
  },
  {
    id: 2,
    title: 'مشروع تطوير ميناء الإسكندرية',
    category: 'موانئ وبنية تحتية',
    year: '2022',
    desc: 'رافعات بحرية وحفارات لأعمال التوسعة والتعمق.',
    value: '120 مليون جنيه',
  },
  {
    id: 3,
    title: 'مجمع سكني العاصمة الإدارية',
    category: 'إنشاءات سكنية',
    year: '2024',
    desc: 'تشغيل كامل لأعمال الحفر والخوازيق والبنية التحتية.',
    value: '200 مليون جنيه',
  },
  {
    id: 4,
    title: 'محطة معالجة مياه الدلتا',
    category: 'مشاريع مياه',
    year: '2023',
    desc: 'معدات تخصصية لأعمال الحفر العميق والتدعيم.',
    value: '60 مليون جنيه',
  },
]

export const PARTNERS = [
  'Caterpillar', 'Komatsu', 'Liebherr', 'Volvo CE', 'Hitachi', 'Doosan', 'Putzmeister', 'Dynapac',
]

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'م. خالد العبداللاه',
    role: 'مدير مشروع – شركة المقاولون العرب',
    text: 'تعاملنا مع Alomda Group في مشروع ضخم وكانت المعدات جاهزة في الموعد وبكفاءة عالية. فريقهم الفني محترف جداً.',
  },
  {
    id: 2,
    name: 'م. سامي الشريف',
    role: 'مدير تنفيذي – شركة حسن علام',
    text: 'سنوات طويلة من التعاون ولم نخسر يوماً واحداً بسبب عطل في المعدات. الصيانة الوقائية عندهم مثالية.',
  },
  {
    id: 3,
    name: 'م. هاني مصطفى',
    role: 'مدير مشاريع – الوطنية للإنشاءات',
    text: 'أفضل ما يميزهم هو الاستجابة السريعة. في أي وقت في اليوم تتصل بيهم تلاقي حل.',
  },
]
