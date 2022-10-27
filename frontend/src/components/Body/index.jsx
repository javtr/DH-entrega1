import "./Body.scss";
import SearchBar from "./SearchBar/SearchBar";
import CategoryList from "./CategoryList/CategoryList";
import ProductList from "./ProductList/ProductList";
export default function Body() {
  return (
    <div className="body">
      <SearchBar />
      <CategoryList/>
      <ProductList/>
            
    </div>
  );
}
