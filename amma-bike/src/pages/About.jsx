import {Link }from '../Link'
import img22 from '../assets/img22.jpg'
import images from '../assets/images.jpg'


export default function AboutPage() {
  
  return (
    <>
    
    <h1>Sobre Nosotros</h1>
      <p>¡Hola!, somos un grupo de amigos que nos encanta el Mountain Bike , aquí compartiremos todas nuestras rutas y equipamentos de la bicicleta</p>
      <div>
          <img src={img22} alt="skeriakolasquad" />
      </div>
      <div>
        <img src={images} alt="aleobsa" />
      </div>
    <Link  to='/'>Ir al Inicio</Link>
    </>
  )
}