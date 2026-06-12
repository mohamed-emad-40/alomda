import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import { NAV_LINKS, SERVICES } from '../data/content'
import './Footer.css'

export default function Footer() {
  const scroll = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-mark">AG</div>
              <div>
                <div className="footer-logo-text">Alomda <span>Group</span></div>
                <div className="footer-logo-sub">للمعدات الثقيلة</div>
              </div>
            </div>
            <p className="footer-about">
              شريكك الموثوق في توفير وتشغيل وصيانة المعدات الثقيلة لمشاريع البنية التحتية والإنشاءات الكبرى في مصر.
            </p>
            <div className="social-links">
              {[
                { Icon: Facebook, label: 'فيسبوك' },
                { Icon: Instagram, label: 'إنستجرام' },
                { Icon: Linkedin, label: 'لينكدإن' },
                { Icon: Youtube, label: 'يوتيوب' },
              ].map(({ Icon, label }) => (
                <a key={label} href="#" className="social-btn" aria-label={label}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="footer-col">
            <h4 className="footer-col-title">روابط سريعة</h4>
            <div className="footer-links">
              {NAV_LINKS.map(l => (
                <a key={l.href} onClick={() => scroll(l.href)} className="footer-link">{l.label}</a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4 className="footer-col-title">خدماتنا</h4>
            <div className="footer-links">
              {SERVICES.map(s => (
                <a key={s.id} className="footer-link">{s.title}</a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="footer-col-title">تواصل معنا</h4>
            <div className="footer-contact-items">
              {[
                { Icon: Phone, val: '01000000000' },
                { Icon: Mail, val: 'info@alomda.com' },
                { Icon: MapPin, val: 'القاهرة، مصر' },
              ].map(({ Icon, val }) => (
                <div key={val} className="footer-contact-item">
                  <Icon size={14} />
                  <span>{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Alomda Group — جميع الحقوق محفوظة</span>
          <div className="footer-bottom-links">
            <a href="#">سياسة الخصوصية</a>
            <a href="#">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
