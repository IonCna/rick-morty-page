import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./containers/Header";
import Footer from "./containers/Footer";

//#region PAGES

import App from "./app"
import Options from "./app/pages/options"

//#endregion

import "./global.scss"

const domElement = document.querySelector("#root")
if (!domElement) throw new Error("root doesn't exist")

const PATHS = {
  main: "/",
  options: "options"
}

const router = createBrowserRouter([
  {
    path: PATHS.main,
    element: (<App />)
  },
  {
    path: PATHS.options,
    element: (<Options />)
  }
])

const root = createRoot(domElement)

root.render(
  <div className="temporal context provider">
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </div>
)

/*
  Consumir la api de Rick and Morty  url API (https://rickandmortyapi.com/api/)
  Generar diseño de los personajes que sea Responsivo
  por cada personaje mostrar, nombre, especie, estatus e imagen
  que pueda agregar los personajes a mis favoritos
  colocar un input de búsqueda que pueda buscar sobre todos los personajes, no solo de la pagina actual
  Al estar en favoritos que los pueda eliminar personajes
  colocar un input de búsqueda que solo busque en mis favoritos  
  como plus poner modo oscuro y regresar al modo claro
*/
