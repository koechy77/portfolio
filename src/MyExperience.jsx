

export default function MyExperience({ experiences }) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-white">Experience</h2>
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
