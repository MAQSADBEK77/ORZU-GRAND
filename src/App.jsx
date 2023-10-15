import "./App.css";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import OKompaniya from "./pages/OKompaniya";
import Products from "./pages/Products";
import Analyze from "./pages/Analyze";
import Analyzetor from "./pages/Analyzetor";
import Servises from "./pages/Servises";
import NewsPromotions from "./pages/NewsPromotions";
import Contacts from "./pages/Contacts";

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route element={<Home />} index />
        <Route element={<OKompaniya />} path="info" />
        <Route element={<Products />} path="products" />
        <Route element={<Analyze />} path="analyze" />
        <Route element={<Analyzetor />} path="analyzetor" />
        <Route element={<Servises />} path="servises" />
        <Route element={<NewsPromotions />} path="newspromotions" />
        <Route element={<Contacts />} path="contacts" />
      </Route>
    )
  );
  return (
    <>
      <div className="back-img"></div>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
