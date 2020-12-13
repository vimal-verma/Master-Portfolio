import React, { Component } from "react";
import { greeting } from '../Name';
import './footer.css'

class Footer extends Component {
    render() {
      console.log("Theme by Master-Portfolio  https://github.com/vimalverma558/Master-Portfolio")
      return (
        <div className="foot">
          
 
          {/* All the links in the footer should remain intact.
          You can delete the links only if you Have permission.
          Licensing information: https://github.com/vimalverma558/Master-Portfolio/blob/master/LICENSE  
          https://github.com/vimalverma558/Master-Portfolio */}


          <p>Made with <a href="https://github.com/vimalverma558/Master-Portfolio">Master-Portfolio</a> <span role="img" aria-label="Heart"> ❤️ </span> by { greeting.full_name } </p>
          
        </div>
      );
    }
  }
  
  export default Footer;