import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'
import { useInView } from '../hooks/useAnimations'
import './Contact.css'

const SERVICE_OPTIONS = [
  'تأجير معدات', 'صيانة وإصلاح', 'نقل وشحن', 'توفير مشغلين', 'إدارة مشاريع', 'استفسار عام'
]

export default function Contact() {
  const [ref, inView] = useInView()
  const [form, setForm] = useState({ name: '', phone: '', company: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // هنا بترسل للـ API بتاعك
    // const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section className="contact section" id="contact" ref={ref}>
      <div className="container">
        <div className={`section-header ${inView ? 'fade-up' : 'pre-anim'}`}>
          <div className="section-eyebrow">تواصل معنا</div>
          <h2 className="section-title">احصل على عرض سعر مجاني</h2>
          <p className="section-sub">اترك بياناتك وهنتواصل معك خلال ساعة واحدة</p>
        </div>

        <div className="contact-layout">
          {/* Info */}
          <div className={`contact-info ${inView ? 'fade-up' : 'pre-anim'}`} style={{ animationDelay: '0.1s' }}>
            <div className="info-card">
              <h3 className="info-title">معلومات التواصل</h3>
              <div className="info-items">
                {[
                  { icon: Phone, label: 'الهاتف', val: '01000000000', sub: 'متاح 24/7' },
                  { icon: Mail, label: 'البريد الإلكتروني', val: 'info@alomda.com', sub: 'رد خلال ساعة' },
                  { icon: MapPin, label: 'العنوان', val: 'القاهرة، مصر', sub: 'المقر الرئيسي' },
                  { icon: Clock, label: 'ساعات العمل', val: 'السبت – الخميس', sub: '8 صباحاً – 6 مساءً' },
                ].map(({ icon: Icon, label, val, sub }) => (
                  <div key={label} className="info-item">
                    <div className="info-icon"><Icon size={18} /></div>
                    <div>
                      <div className="info-label">{label}</div>
                      <div className="info-val">{val}</div>
                      <div className="info-sub">{sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="whatsapp-btn">
                <span>💬</span>
                تواصل عبر واتساب
              </div>
            </div>

            <div className="cta-band">
              <div className="cta-band-text">
                <strong>مشروعك يبدأ من هنا</strong>
                <span>استشارة مجانية مع مهندسينا</span>
              </div>
              <div className="cta-badge-icon">🚀</div>
            </div>
          </div>

          {/* Form */}
          <div className={`contact-form-wrap ${inView ? 'fade-up' : 'pre-anim'}`} style={{ animationDelay: '0.2s' }}>
            {submitted ? (
              <div className="success-state">
                <CheckCircle2 size={56} className="success-icon" />
                <h3>تم إرسال طلبك بنجاح!</h3>
                <p>هيتواصل معك فريقنا خلال ساعة واحدة. شكراً لثقتك في Alomda Group.</p>
                <button className="btn-back" onClick={() => setSubmitted(false)}>إرسال طلب جديد</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-field">
                    <label>الاسم الكامل *</label>
                    <input
                      type="text" name="name" required
                      placeholder="اسمك الكريم"
                      value={form.name} onChange={handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <label>رقم الهاتف *</label>
                    <input
                      type="tel" name="phone" required
                      placeholder="01XXXXXXXXX"
                      value={form.phone} onChange={handleChange}
                      dir="ltr"
                    />
                  </div>
                </div>
                <div className="form-field">
                  <label>اسم الشركة</label>
                  <input
                    type="text" name="company"
                    placeholder="شركتك (اختياري)"
                    value={form.company} onChange={handleChange}
                  />
                </div>
                <div className="form-field">
                  <label>نوع الخدمة *</label>
                  <div className="service-selector">
                    {SERVICE_OPTIONS.map(opt => (
                      <button
                        type="button" key={opt}
                        className={`service-opt ${form.service === opt ? 'selected' : ''}`}
                        onClick={() => setForm(prev => ({ ...prev, service: opt }))}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="form-field">
                  <label>تفاصيل المشروع</label>
                  <textarea
                    name="message" rows="4"
                    placeholder="اوصف مشروعك أو احتياجاتك بالتفصيل..."
                    value={form.message} onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn-submit" disabled={loading || !form.name || !form.phone}>
                  {loading ? (
                    <span className="loading-dots">جاري الإرسال<span>.</span><span>.</span><span>.</span></span>
                  ) : (
                    <><Send size={17} /> إرسال الطلب</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
