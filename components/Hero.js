const Hero = ({ title, backgroundImageSrc, backgroundColor }) => {
  return (
    <header className="py-16 px-4 my-4 w-full bg-primary-400">
      <h1 className="text-white text-6xl font-thin">{title}</h1>
    </header>
  )
}

export default Hero
