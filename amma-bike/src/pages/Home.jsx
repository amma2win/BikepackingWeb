import { Link }from '../Link'
import foto from '../assets/Padrisima.jpg'


export default function HomePage(){

    return (

      <>
     
      <h1>Bienvenidos</h1>
      <h4>Pagina oficial de Skeria Kola Squad</h4>
      <p>Esta es una página de Bikepackers que comparten sus viajes y salidas a la montaña</p>
      <img src={foto} alt="welcomepage" />
      <div>
        <Link to='/about'>Conocé más sobre Nosotros</Link>
       
      </div>
     
      <div>
      <Link to='/videos'>Mira nuestros videos</Link>
      </div>
      


      </>

    )
  }