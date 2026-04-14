import Header from "../components/Header";
import NavBar from "../components/NavBar";
import ProductInfo from "../components/ProductInfo";
import { useParams } from "react-router-dom";

     



     export default function ProductDetails() {
      const {id} = useParams();
       return (

      <>
      <Header/>
      <NavBar/>
      <ProductInfo id = {id}/>
      
      
      </>



       )

     }