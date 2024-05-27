import { Link } from "../Link"

export default function Page404 (){
    return (
        <>
        <h1>Algo NO anda bien</h1>
        <div>
        <img src="https://midu.dev/images/this-is-fine-404.gif" alt="Quemandose vivo" />
        </div>
        
        <Link to='/'>Volver al Inicio</Link>
        </>
    )
}