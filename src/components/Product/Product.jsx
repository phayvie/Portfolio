import "./Product.css"
import Mee from "../../img/favour.jpg"

const Product = () =>{
return(
    <div className="p">
        <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
        </div>

        <a href="#" target="_blank" rel="noreferrer">
            <img src={Mee} alt="" className="p-image" />
        </a>
    </div>
)

}

export default Product