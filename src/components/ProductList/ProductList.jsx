import "./ProductList.css"
import Product from "../Product/Product"

const ProductList = () =>{
    return(
      <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Create & inspire, it's Favour</h1>
                <p className="pl-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex ipsa sint maxime! Delectus voluptas, debitis ad qui fugiat explicabo similique?</p>
            </div>

            <div className="pl-list">
                <Product/>   
                <Product/> 
                <Product/> 
                <Product/> 
                <Product/>  
                <Product/>
            </div>
     </div>
    )
}

export default ProductList