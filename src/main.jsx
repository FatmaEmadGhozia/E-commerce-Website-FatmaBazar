import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx'
import ProductDetails from './pages/ProductDetails.jsx';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';



const routes = createBrowserRouter([

      {path:'/' , element : <Home/>},
      {
        path:'/products/:id' , element : <ProductDetails/>
      },
 
]


);




createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router= {routes} />
  
  </StrictMode>
)


