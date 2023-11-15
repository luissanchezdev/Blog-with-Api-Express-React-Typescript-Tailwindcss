const Footer = () => {
  return (
    <footer className="footer">
      <p>Todos los derechos reservados by <small className="font-bold block md:inline-block">Luis Sanchez</small></p>
      <small>{ new Date().getFullYear() }</small>
    </footer>
  )
}

export default Footer