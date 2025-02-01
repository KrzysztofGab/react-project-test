
// biblioteka, która pozwala na definicje pod jakimi ścieżkami chcemy wyświetlać dane komponenty

import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Home } from "./pages/Home";



function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App
