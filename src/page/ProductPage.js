import { Link } from "react-router-dom"; 
const initData = [
 
 { category: "Lunch", id: "3", name: "Vegan chickpea curry jacket potatoes", price: 15, stocked: true},
 { category: "Lunch", id: "4", name: "Salmon salad with sesame dressing", price: 20, stocked: true, },
 
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