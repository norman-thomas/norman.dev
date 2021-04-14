const Hero = ({ title, backgroundImageSrc, backgroundColor }) => {
  return (
    <header className="py-16 px-4 my-4 w-full bg-primary-800">
      <h1 className="text-tertiary-500 text-6xl font-thin dark:text-white">
        {title}
      </h1>
    </header>
  )
}

export default Hero
