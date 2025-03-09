// Import das bibliotecas
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Import da css e dos diversos componentes
import './App.css'
import Container from './components/layout/Container.jsx'
import NavBar from './components/layout/NavBar'

//Import das paginas
import Home from './components/pages/Home'
import CreateProduct from './components/pages/CreateProduct'
import ListProduct from './components/pages/ListProduct'



function App() {

  return (
    <>
      <div>
      <BrowserRouter>

          <Container>

            <Routes>
              <Route path='/' element={<NavBar/>}>

                <Route path='/' element={<Home/>}/>
                <Route path='createNewProduct' element={<CreateProduct/>}/>
                <Route path='listProduct'element={<ListProduct/>}/>

              </Route>

            </Routes>
          </Container>

      </BrowserRouter>


      </div>
    </>
  )
}

export default App