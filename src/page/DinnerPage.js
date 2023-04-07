import { Link } from "react-router-dom"; 
const initData = [
 
 { category: "Dinner", id: "5", name: "Roasted Cauliflower & Snow Peas with Szechuan Sauce", price: 16, stocked: true},
 { category: "Dinner", id: "6", name: "Best Plant-Based Recipes", price: 18, stocked: true, },
 
];
const ProductsPage = () => { 
 const products = initData;
 const list = products.map((e) => ( 
 <Link key={e.id} to={e.id}>
 <li title={e.category}>{e.name}</li>
 </Link>
 ));
 return ( 
 <>
 {products.length ? (
 <ul className="list-item">{list}</ul>
 ) : (
 "No product available"
 )}
 </>
 );
};
export default ProductsPage;