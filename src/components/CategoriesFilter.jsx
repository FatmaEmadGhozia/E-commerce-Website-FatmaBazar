// import { useState } from "react";
// import { categories } from "../data/data";
// import CateogryBarItem from "./CateogryBarItem";
// import Product from "../components/Product";
// import { popularProducts } from "../data/data";
// import { FiChevronLeft, FiChevronRight, FiGrid, FiList } from "react-icons/fi";

// export default function CategoriesFilter({ products = [] }) {
//   const [count, setCount] = useState(0);
//   const [viewMode, setViewMode] = useState("grid"); // "grid" | "list"
//   const [sortBy, setSortBy] = useState("featured");
//   const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
//   const [openSections, setOpenSections] = useState({
//     categories: true,
//     price: true,
//     rating: false,
//   });

//   function toggleSection(key) {
//     setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
//   }

//   function handleNext() {
//     setCount((prev) => prev + 1);
//   }

//   function handlePrev() {
//     setCount((prev) => (prev > 0 ? prev - 1 : 0));
//   }

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* Page Header */}
//       <div className="bg-white border-b border-gray-200 px-15 py-8">
//         <h1 className="text-3xl font-bold">All Products</h1>
//         <p className="mt-2 text-sm text-gray-500">
//           Home <FiChevronRight className="inline" /> Search
//         </p>
//       </div>

//       {/* <div className="bg-white border-b border-gray-200 px-10 py-4 relative">
//         <FiChevronLeft
//           className="absolute left-3 top-1/2 -translate-y-1/2 text-3xl bg-gray-100 rounded-xl p-2 text-gray-500 cursor-pointer"
//           onClick={handlePrev}
//         />
//         <div className="grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-2 mx-10">
//           {categories.map((cat) => (
//             <CateogryBarItem key={cat.title} icon={cat.icon} title={cat.title} />
//           ))}
//         </div>
//         <FiChevronRight
//           className="absolute right-3 top-1/2 -translate-y-1/2 text-3xl bg-teal-600 text-white rounded-xl p-2 cursor-pointer"
//           onClick={handleNext}
//         />
//       </div> */}

//       {/* Category Bar */}
//       <div className="mt-18 relative mb-15 ">
//         <FiChevronLeft
//           className=" text-4xl absolute left-5   bg-gray-100 rounded-2xl font-bold text-gray-500 flex items-center justify-center p-2"
//           onClick={() => handlePrev()}
//         />

//         <div className="grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))]  gap-1  mx-15">
//           {categories.map((cat) => {
//             return <CateogryBarItem icon={cat.icon} title={cat.title} />;
//           })}
//         </div>

//         <FiChevronRight
//           className=" text-4xl absolute right-5 top-0  bg-[var(--primaryColor)] text-white font-bold rounded-2xl text-gray-500 flex items-center justify-center p-2"
//           onClick={() => handleNext()}
//         />
//       </div>

//       {/* Main Content: Sidebar + Grid */}
//       <div className="grid grid-cols-[1fr_4fr] min-h-screen">
//         {/* ── Sidebar ── */}
//         <aside className="bg-white border-r border-gray-200 p-5 sticky top-0">
//           <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">
//             Filters
//           </p>
//           <hr className="mb-4" />

//           {/* Categories */}
//           <div className="mb-5">
//             <button
//               className="w-full flex justify-between text-sm font-medium mb-3"
//               onClick={() => toggleSection("categories")}
//             >
//               Categories
//               <span>{openSections.categories ? "^" : "∨"}</span>
//             </button>
//             {openSections.categories && (
//               <ul className="space-y-2">
//                 {categories.map((c) => (
//                   <li
//                     id={c.id}
//                     className="text-sm text-gray-500 cursor-pointer hover:text-gray-800 p-2   hover:text-[var(--primaryColor)]"
                    
//                   >
//                     {c.title}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//           <hr className="mb-4" />

//           {/* Price Range */}
//           <div className="mb-5">
//             <button
//               className="w-full flex justify-between text-sm font-medium mb-3"
//               onClick={() => toggleSection("price")}
//             >
//               Price Range
//               <span>{openSections.price ? "∧" : "∨"}</span>
//             </button>
//             {openSections.price && (
//               <div className="flex items-center gap-2">
//                 <input
//                   type="number"
//                   value={priceRange.min}
//                   onChange={(e) =>
//                     setPriceRange((p) => ({ ...p, min: e.target.value }))
//                   }
//                   className="w-20 border border-gray-300 rounded-lg px-2 py-1 text-sm"
//                 />
//                 <span className="text-gray-400 text-sm">to</span>
//                 <input
//                   type="number"
//                   value={priceRange.max}
//                   onChange={(e) =>
//                     setPriceRange((p) => ({ ...p, max: e.target.value }))
//                   }
//                   className="w-20 border border-gray-300 rounded-lg px-2 py-1 text-sm"
//                 />
//               </div>
//             )}
//           </div>
//           <hr className="mb-4" />

