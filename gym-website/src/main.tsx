import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Nav from './component/navbar/NavBar';
import Header from './component/Header/Header';
import SlideShow from './component/slideshow/SlideShow';
import NewArrivals from './component/newarrivals/NewArrivals';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Nav/>
    <Header/>
    <SlideShow/>
    <NewArrivals/>
  </StrictMode>,
)
