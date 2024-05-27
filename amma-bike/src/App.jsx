import './App.css'
import { Router } from './Router'
import Page404 from './pages/404'
import SearchPage from './pages/Search' //import estatico
import { Route } from './Route'
import { Suspense, lazy } from 'react'
import NavBar from './pages/NavBar'
import Banner from './pages/Banner'


const LazyVideos = lazy(() =>import('./pages/Videos'))
const AboutPage = lazy(()=>import('./pages/About')) //import dinamico, esta hecho con una promesa.
const HomePage = lazy(()=>import('./pages/Home')) 
const appRoutes = [

   {
    path: '/search/:query',
    Component: SearchPage
  }
]


function App() {
  return (
    <main>
      <Suspense fallback={null}> 
      <Router routes={appRoutes} defaultComponent={Page404}>
        <Banner>ASd</Banner>
        <NavBar></NavBar>
        <Route path= '/' Component={HomePage}/>
        <Route path= '/about' Component={AboutPage}/>
        <Route path='/videos' Component={LazyVideos}/>
      </Router>
      </Suspense>
    </main>
  )
}

// dentro de App creamos el "suspense" por la promesa del import dinamico

export default App ;