//           {/* Rating */}
//           <div className="mb-5">
//             <button
//               className="w-full flex justify-between text-sm font-medium"
//               onClick={() => toggleSection("rating")}
//             >
//               Rating
//               <span>{openSections.rating ? "∧" : "∨"}</span>
//             </button>
//           </div>

//           <button className="w-full mt-4 py-2 border border-gray-300 rounded-xl text-sm text-gray-500 hover:bg-gray-50">
//             Clear All Filters
//           </button>
//         </aside>

//         {/* ── Products Area ── */}
//         <main className="p-6">
//           {/* Toolbar */}
//           <div className="flex items-center gap-3 mb-5 bg-white p-5 shadow-sm border border-gray-300">
//             {/* View toggle */}
//             <div className="flex border border-gray-200 rounded-lg overflow-hidden">
//               <button
//                 onClick={() => setViewMode("grid")}
//                 className={`p-2 ${viewMode === "grid" ? "bg-gray-100" : "bg-white"}`}
//               >
//                 <FiGrid className="text-gray-500" />
//               </button>
//               <button
//                 onClick={() => setViewMode("list")}
//                 className={`p-2 border-l border-gray-200 ${viewMode === "list" ? "bg-gray-100" : "bg-white"}`}
//               >
//                 <FiList className="text-gray-500" />
//               </button>
//             </div>

//             <span className="text-sm text-gray-500 flex-1">
//               {popularProducts.length} results
//             </span>

//             <span className="text-sm text-gray-500">Sort by:</span>
//             <select
//               value={sortBy}
//               onChange={(e) => setSortBy(e.target.value)}
//               className="border border-gray-300 p-2 rounded-lg px-3 py-1.5 text-sm bg-white"
//             >
//               <option value="featured">Featured</option>
//               <option value="price-asc">Price: Low to High</option>
//               <option value="price-desc">Price: High to Low</option>
//               <option value="rating">Rating</option>
//             </select>
//           </div>

//           {/* Product Grid */}
//           <div
//             className={
//               viewMode === "grid"
//                 ? "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5"
//                 : "flex flex-col gap-4"
//             }
//           >
//             {popularProducts.map((product) => (
//               <Product
//                 id={product.id}
//                 name={product.name}
//                 price={product.price}
//                 reviews={product.reviews}
//                 image={product.image}
//               />
//             ))}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }





// import { useState } from "react";
// import { categories } from "../data/data";
// import CateogryBarItem from "./CateogryBarItem";
// import Product from "../components/Product";
// import { popularProducts } from "../data/data";
// import { FiChevronRight, FiGrid, FiList, FiSearch, FiX } from "react-icons/fi";
// import { useSearchParams } from "react-router-dom";

// export default function CategoriesFilter() {
//   const [searchParams] = useSearchParams();
//   const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [viewMode, setViewMode] = useState("grid");
//   const [sortBy, setSortBy] = useState("featured");
//   const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
//   const [openSections, setOpenSections] = useState({ categories: true, price: true });

//   function toggleSection(key) {
//     setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
//   }

//   const filtered = popularProducts
//     .filter((p) => {
//       const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
//       const matchCategory = selectedCategory === "All" || p.category === selectedCategory;
//       const matchPrice = p.price >= Number(priceRange.min) && p.price <= Number(priceRange.max);
//       return matchSearch && matchCategory && matchPrice;
//     })
//     .sort((a, b) => {
//       if (sortBy === "price-asc") return a.price - b.price;
//       if (sortBy === "price-desc") return b.price - a.price;
//       if (sortBy === "rating") return b.rating - a.rating;
//       return 0;
//     });

//   function clearFilters() {
//     setSearchQuery('');
//     setSelectedCategory('All');
//     setPriceRange({ min: 0, max: 1000 });
//     setSortBy('featured');
//   }

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <div className="bg-white border-b border-gray-200 px-15 py-8">
//         <h1 className="text-3xl font-bold">All Products</h1>
//         <p className="mt-2 text-sm text-gray-500">Home <FiChevronRight className="inline" /> Products</p>
//       </div>

//       {/* Search Bar */}
//       <div className="bg-white border-b border-gray-200 px-15 py-4">
//         <div className="relative max-w-xl">
//           <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//           <input
//             type="text"
//             placeholder="Search products by name..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-xl focus:outline-none focus:border-[var(--primaryColor)] text-sm"
//           />
//           {searchQuery && (
//             <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700">
//               <FiX />
//             </button>
//           )}
//         </div>
//       </div>

