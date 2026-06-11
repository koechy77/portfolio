

export default function Header({ name, tagline, backgroundImage }) {
  return (
    <div 
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <h1 className="text-4xl font-bold text-white text-center">{name}</h1>
      <p className="text-2xl text-gray-100 text-center">{tagline}</p>
    </div>
  )
}
