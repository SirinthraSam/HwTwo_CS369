import { 
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom"; 
   // import layout
import MainLayout from "./layout/MainLayout"; 
import ProductLayout from "./layout/ProductLayout"; 
   // import pages
import Home from "./page/HomePage"; 
import About from "./page/AboutPage"; 
import ProductsPage from "./page/ProductPage"; 
import ProductDetailPage from "./page/ProductDetailPage"; 
   
import "./App.css"
// import Logo from "./img/logo.png"
// import NotFound from "./NotFound";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="beak" element={<ProductLayout />} >
                <Route index element={<ProductsPage />} />
                <Route path=":id" element={<ProductDetailPage />} />
            </Route>
            <Route path="products" element={<ProductLayout />} >
                <Route index element={<ProductsPage />} />
                <Route path=":id" element={<ProductDetailPage />} />
            </Route>
            <Route path="dinner" element={<ProductsPage/>} />  
         
        </Route>
    )    
);

const App = () => <RouterProvider router={router} />; 
export default App;