//       <div className="grid grid-cols-[1fr_4fr] min-h-screen">
//         {/* Sidebar */}
//         <aside className="bg-white border-r border-gray-200 p-5 self-start sticky top-0">
//           <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">Filters</p>
//           <hr className="mb-4" />

//           <div className="mb-5">
//             <button className="w-full flex justify-between text-sm font-medium mb-3" onClick={() => toggleSection("categories")}>
//               Categories <span>{openSections.categories ? "^" : "∨"}</span>
//             </button>
//             {openSections.categories && (
//               <ul className="space-y-1">
//                 <li
//                   className={`text-sm cursor-pointer p-2 rounded-lg transition ${selectedCategory === "All" ? "text-[var(--primaryColor)] bg-purple-50 font-bold" : "text-gray-500 hover:text-[var(--primaryColor)]"}`}
//                   onClick={() => setSelectedCategory("All")}
//                 >
//                   All Products
//                 </li>
//                 {categories.map((c) => (
//                   <li
//                     key={c.id}
//                     className={`text-sm cursor-pointer p-2 rounded-lg transition ${selectedCategory === c.title ? "text-[var(--primaryColor)] bg-purple-50 font-bold" : "text-gray-500 hover:text-[var(--primaryColor)]"}`}
//                     onClick={() => setSelectedCategory(c.title)}
//                   >
//                     {c.title}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//           <hr className="mb-4" />

//           <div className="mb-5">
//             <button className="w-full flex justify-between text-sm font-medium mb-3" onClick={() => toggleSection("price")}>
//               Price Range <span>{openSections.price ? "∧" : "∨"}</span>
//             </button>
//             {openSections.price && (
//               <div className="flex items-center gap-2">
//                 <input type="number" value={priceRange.min} onChange={(e) => setPriceRange(p => ({ ...p, min: e.target.value }))}
//                   className="w-20 border border-gray-300 rounded-lg px-2 py-1 text-sm" placeholder="Min" />
//                 <span className="text-gray-400 text-sm">to</span>
//                 <input type="number" value={priceRange.max} onChange={(e) => setPriceRange(p => ({ ...p, max: e.target.value }))}
//                   className="w-20 border border-gray-300 rounded-lg px-2 py-1 text-sm" placeholder="Max" />
//               </div>
//             )}
//           </div>
//           <hr className="mb-4" />

//           <button className="w-full mt-2 py-2 border border-gray-300 rounded-xl text-sm text-gray-500 hover:bg-gray-50" onClick={clearFilters}>
//             Clear All Filters
//           </button>
//         </aside>

//         {/* Products */}
//         <main className="p-6">
//           <div className="flex items-center gap-3 mb-5 bg-white p-5 shadow-sm border border-gray-300">
//             <div className="flex border border-gray-200 rounded-lg overflow-hidden">
//               <button onClick={() => setViewMode("grid")} className={`p-2 ${viewMode === "grid" ? "bg-gray-100" : "bg-white"}`}>
//                 <FiGrid className="text-gray-500" />
//               </button>
//               <button onClick={() => setViewMode("list")} className={`p-2 border-l border-gray-200 ${viewMode === "list" ? "bg-gray-100" : "bg-white"}`}>
//                 <FiList className="text-gray-500" />
//               </button>
//             </div>
//             <span className="text-sm text-gray-500 flex-1">{filtered.length} results</span>
//             <span className="text-sm text-gray-500">Sort by:</span>
//             <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}
//               className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm bg-white">
//               <option value="featured">Featured</option>
//               <option value="price-asc">Price: Low to High</option>
//               <option value="price-desc">Price: High to Low</option>
//               <option value="rating">Rating</option>
//             </select>
//           </div>

//           {filtered.length === 0 ? (
//             <div className="flex flex-col items-center justify-center h-60 text-gray-400">
//               <FiSearch className="text-5xl mb-4" />
//               <p className="text-lg">No products found</p>
//               <button onClick={clearFilters} className="mt-3 text-[var(--primaryColor)] underline text-sm">Clear filters</button>
//             </div>
//           ) : (
//             <div className={viewMode === "grid" ? "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5" : "flex flex-col gap-4"}>
//               {filtered.map((product) => (
//                 <Product key={product.id} id={product.id} name={product.name} price={product.price}
//                   reviews={product.reviews} image={product.image} rating={product.rating} />
//               ))}
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// }







import { useState } from "react";
import { categories, allProducts } from "../data/data";
import Product from "../components/Product";
import { FiChevronRight, FiGrid, FiList, FiSearch, FiX } from "react-icons/fi";
import { useSearchParams } from "react-router-dom";
 
