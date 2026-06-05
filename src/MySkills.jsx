export default function MySkills({ skills = [] }) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-white">Skills</h2>
      <div className="grid grid-cols-2 gap-4">
        {skills?.map((skill, index) => (
          <div key={index} className="rounded-lg border border-slate-500 p-4 bg-slate-800">
            <p className="text-slate-300">{skill}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
