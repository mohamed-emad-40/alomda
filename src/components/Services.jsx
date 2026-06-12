import { Construction, Wrench, Truck, Users, ClipboardList, ShieldCheck, ArrowLeft } from 'lucide-react'
import { SERVICES } from '../data/content'
import { useInView } from '../hooks/useAnimations'
import './Services.css'

const ICONS = {
  crane: Construction,
  wrench: Wrench,
  truck: Truck,
  users: Users,
  clipboard: ClipboardList,
  shield: ShieldCheck,
}

export default function Services() {
  const [ref, inView] = useInView()

  return (
    <section className="services section" id="services" ref={ref}>
      <div className="container">
        <div className={`section-header ${inView ? 'fade-up' : 'pre-anim'}`}>
          <div className="section-eyebrow">ما نقدمه</div>
          <h2 className="section-title">خدمات متكاملة<br />للمعدات الثقيلة</h2>
          <p className="section-sub">من التأجير إلى الصيانة الشاملة، كل ما تحتاجه مشروعك في مكان واحد</p>
        </div>

        <div className="services-grid">
          {SERVICES.map((svc, i) => {
            const Icon = ICONS[svc.icon] || Construction
            return (
              <div
                key={svc.id}
                className={`service-card ${inView ? 'fade-up' : 'pre-anim'}`}
                style={{ animationDelay: `${0.1 + i * 0.08}s` }}
              >
                <div className="service-icon-wrap">
                  <Icon size={24} />
                </div>
                <h3 className="service-title">{svc.title}</h3>
                <p className="service-desc">{svc.desc}</p>
                <ul className="service-features">
                  {svc.features.map(f => (
                    <li key={f}>
                      <span className="feature-bullet"></span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="service-link">
                  اعرف أكثر <ArrowLeft size={14} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
