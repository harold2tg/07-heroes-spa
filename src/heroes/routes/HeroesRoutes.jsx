import {Route,Routes, Navigate} from 'react-router-dom'
import { Navbar } from "../../ui/components";
import { MarvelPage, DcPage, SearchPage, HeroPage } from '../pages';

export const HeroesRoutes = () => {
  return (
    <>
    <Navbar/>
      <div className="container">
        <Routes>
            <Route path="marvel" element={ <MarvelPage/> }>Marvel</Route>
            <Route path="dc" element= { <DcPage/> }>DC</Route>
            <Route path="search" element= { <SearchPage/> }>DC</Route>
            <Route path="hero" element= { <HeroPage/> }>DC</Route>


            <Route path="/" element={ <Navigate to="/marvel"/> }>Home</Route>
        </Routes>
      </div>  
    </>
  )
}
