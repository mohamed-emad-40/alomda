import { ArrowLeft, MapPin, Calendar, DollarSign } from 'lucide-react'
import { PROJECTS } from '../data/content'
import { useInView } from '../hooks/useAnimations'
import './Projects.css'

export default function Projects() {
  const [ref, inView] = useInView()
  return (
    <section className="projects section" id="projects" ref={ref}>
      <div className="container">
        <div className={`section-header ${inView ? 'fade-up' : 'pre-anim'}`}>
          <div className="section-eyebrow">أعمالنا</div>
          <h2 className="section-title">مشاريع نفخر بها</h2>
          <p className="section-sub">سجل حافل من المشاريع الكبرى التي نفذناها بنجاح</p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <div
              key={p.id}
              className={`project-card ${inView ? 'fade-up' : 'pre-anim'}`}
              style={{ animationDelay: `${0.1 + i * 0.1}s` }}
            >
              <div className="project-thumb">
                <span className="project-num">0{p.id}</span>
                <div className="project-cat">{p.category}</div>
              </div>
              <div className="project-body">
                <h3 className="project-name">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-meta">
                  <div className="meta-item">
                    <Calendar size={13} />
                    <span>{p.year}</span>
                  </div>
                  <div className="meta-item">
                    <DollarSign size={13} />
                    <span>{p.value}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
