const stats = [
  { number: '0', label: 'Active Users (Yet!)' },
  { number: '1', label: 'Core Product' },
  { number: '100%', label: 'Commitment to Craft' },
  { number: '1', label: 'Clear Mission' },
]

export default function Stats() {
  return (
    <section className="section stats-section">
      <div className="container">
        <div className="stats-grid stagger-children">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item reveal">
              <p className="stat-number">{stat.number}</p>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
