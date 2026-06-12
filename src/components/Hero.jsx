import { ArrowLeft, Play, CheckCircle2 } from 'lucide-react'
import { PARTNERS } from '../data/content'
import './Hero.css'

const HeavyMachineSVG = () => (
  <svg viewBox="0 0 480 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-illustration">
    {/* Sky bg */}
    <rect width="480" height="280" rx="20" fill="#F0F4F8"/>

    {/* Sun */}
    <circle cx="420" cy="50" r="36" fill="#FFF3DC" opacity="0.8"/>
    <circle cx="420" cy="50" r="24" fill="#FFDFA0" opacity="0.6"/>

    {/* Ground */}
    <rect x="0" y="250" width="480" height="70" rx="0" fill="#E8E0D0"/>
    <rect x="0" y="248" width="480" height="6" rx="2" fill="#D4C8B8"/>

    {/* Far background crane */}
    <rect x="390" y="60" width="16" height="190" rx="4" fill="#CDD4DC"/>
    <line x1="398" y1="60" x2="460" y2="30" stroke="#BCC4CC" strokeWidth="5" strokeLinecap="round"/>
    <line x1="460" y1="30" x2="460" y2="250" stroke="#C8D0D8" strokeWidth="2.5" strokeDasharray="6 4"/>
    <rect x="453" y="220" width="14" height="14" rx="3" fill="#AAB4BC"/>
    <line x1="460" y1="234" x2="460" y2="248" stroke="#AAB4BC" strokeWidth="2"/>

    {/* Excavator arm shadows */}
    <ellipse cx="200" cy="255" rx="90" ry="10" fill="rgba(0,0,0,0.08)"/>

    {/* Excavator - main body */}
    <rect x="100" y="180" width="170" height="72" rx="10" fill="#E8971A"/>
    {/* Body detail stripes */}
    <rect x="100" y="192" width="170" height="6" rx="0" fill="rgba(0,0,0,0.08)"/>

    {/* Cab */}
    <rect x="116" y="138" width="70" height="48" rx="8" fill="#1A1A1A"/>
    {/* Cab window */}
    <rect x="122" y="144" width="58" height="32" rx="5" fill="#B8D8F0"/>
    {/* Window reflection */}
    <rect x="124" y="146" width="20" height="12" rx="3" fill="rgba(255,255,255,0.4)"/>

    {/* Company logo on cab */}
    <rect x="200" y="195" width="48" height="22" rx="4" fill="rgba(0,0,0,0.2)"/>
    <text x="204" y="210" fontSize="9" fill="#fff" fontWeight="700" fontFamily="Cairo, sans-serif">ALOMDA</text>

    {/* Boom arm - main */}
    <line x1="240" y1="162" x2="330" y2="100" stroke="#555" strokeWidth="18" strokeLinecap="round"/>
    {/* Boom arm - stick */}
    <line x1="330" y1="100" x2="368" y2="148" stroke="#444" strokeWidth="14" strokeLinecap="round"/>
    {/* Hydraulic cylinders */}
    <line x1="260" y1="158" x2="310" y2="118" stroke="#888" strokeWidth="6" strokeLinecap="round"/>
    <line x1="340" y1="104" x2="356" y2="130" stroke="#777" strokeWidth="5" strokeLinecap="round"/>

    {/* Bucket */}
    <path d="M362 144 L384 152 L378 180 L356 172 Z" fill="#333" rx="4"/>
    <path d="M378 178 L384 188 L374 192 L368 182 Z" fill="#222"/>
    {/* Bucket teeth */}
    <line x1="372" y1="190" x2="372" y2="198" stroke="#555" strokeWidth="3" strokeLinecap="round"/>
    <line x1="378" y1="188" x2="379" y2="196" stroke="#555" strokeWidth="3" strokeLinecap="round"/>

    {/* Track base */}
    <rect x="88" y="245" width="194" height="18" rx="9" fill="#2C2C2C"/>
    {/* Track rollers */}
    {[100, 120, 142, 164, 186, 208, 228, 252, 272].map((x, i) => (
      <circle key={i} cx={x} cy="254" r="7" fill="#444"/>
    ))}
    {/* Track top */}
    <rect x="96" y="238" width="178" height="10" rx="4" fill="#383838"/>

    {/* Safety lights */}
    <circle cx="120" cy="137" r="5" fill="#FF4444"/>
    <circle cx="120" cy="137" r="3" fill="#FF8888"/>

    {/* Dust particles */}
    <circle cx="88" cy="248" r="3" fill="rgba(180,160,120,0.4)"/>
    <circle cx="280" cy="250" r="2" fill="rgba(180,160,120,0.3)"/>
    <circle cx="65" cy="244" r="2.5" fill="rgba(180,160,120,0.35)"/>

    {/* Ground shadow under machine */}
    <ellipse cx="185" cy="262" rx="100" ry="8" fill="rgba(0,0,0,0.1)"/>
  </svg>
)

export default function Hero() {
  const handleScroll = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            الشريك الموثوق للمشاريع الكبرى في مصر
          </div>

          <h1 className="hero-title">
            معدات ثقيلة<br />
            لمشاريع{' '}
            <span className="title-highlight">
              لا تتوقف
              <svg className="underline-svg" viewBox="0 0 200 12" preserveAspectRatio="none">
                <path d="M2 8 Q50 2 100 8 Q150 14 198 8" stroke="#E8971A" strokeWidth="3" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>

          <p className="hero-desc">
            نوفر أحدث المعدات الثقيلة وخدمات التأجير والصيانة لكل أنواع المشاريع الإنشائية والبنية التحتية في مصر.
            أسطول يتجاوز 200 معدة جاهز الآن.
          </p>

          <div className="hero-checks">
            {['صيانة مجانية خلال العقد', 'مشغلون معتمدون', 'استجابة في أقل من ساعة'].map(item => (
              <div key={item} className="hero-check">
                <CheckCircle2 size={16} className="check-icon" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="hero-actions">
            <button className="btn-hero-primary" onClick={() => handleScroll('#contact')}>
              احصل على عرض سعر مجاني
              <ArrowLeft size={18} />
            </button>
            <button className="btn-hero-secondary" onClick={() => handleScroll('#fleet')}>
              <div className="play-circle">
                <Play size={14} fill="currentColor" />
              </div>
              تصفح الأسطول
            </button>
          </div>

          <div className="hero-stats">
            {[
              { num: '500+', label: 'مشروع منجز' },
              { num: '200+', label: 'معدة' },
              { num: '15+', label: 'سنة خبرة' },
            ].map(s => (
              <div key={s.label} className="hero-stat">
                <div className="hero-stat-num">{s.num}</div>
                <div className="hero-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-card">
            <HeavyMachineSVG />
            <div className="floating-tag tag-1">
              <div className="tag-icon">✅</div>
              <div>
                <div className="tag-title">جاهز للتشغيل الآن</div>
                <div className="tag-sub">180+ معدة متاحة</div>
              </div>
            </div>
            <div className="floating-tag tag-2">
              <div className="tag-icon">⚡</div>
              <div>
                <div className="tag-title">استجابة سريعة</div>
                <div className="tag-sub">أقل من 60 دقيقة</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partners strip */}
      <div className="partners-strip">
        <div className="container">
          <div className="partners-inner">
            <span className="partners-label">شركاؤنا الدوليون</span>
            <div className="partners-scroll">
              {[...PARTNERS, ...PARTNERS].map((p, i) => (
                <span key={i} className="partner-name">{p}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
