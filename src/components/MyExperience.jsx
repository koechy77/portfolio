

export default function MyExperience({ experiences }) {
  return (
    <section className="space-y-4">
      <div className="overflow-hidden">
        <h2 className="text-2xl font-semibold text-white whitespace-nowrap inline-block animate-snake-marquee">Experience</h2>
      </div>
      {experiences?.map((item, index) => (
        <div key={index} className="rounded-lg border border-slate-500 p-4 bg-slate-800">
          <h3 className="text-xl font-semibold text-slate-100">{item.company}</h3>
          <p className="text-slate-300">{item.role}</p>
          <p className="text-slate-400">{item.years}</p>
        </div>
      ))}
    </section>
  )
}
