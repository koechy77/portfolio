export default function MySkills({ skills = [] }) {
  return (
    <section className="space-y-4">
      <div className="overflow-hidden">
        <h2 className="text-2xl font-semibold text-white whitespace-nowrap inline-block animate-snake-marquee">Skills</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 font-semibold p-4">
        {skills?.map((skill, index) => (
          <div key={index} className="rounded-lg border border-slate-500 md:py-25 bg-slate-800">
            <p className="text-slate-300">{skill}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
