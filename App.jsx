import {createBrowserRouter, RouterProvider} from "react-router-dom"
import CrearServicio from "./components/layouts/CrearServicio.jsx"
import ListarServicio from "./components/layouts/ListarServicio.jsx"
import EditarServicio from "./components/layouts/EditarServicio.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Hola</h1>
  },
  {
    path: "/crear",
    element: <CrearServicio />
  },
  {
    path: "/listar",
    element: <ListarServicio />
  },
  {
    path: "/editar",
    element: <EditarServicio />
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
