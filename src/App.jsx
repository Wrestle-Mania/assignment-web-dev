import CategoryPage from "./pages/CategoryPage";
import MealsPage from "./pages/MealsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";


function App() {

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" index={true} element={<CategoryPage />} />
                <Route path="/meals/:categoryName" element={<MealsPage />} />
            </Routes>
        </BrowserRouter>

    );

}

export default App;
