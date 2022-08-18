import "./about.css"
import Mee from "../../img/favour.jpg"

const About = () =>{
    return(
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                       <img src={Mee} alt="" className="a-img" />
                </div>
             
            </div>
            <div className="a-right">
                <h1 className="a-title">About me</h1>
                <p className="a-sub">It is long established that a reader will be distracted by the readable content</p>
                <p className="a-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repudiandae ipsa iure. Eos laboriosam culpa nostrum soluta rem reprehenderit, perferendis, ipsum maxime qui voluptatem aperiam minima, explicabo deserunt commodi sed doloremque facilis tempora. Nobis explicabo accusantium recusandae dolorum velit officiis, tenetur voluptatem. Possimus esse quaerat tenetur culpa consequatur obcaecati illum!</p>
                
                <div className="a-award">
                    <img src={Mee} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                     <h4 className="a-award-title">International Design</h4>
                     <p className="a-award-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, aut!</p>  
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About;