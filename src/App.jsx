import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemDetailContainer, ItemListContainer, NavBar } from "./components/index";

const App = () => {

  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/product/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<h1 className="text-center mt-4">Error 404</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
