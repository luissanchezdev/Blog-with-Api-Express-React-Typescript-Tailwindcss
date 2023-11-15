import heroImage from '../assets/img/hero-image.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div>
        <img src={ heroImage } alt="" className="hero-image" />
        <div className='pt-10 pb-15'>
          <h2 className='hero-title'>Tiempo de iniciar de nuevo</h2>
          <h3 className='hero-description'>El año de la IA y de la revolución informática en su fase 4.0</h3>
        </div>
      </div>
      <div className='flex-center my-10 md:py-2 lg:py-0'>
        <a href='#' className='hero-button inline-block py-2 px-10 bg-black text-white rounded-3xl shadow-md'>Enter</a>
      </div>
    </section>
  )
}

export default Hero