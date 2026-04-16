import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx'
import ProductDetails from './pages/ProductDetails.jsx';
import {BrowserRouter, createBrowserRouter, RouterProvider} from 'react-router-dom';
import AllProducts from './pages/AllProducts.jsx';



const routes = createBrowserRouter([

      {path:'/' , element : <Home/>},
      {
        path:'/products/:id' , element : <ProductDetails/>
      },
      {
        path: '/cateogries:id' , element : <AllProducts/>
      },
 
]


);




createRoot(document.getElementById('root')).render(
   <BrowserRouter>
  <StrictMode>
    {/* <RouterProvider router= {routes} /> */}
    <AllProducts/>
  
  </StrictMode>
  </BrowserRouter>
)


