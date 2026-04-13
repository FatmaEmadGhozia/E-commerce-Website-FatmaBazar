


import cookingIcon from "../assets/image_1.jpg";
import biscuitIcon from "../assets/image_16.jpg";
import householdIcon from "../assets/image_3.jpg";
import petIcon from "../assets/image_18.jpg";
import beautyIcon from "../assets/image_5.jpg";
import jamIcon from "../assets/image_6.jpg";
import milkIcon from "../assets/image_7.jpg";
import drinksIcon from "../assets/image_16.jpg";
import breakfastIcon from "../assets/image_9.jpg";

 import Mint from "../assets/Mint.avif";           
import  PakaPape from "../assets/image_26.jpg";
import Letuuce from "../assets/image_27.jpg";
import BiskClub from "../assets/image_28.jpg";
import Pieapple from "../assets/image_29.jpg";
import Avocado from "../assets/image_30.jpg";
import TShirt from "../assets/image_31.jpg";
import lKale from "../assets/image_33.jpg";
import Corn from "../assets/image_35.jpg";
import Clementine from "../assets/image_25.jpg";
import CalaBaza from "../assets/image_37.jpg";
import Kale from "../assets/image_38.jpg";
import Dates from "../assets/image_41.jpg";
import Tomato from "../assets/Tomato.avif";
import Broccoli from "../assets/Broccoli-.avif";
import OrangeBiscuit from "../assets/Orange-biscuits.avif";
import Carot from "../assets/Carrot.avif";