export default function CategoriesFilter() {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [openSections, setOpenSections] = useState({ categories: true, price: true });
 
  function toggleSection(key) {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  }
 
  const filtered = allProducts
    .filter((p) => {
      const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchCat = selectedCategory === "All" || p.category === selectedCategory;
      const matchPrice = p.price >= Number(priceRange.min) && p.price <= Number(priceRange.max);
      return matchSearch && matchCat && matchPrice;
    })
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });
 
  function clearFilters() {
    setSearchQuery("");
    setSelectedCategory("All");
    setPriceRange({ min: 0, max: 1000 });
    setSortBy("featured");
  }
 
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white border-b border-gray-200 px-25 py-8">
        <h1 className="text-3xl font-bold">All Products</h1>
        <p className="mt-2 text-sm text-gray-500">Home <FiChevronRight className="inline" /> Products</p>
      </div>
 
      <div className="bg-white border-b border-gray-200 px-15 py-4">
        <div className="relative max-w-xl">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="text" placeholder="Search products by name..." value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-xl focus:outline-none focus:border-[var(--primaryColor)] text-sm" />
          {searchQuery && (
            <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"><FiX /></button>
          )}
        </div>
      </div>
 
      <div className="grid grid-cols-[1fr_4fr] min-h-screen">
        <aside className="bg-white border-r border-gray-200 p-5 self-start sticky top-0">
          <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">Filters</p>
          <hr className="mb-4" />
          <div className="mb-5">
            <button className="w-full flex justify-between text-sm font-medium mb-3" onClick={() => toggleSection("categories")}>
              Categories <span>{openSections.categories ? "^" : "∨"}</span>
            </button>
            {openSections.categories && (
              <ul className="space-y-1">
                <li className={`text-sm cursor-pointer p-2 rounded-lg transition ${selectedCategory === "All" ? "text-[var(--primaryColor)] bg-purple-50 font-bold" : "text-gray-500 hover:text-[var(--primaryColor)]"}`}
                  onClick={() => setSelectedCategory("All")}>All Products</li>
                {categories.map((c) => (
                  <li key={c.id}
                    className={`text-sm cursor-pointer p-2 rounded-lg transition ${selectedCategory === c.title ? "text-[var(--primaryColor)] bg-purple-50 font-bold" : "text-gray-500 hover:text-[var(--primaryColor)]"}`}
                    onClick={() => setSelectedCategory(c.title)}>{c.title}</li>
                ))}
              </ul>
            )}
          </div>
          <hr className="mb-4" />
          <div className="mb-5">
            <button className="w-full flex justify-between text-sm font-medium mb-3" onClick={() => toggleSection("price")}>
              Price Range <span>{openSections.price ? "∧" : "∨"}</span>
            </button>
            {openSections.price && (
              <div className="flex items-center gap-2">
                <input type="number" value={priceRange.min} onChange={(e) => setPriceRange((p) => ({ ...p, min: e.target.value }))}
                  className="w-20 border border-gray-300 rounded-lg px-2 py-1 text-sm" placeholder="Min" />
                <span className="text-gray-400 text-sm">to</span>
                <input type="number" value={priceRange.max} onChange={(e) => setPriceRange((p) => ({ ...p, max: e.target.value }))}
                  className="w-20 border border-gray-300 rounded-lg px-2 py-1 text-sm" placeholder="Max" />
              </div>
            )}
          </div>
          <hr className="mb-4" />
          <button className="w-full mt-2 py-2 border border-gray-300 rounded-xl text-sm text-gray-500 hover:bg-gray-50" onClick={clearFilters}>
            Clear All Filters
          </button>
        </aside>
 
        <main className="p-6">
          <div className="flex items-center gap-3 mb-5 bg-white p-5 shadow-sm border border-gray-300">
            <div className="flex border border-gray-200 rounded-lg overflow-hidden">
              <button onClick={() => setViewMode("grid")} className={`p-2 ${viewMode === "grid" ? "bg-gray-100" : "bg-white"}`}><FiGrid className="text-gray-500" /></button>
              <button onClick={() => setViewMode("list")} className={`p-2 border-l border-gray-200 ${viewMode === "list" ? "bg-gray-100" : "bg-white"}`}><FiList className="text-gray-500" /></button>
            </div>
            <span className="text-sm text-gray-500 flex-1">{filtered.length} results</span>
            <span className="text-sm text-gray-500">Sort by:</span>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm bg-white">
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>
 
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-60 text-gray-400">
              <FiSearch className="text-5xl mb-4" />
              <p className="text-lg">No products found</p>
              <button onClick={clearFilters} className="mt-3 text-[var(--primaryColor)] underline text-sm">Clear filters</button>
            </div>
          ) : (
            <div className={viewMode === "grid" ? "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5" : "flex flex-col gap-4"}>
              {filtered.map((product) => (
                <Product key={product.id} id={product.id} name={product.name} price={product.price}
                  reviews={product.reviews} image={product.image} rating={product.rating} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}