import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout"
import Viaggi from "./pages/Viaggi"
import DetailViaggio from "./pages/DetailViaggio"
import ListClienti from "./pages/ListClienti"
import Clienti from "./pages/Clienti"
import CreateViaggio from "./pages/CreateViaggio"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/">
              <Route index element={<Viaggi />} />
              <Route path="create" element={<CreateViaggio />} />
              <Route path=":id" element={<DetailViaggio />} />
              <Route path=":id/clienti/:id" element={<ListClienti />} />   
            </Route>
            {/* <Route path="/clienti">
              <Route index element={<Clienti />} />         
            </Route> */}
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
