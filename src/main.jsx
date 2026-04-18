// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import Home from './pages/Home.jsx'
// import ProductDetails from './pages/ProductDetails.jsx';
// import {BrowserRouter, createBrowserRouter, RouterProvider} from 'react-router-dom';
// import AllProducts from './pages/AllProducts.jsx';



// const routes = createBrowserRouter([

//       {path:'/' , element : <Home/>},
//       {
//         path:'/products/:id' , element : <ProductDetails/>
//       },
//       {
//         path: '/cateogries/:id' , element : <AllProducts/>
//       },
 
      

    
// ]


// );




// createRoot(document.getElementById('root')).render(
//   //  <BrowserRouter>
//   <StrictMode>
   
//     <RouterProvider router= {routes} />
//     {/* <AllProducts/> */}
  
//   </StrictMode>
//   // </BrowserRouter>
// )






import './index.css'
import { createRoot } from 'react-dom/client'
 import { StrictMode } from 'react'
import Home from './pages/Home.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import AllProducts from './pages/AllProducts.jsx'
import Cart from './pages/Cart.jsx'
import Checkout from './pages/Checkout.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CartProvider } from './context/CartContext.jsx'

const routes = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/products', element: <AllProducts /> },
  { path: '/products/:id', element: <ProductDetails /> },
  { path: '/cateogries/:id', element: <AllProducts /> },
  { path: '/cart', element: <Cart /> },
  { path: '/checkout', element: <Checkout /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={routes} />
    </CartProvider>
  </StrictMode>
)
