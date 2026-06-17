

export default function Contact({email, phone, linkedin, github}) {
  return (
    <section className="min-h-screen">
      <div className="overflow-hidden">
        <h2 className="text-2xl font-semibold text-white whitespace-nowrap inline-block animate-snake-marquee">Contact</h2>
      </div>
      <div className="space-y-4">
        <p className="text-slate-300">Email: {email}</p>
        <p className="text-slate-300">Phone: {phone}</p>
        <p className="text-slate-300">
          LinkedIn: <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{linkedin}</a>
        </p>
        <p className="text-slate-300">
          GitHub: <a href={github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Profile</a>
        </p>
      </div>
    </section>
  )
}
