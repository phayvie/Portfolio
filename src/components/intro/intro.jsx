import "./intro.css"
import Me from "../../img/favour2.png"

const Intro = () =>{
    return(
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                 <h2 className="i-intro">Hello, my name is</h2>
                 <h1 className="i-name">Favour Onyeaghala</h1> 
                  <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Frontend Web Developer</div>
                            <div className="i-title-item">Graphic Designer</div>
                            <div className="i-title-item">Content Creator</div>
                        </div>
                 </div>

                 <p className="i-desc">I design and develop services for customer of all sizes, specializing in creating stylish modern website, web services and online web store stores.</p>
                </div>
            </div>
           <div className="i-right">
              <div className="i-bg"></div>
              <img src={Me} alt="" className="i-img" />
           </div>
        </div>
    )
}

export default Intro;