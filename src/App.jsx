import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer'
import NotFound from './components/NotFound';
import { Header } from "./components/header/Header"
import './css/main.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

    //encerrar todo lo que retonarmos con browser router
    // fuera de routes metemos todo lo que nunca cambia


    const numerito = 0;
    return (
        <BrowserRouter>
            <Header numerito={numerito} />
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:categoryId' element={<ItemListContainer />} />
                <Route path='*' element={<NotFound />} />
                <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
                
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App
