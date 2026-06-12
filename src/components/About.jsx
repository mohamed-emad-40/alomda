import { CheckCircle2, Star, Quote } from 'lucide-react'
import { TESTIMONIALS } from '../data/content'
import { useInView } from '../hooks/useAnimations'
import './About.css'

export default function About() {
  const [ref, inView] = useInView()
  return (
    <section className="about section" id="about" ref={ref}>
      <div className="container">
        {/* About split */}
        <div className="about-grid">
          <div className={`about-text ${inView ? 'fade-up' : 'pre-anim'}`}>
            <div className="section-eyebrow">من نحن</div>
            <h2 className="section-title" style={{ textAlign: 'right' }}>
              15 سنة من التميز<br />في قطاع المعدات
            </h2>
            <p className="about-desc">
              Alomda Group من أكبر شركات تأجير وتشغيل المعدات الثقيلة في مصر. منذ 2009 ونحن نخدم
              مشاريع البنية التحتية والإنشاءات الكبرى بأحدث الأساطيل وأكفأ الكوادر البشرية.
            </p>
            <div className="about-features">
              {[
                'أسطول متجدد من أحدث الماركات العالمية',
                'فريق هندسي وفني متخصص 24/7',
                'قطع غيار أصلية وورش صيانة معتمدة',
                'سجل حافل في مشاريع الطرق والكباري والتطوير العمراني',
                'تغطية تأمينية شاملة على جميع المعدات',
              ].map(f => (
                <div key={f} className="about-feature-row">
                  <CheckCircle2 size={18} className="feature-check" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`about-visual ${inView ? 'fade-up' : 'pre-anim'}`} style={{ animationDelay: '0.15s' }}>
            <div className="about-card-stack">
              <div className="about-card primary-card">
                <div className="a-card-icon">🏆</div>
                <h4>الشركة الأولى في المعدات الثقيلة</h4>
                <p>بحسب تقييم عملائنا للعام الثالث على التوالي</p>
              </div>
              <div className="about-card cert-card">
                <div className="cert-list">
                  {['ISO 9001:2015', 'ISO 45001', 'OHSAS 18001'].map(c => (
                    <div key={c} className="cert-item">
                      <CheckCircle2 size={14} />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
                <p className="cert-label">شهادات معتمدة دولياً</p>
              </div>
              <div className="about-card coverage-card">
                <div className="coverage-num">21</div>
                <div className="coverage-label">محافظة نخدمها في مصر</div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className={`testimonials-section ${inView ? 'fade-up' : 'pre-anim'}`} style={{ animationDelay: '0.25s' }}>
          <h3 className="test-heading">ماذا يقول عملاؤنا</h3>
          <div className="testimonials-grid">
            {TESTIMONIALS.map((t, i) => (
              <div key={t.id} className="test-card" style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
                <Quote size={24} className="quote-icon" />
                <p className="test-text">{t.text}</p>
                <div className="test-stars">
                  {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="#E8971A" color="#E8971A" />)}
                </div>
                <div className="test-author">
                  <div className="test-avatar">{t.name.slice(3, 5)}</div>
                  <div>
                    <div className="test-name">{t.name}</div>
                    <div className="test-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
