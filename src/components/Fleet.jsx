import { useState } from 'react'
import { CheckCircle2, Clock, ArrowLeft } from 'lucide-react'
import { FLEET } from '../data/content'
import { useInView } from '../hooks/useAnimations'
import './Fleet.css'

const FILTERS = ['الكل', 'متاح الآن', 'حسب الطلب']

export default function Fleet() {
  const [ref, inView] = useInView()
  const [filter, setFilter] = useState('الكل')

  const filtered = FLEET.filter(item => {
    if (filter === 'الكل') return true
    if (filter === 'متاح الآن') return item.available
    return !item.available
  })

  return (
    <section className="fleet section" id="fleet" ref={ref}>
      <div className="container">
        <div className={`section-header ${inView ? 'fade-up' : 'pre-anim'}`}>
          <div className="section-eyebrow">أسطولنا</div>
          <h2 className="section-title">معدات لكل مشروع</h2>
          <p className="section-sub">تشكيلة واسعة من المعدات الثقيلة الجاهزة للتشغيل الفوري</p>
        </div>

        <div className={`fleet-filters ${inView ? 'fade-up' : 'pre-anim'}`} style={{ animationDelay: '0.1s' }}>
          {FILTERS.map(f => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="fleet-grid">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className={`fleet-card ${inView ? 'fade-up' : 'pre-anim'}`}
              style={{ animationDelay: `${0.15 + i * 0.07}s` }}
            >
              <div className="fleet-img-area">
                <span className="fleet-emoji">{item.icon}</span>
                <div className={`avail-badge ${item.available ? 'avail' : 'on-demand'}`}>
                  {item.available
                    ? <><CheckCircle2 size={12} /> متاح الآن</>
                    : <><Clock size={12} /> حسب الطلب</>
                  }
                </div>
              </div>
              <div className="fleet-body">
                <h4 className="fleet-name">{item.name}</h4>
                <p className="fleet-brand">{item.brand}</p>
                <div className="fleet-capacity">
                  <span className="cap-label">الحمولة / السعة</span>
                  <span className="cap-val">{item.capacity}</span>
                </div>
                <button className="fleet-btn">
                  استفسر عن التوفر <ArrowLeft size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
