import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//#region CONTAINERS

import { ContextProvider } from "./hooks/useContext"
import Header from "./containers/Header";
import Footer from "./containers/Footer";

//#endregion

//#region PAGES

import Landing from "./app"
import Options from "./app/pages/options"
import NotFount from "./app/pages/Errors/notFound";
import Episodes from "./app/pages/episodes";
import Characters from "./app/pages/characters";
import Locations from "./app/pages/locations";

//#endregion

import "./global.scss"

const domElement = document.querySelector("#root")
if (!domElement) throw new Error("root doesn't exist")

enum PATHS {
  notFound = "*",
  main = "/",
  characters = "characters",
  episodes = "episodes",
  locations = "locations",
  options = "options",
}

const router = createBrowserRouter([
  {
    path: PATHS.notFound,
    element: (<NotFount />)
  },
  {
    path: PATHS.main,
    element: (<Landing />)
  },
  {
    path: PATHS.options,
    element: (<Options />)
  },
  {
    path: PATHS.episodes,
    element: (<Episodes />)
  },
  {
    path: PATHS.characters,
    element: (<Characters />)
  },
  {
    path: PATHS.locations,
    element: (<Locations />)
  },
])

const root = createRoot(domElement)

const App = () => {
  return (
    <ContextProvider>
      <Header />
      <RouterProvider router={router}/>
      <Footer />
    </ContextProvider>
  )
}

root.render(<App />)

/*
  1.- Consumir la api de Rick and Morty url API (https://rickandmortyapi.com/api/) (y)
  2.- Generar diseño de los personajes que sea Responsivo (n)
  3.- Por cada personaje mostrar, nombre, especie, estatus e imagen (n)
  4.- Agregar los personajes a mis favoritos (m)
  5.- input de búsqueda que pueda buscar sobre todos los personajes, no solo de la pagina actual (m)
  Al estar en favoritos que los pueda eliminar personajes
  colocar un input de búsqueda que solo busque en mis favoritos  
  como plus poner modo oscuro y regresar al modo claro
*/
