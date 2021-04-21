const Hero = ({ title, backgroundImageSrc, backgroundColor }) => {
  return (
    <header className="pb-16 pt-8 px-4 mb-4 w-full bg-primary-400">
      <div className="container mx-auto">
        <h1 className="text-white text-6xl font-thin">{title}</h1>
      </div>
    </header>
  )
}

export default Hero
