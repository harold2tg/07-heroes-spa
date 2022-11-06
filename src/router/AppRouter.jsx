import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { DCPage } from "../heroes/pages/DCPage";
import { MarvelPage } from "../heroes/pages/MarvelPage";

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="marvel" element={ <MarvelPage/> }>Marvel</Route>
            <Route path="dc" element= { <DCPage/> }>About</Route>
            <Route path="login" element= { <LoginPage/> }>About</Route>

            <Route path="/" element={ <Navigate to="/marvel"/> }>Home</Route>

        </Routes>
    </>
  )
}
