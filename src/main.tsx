import ReactDOM from 'react-dom/client'
import App from "./app"

const domElement = document.querySelector("#root")
if (!domElement) throw new Error("root doesn't exist")

const root = ReactDOM.createRoot(domElement)

root.render(<App />)

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
