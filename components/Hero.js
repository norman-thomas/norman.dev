const Hero = ({ title, backgroundImageSrc, backgroundColor }) => {
    return (
      <header className="py-16 px-4 my-4 w-full bg-blue-100">
        <h1 className="text-indigo-500 text-6xl font-thin">{title}</h1>
      </header>
    )
}

export default Hero