import product1 from "../assets/houes1.avif";
import product2 from "../assets/house2.avif";
import product3 from "../assets/house3.avif";
import product4 from "../assets/house4.avif";
import product5 from "../assets/house5.avif";
import product6 from "../assets/house6.avif";
import product7 from "../assets/house7.avif";
import product8 from "../assets/house8.avif";
import product9 from "../assets/house9.avif";
import product10 from "../assets/house10.avif";
import product11 from "../assets/house11.avif";
import product12 from "../assets/house12.avif";
import product13 from "../assets/house13.avif";
import product14 from "../assets/house14.avif";
import product15 from "../assets/house15.avif";







 export  const  categories = [
  {
    title: "Cooking Essentials",
    items: ["Flour"],
    icon: cookingIcon
    
  },
  {
    title: "Biscuits & Cakes",
    items: ["Biscuits", "Cakes"],
    icon: biscuitIcon
  },
  {
    title: "Household Tools",
    items: ["electronics", "Water Filter", "Cleaning Tools"],
    icon: householdIcon

  },
  {
    title: "Pet Care",
    items: ["Dog Care", "Cat Care"],
    icon: petIcon
  },
  {
    title: "Beauty & Healths",
    items: ["Women", "Men"],
    icon: beautyIcon
  },
  {
    title: "Jam & Jelly",
    items: [],
    icon: jamIcon
    
  },
  {
    title: "Milk & Dairy",
    items: ["Butter & Ghee", "Ice Cream", "Dairy"],
    icon: milkIcon
  },
  {
    title: "Drinks",
    items: ["Tea", "Water", "Juice"],
    icon: drinksIcon
  },
  {
    title: "Breakfast",
    items: ["Bread", "Cereal"],
    icon: breakfastIcon
  }
];






 export const popularProducts = [
  {
    name: "Mint",
    price: 30.78,
    rating: 2.9,
    reviews: 7,
    discount: null,
    sold: null,
    total: null,
    image : Mint
  },
  {
    name: "Clementine",
    price: 48.12,
    rating: 3.2,
    reviews: 10,
    discount: null,
    sold: null,
    total: null,
    image : Clementine

  },
  {
    name: "Paka Pape",
    price: 150.53,
    oldPrice: 158.45,
    rating: 0.0,
    reviews: 0,
    discount: "5%",
    sold: 62,
    total: 100,
    image : PakaPape
  },
  {
    name: "Lettuce",
    price: 193.26,
    rating: 4.0,
    reviews: 5,
    discount: null,
    sold: null,
    total: null,
    image : Letuuce
  },
  {
    name: "Bisk Club Cream Biscuit",
    price: 49.60,
    oldPrice: 59.05,
    rating: 0.0,
    reviews: 0,
    discount: "16%",
    sold: 68,
    total: 100,
    image : BiskClub
  },
  {
    name: "Pineapple Imported",
    price: 24.00,
    oldPrice: 30.00,
    rating: 2.9,
    reviews: 9,
    discount: "20%",
    sold: 27,
    total: 100,
    image : Pieapple
  },
  {
    name: "Organic Pinkerton Avocado",
    price: 63.89,
    oldPrice: 106.49,
    rating: 3.0,
    reviews: 3,
    discount: "40%",
    sold: 50,
    total: 100,
    image : Avocado
  },
  {
    name: "Premium T-Shirt",
    price: 427.50,
    oldPrice: 450.00,
    rating: 3.6,
    reviews: 9,
    discount: "5%",
    sold: 4,
    total: 100,
    image : TShirt
  },

  {
    name: "Lacinato Dinosaur Kale",
    price: 22.36,
    oldPrice: 55.91,
    rating: 3.5,
    reviews: 6,
    discount: "60%",
    sold: 27,
    total: 100,
    image : Kale
  },
  {
    name: "Organic Cherry Tomato",
    price: 15.56,
    rating: 2.2,
    reviews: 5,
    discount: null,
    sold: null,
    total: null,
    image : Tomato
  },
  {
    name: "Yellow Sweet Corn",
    price: 80.97,
    rating: 2.6,
    reviews: 5,
    discount: null,
    sold: null,
    total: null,
    image : Corn
  },
 {
    name: "Organic Baby Carrot",
    rating: 4.3,
    reviews: 4,
    price: 105.00,
    originalPrice: 150.00,
    discount: "30% Off",
    sold: 5,
    stock: 100, 
    image : Carot
    
  },
  {
    name: "Calabaza Squash",
    rating: 3.0,
    reviews: 6,
    price: 98.03,
    originalPrice: null,
    discount: null,
    sold: null,
    stock: null,
    image : CalaBaza
  },
  {
    name: "Organic Kale",
    rating: 2.3,
    reviews: 4,
    price: 15.06,
    originalPrice: null,
    discount: null,
    sold: null,
    stock: null,
    image : lKale
  },
  {
    name: "Chinese Broccoli",
    rating: 0.0,
    reviews: 0,
    price: 30.00,
    originalPrice: 43.12,
    discount: "30% Off",
    sold: null,
    stock: null,
    image : Broccoli
  },
  {
    name: "Danish Orange Biscuit",
    rating: 5.0,
    reviews: 1,
    price: 66.23,
    originalPrice: 220.77,
    discount: "70% Off",
    sold: 22,
    stock: 100,
    image : OrangeBiscuit
  },
  {
    name: "Fresh Dates",
    rating: 0.0,
    reviews: 0,
    price: 204.28,
    originalPrice: 226.98,
    discount: "10% Off",
    sold: 33,
    stock: 50,
    image : Dates
  }
  

];




 export const HouseholdProducts = [
  
  {
    name: "Glade Refills Scented",
    rating: 0.0,
    reviews: 0,
    price: 229.97,
    originalPrice: null,
    discount: null,
    image : product1
  },
  {
    name: "d Con Trap Rat",
    rating: 0.0,
    reviews: 0,
    price: 11.81,
    originalPrice: null,
    discount: null,
    image : product2
  },
  {
    name: "Glade Automatic Spray",
    rating: 0.0,
    reviews: 0,
    price: 77.63,
    originalPrice: null,
    discount: null,
    image : product3
  },
  {
    name: "Valu Time Lemon Scent",
    rating: 0.0,
    reviews: 0,
    price: 256.48,
    originalPrice: null,
    discount: null,
    image : product4
  },
  {
    name: "Arm Hammer Detergent",
    rating: 0.0,
    reviews: 0,
    price: 262.08,
    originalPrice: null,
    discount: null,
    image : product5
  },

  // Image 2
  {
    name: "Arm Hammer Detergent",
    rating: 0.0,
    reviews: 0,
    price: 262.08,
    originalPrice: null,
    discount: null,
    image : product6
  },
  {
    name: "Sophresh",
    rating: 0.0,
    reviews: 0,
    price: 175.85,
    originalPrice: null,
    discount: null,
    image : product7
  },
  {
    name: "Scrub Bob",
    rating: 0.0,
    reviews: 0,
    price: 229.52,
    originalPrice: null,
    discount: null,
    image : product8
  },
  {
    name: "Valu Time Fabric Softener",
    rating: 0.0,
    reviews: 0,
    price: 79.26,
    originalPrice: null,
    discount: null,
    image : product9
  },
  {
    name: "Good Clean Wipes",
    rating: 0.0,
    reviews: 0,
    price: 150.22,
    originalPrice: null,
    discount: null,
    image : product10
  // Image 3
  },
  {
    name: "Natures Alchemy Rosewood",
    rating: 0.0,
    reviews: 0,
    price: 133.67,
    originalPrice: null,
    discount: null,
    image : product11
  },
  {
    name: "Leather Automotive Cleaning",
    rating: 0.0,
    reviews: 0,
    price: 264.80,
    originalPrice: null,
    discount: null,
    image : product12
  },
  {
    name: "Open Nature Chlorine",
    rating: 0.0,
    reviews: 0,
    price: 21.62,
    originalPrice: null,
    discount: null,
    image : product13
  },
  {
    name: "Orange Guard Insect Spray",
    rating: 0.0,
    reviews: 0,
    price: 265.21,
    originalPrice: null,
    discount: null,
    image : product14
  },
  {
    name: "Hot Shot Ant Killer",
    rating: 0.0,
    reviews: 0,
    price: 53.40,
    originalPrice: null,
    discount: null,
    image : product15
  }
];