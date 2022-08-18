import Intro from "./components/intro/intro";
import About from "./components/about/about";
import ProductList from "./components/ProductList/ProductList";
import Contact from "./Contact/Contact";

const App = () =>{
    return(
        <div>
            <Intro/>
            <About/>
            <ProductList/>
            <Contact/>
        </div>
    )
 }

 export default App;