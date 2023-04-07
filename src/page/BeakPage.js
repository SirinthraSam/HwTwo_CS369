import { Link } from "react-router-dom"; 
const initData = [
 
 { category: "Breakfast", id: "1", name: "Egg and Avocado Toast", price: 10, stocked: false},
 { category: "Breakfast", id: "2", name: "Creamy Red Pepper Pasta with Burrata & Herbs", price: 12, stocked: true, },
 
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