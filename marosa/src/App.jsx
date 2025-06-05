// Import das bibliotecas
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Import da css e dos diversos componentes
import Container from './components/layout/Container.jsx'
import NavBar from './components/layout/NavBar'

//Import das paginas
import Home from './components/pages/Home'
import CreateProduct from './components/pages/CreateProduct'
import ListProduct from './components/pages/ListProduct'
import DetailProd from './components/pages/DetailProd'
import UpdateProduct from './components/pages/UpdateProduct.jsx'
import DeleteProd from './components/pages/DeleteProd.jsx'

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
                <Route path='/detailProd/:cod_prod' element={<DetailProd/>}/>
                <Route path='/deleteProd/:cod_prod' element={<DeleteProd/>}/>
                <Route path='/updateProd/:cod_prod' element={<UpdateProduct />}/>
              </Route>

            </Routes>
          </Container>

      </BrowserRouter>


      </div>
    </>
  )
}

export default App