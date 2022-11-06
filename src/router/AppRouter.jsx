import { Routes, Route, Navigate } from "react-router-dom";
import {Navbar} from '../ui/components'
import { LoginPage } from "../auth/pages/LoginPage";
import { DCPage, MarvelPage } from "../heroes";

export const AppRouter = () => {
  return (
    <>
      <Navbar/>
        <Routes>
            <Route path="marvel" element={ <MarvelPage/> }>Marvel</Route>
            <Route path="dc" element= { <DCPage/> }>About</Route>
            <Route path="login" element= { <LoginPage/> }>About</Route>
            <Route path="/" element={ <Navigate to="/marvel"/> }>Home</Route>
        </Routes>
    </>
  )
}
