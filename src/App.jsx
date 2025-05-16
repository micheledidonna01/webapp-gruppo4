import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout"
import Viaggi from "./pages/Viaggi"
import DetailViaggio from "./pages/DetailViaggio"
import ListClienti from "./pages/ListClienti"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/">
              <Route index element={<Viaggi />} />
              <Route path=":id" element={<DetailViaggio />} />
              <Route path=":id/clienti" element={<ListClienti/>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
