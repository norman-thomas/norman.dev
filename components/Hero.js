const Hero = ({ title, backgroundImageSrc, backgroundColor }) => {
    return (
      <header className="py-16 px-4 my-4 w-full bg-gray-700">
        <h1 className="text-indigo-500 text-6xl font-thin dark:text-white">{title}</h1>
      </header>
    )
}

export default Hero
