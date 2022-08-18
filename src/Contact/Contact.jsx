import "./Contact.css"
import Mee from "./../img/favour.jpg"
import { useRef } from "react"
const Contact = () =>{
  const formRef = useRef()
  const handleSubmit = (e) =>{
    e.preventDefault()
  }
    return(
        <div className="c">
          <div className="c-bg"></div>
          <div className="c-wrapper">
            <div className="c-left">
             <h1 className="c-title">Let's discuss your project</h1>
               <div className="c-info">
                 <div className="c-info-item">
                    <img src={Mee} alt="" className="c-icon" />
                    +234 8139166306
                 </div>

                 <div className="c-info-item">
                    <img src={Mee} alt="" className="c-icon" />
                    contact favouronyeaghala@gmail.com
                 </div>

                 <div className="c-info-item">
                    <img src={Mee} alt="" className="c-icon" />
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, omnis!
                 </div>
               </div>   
            </div>
            <div className="c-right">
              <p className="c-desc">
                <b>What's your story?</b>Get in touch with me.
              </p>

              <form ref={formRef} onSubmit={handleSubmit}>
                 <input type="text" placeholder="Name" name="user_name"></input>
                  <input type="text" placeholder="Subject" name="user_subject"></input>
                  <input type="text" placeholder="Email" name="user_email"></input>
                  <textarea name="message" id="" cols="30" rows="5" placeholder="Message"></textarea>
                  <button>Submit</button>
              </form>
             
            </div>
          </div>
        </div>
    )
}

export default Contact