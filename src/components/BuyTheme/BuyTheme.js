import React from "react";
import "./BuyTheme.css";
function BuyTheme() {
  return (
    <div>
      <div className="band" id="band">
        <h3 className="bandhead">
          Hit the ground running with minimalist look.
          <button class="button button5">learn more</button>
        </h3>
      </div>
      <div className="band2">
        <h1 className="bandhead2">&#8721;</h1>
        <p className="bandpara2">
          handcrafted with ❤ in Chicago. Powered by StudioPress
        </p>
        <div className="bandend">
          <h3 className="foothead">FACEBOOK</h3>
          <h3 className="foothead">TWITTER</h3>
          <h3 className="foothead">INSTAGRAM</h3>
        </div>
      </div>
    </div>
  );
}

export default BuyTheme;
