import React from "react"

import "./footer.css"
const Footercomponent=()=>{


    return(
      
        <footer>
  <div className="row">
    <div className="col">
      {/* <img src="" className="logo" /> */}
      <p>
        You can never take too much care over the choice of your shoes. Too many
        women think that they are unimportant, but the real proof of an elegant
        woman is what is on her feet.
      </p>
    </div>
    <div className="col">
      <h3>
        Office{" "}
        <div className="underline">
          <span />
        </div>
      </h3>
      <p>Chennai Road</p>
      <p>Chittoor , Tirupathi</p>
      <p>Andhra Pradesh , 517002 , India</p>
      <p className="email-id">ClestoriaFlamigoSpiritThoughts@outlook.com</p>
      <h4>+91 - 0123456789</h4>
    </div>
    <div className="col">
      <h3>
        Links
        <div className="underline">
          <span />
        </div>
      </h3>
      <ul>
        <li>
          <a >Home</a>
        </li>
        <li>
          <a >Services</a>
        </li>
        <li>
          <a>About us</a>
        </li>
        <li>
          <a >Features</a>
        </li>
        <li>
          <a >Contacts</a>
        </li>
      </ul>
    </div>
    <div className="col">
      <h3>
        Newsletter{" "}
        <div className="underline">
          <span />
        </div>
      </h3>
      <form>
        <i className="far fa-envelope" />
        <input type="email" placeholder="Enter Your Mail" required="" />
        <button type="submit">
          <i className="fas fa-arrow-right" />
        </button>
      </form>
      <div className="social-icons">
        <i className="fab fa-facebook" />
        <i className="fab fa-whatsapp" />
        <i className="fab fa-twitter" />
        <i className="fab fa-pinterest" />
      </div>
    </div>
  </div>
  <hr />
  <p className="copyrights"> Mr. Bakthula Ganapathi - All Rights Reserved @2024</p>
</footer>

    )


}

export default Footercomponent;