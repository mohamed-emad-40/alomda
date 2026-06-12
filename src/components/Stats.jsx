import { STATS } from '../data/content'
import { useInView, useCounter } from '../hooks/useAnimations'
import './Stats.css'

function StatCard({ num, suffix, label, delay, started }) {
  const count = useCounter(num, 1800, started)
  return (
    <div className="stat-card" style={{ animationDelay: `${delay}s` }}>
      <div className="stat-number">{count}{suffix}</div>
      <div className="stat-label">{label}</div>
      <div className="stat-bar">
        <div className="stat-bar-fill" style={{ width: started ? '80%' : '0%' }}></div>
      </div>
    </div>
  )
}

export default function Stats() {
  const [ref, inView] = useInView()
  return (
    <section className="stats-section" ref={ref}>
      <div className="container">
        <div className="stats-grid">
          {STATS.map((s, i) => (
            <StatCard key={s.label} {...s} delay={i * 0.1} started={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
