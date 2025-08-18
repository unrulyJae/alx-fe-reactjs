import Search from "./components/Search";
import {BrowserRouter, Routes, Route} from "react-router"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App