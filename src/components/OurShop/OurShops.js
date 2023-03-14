import React from "react";
import "./OurShops.css";
function OurShops() {
  return (
    <>
      <div className="ourshop" id="ourshop">
        <div className="page3">
          <h1 className="page3head">We Create Stories</h1>
          <p className="page3para">
            A minimalist approach is the only way to design a website
          </p>
        </div>
        <div className="photos">
          <div className="photoblock">
            <div>
              <img
                src="https://img.freepik.com/free-photo/low-angle-shot-grey-concrete-building-representing-modern-architecture_181624-4719.jpg?w=996&t=st=1678795215~exp=1678795815~hmac=35b0584335112e01efdedafbed666e2c483b91b7b318334c9022a92c6ed8d4af"
                alt=""
                className="ourshopimg"
              />
              <h3 className="heading3">OVERCOMING CREATIVE BLOCK</h3>
            </div>
            <div>
              <img
                src="https://img.freepik.com/free-photo/greyscale-low-angle-shot-concrete-building-with-lot-windows-dark-sky_181624-14824.jpg?w=900&t=st=1678795232~exp=1678795832~hmac=09c944fff6f659110a46ed63c1d22ead172844d05fd6f46e3bce779e85c51591"
                alt=""
                className="ourshopimg"
              />
              <h3 className="heading3">WHY COMMUNICATION IS KEY</h3>
            </div>
          </div>
          <div className="photoblock">
            <div>
              <img
                src="https://img.freepik.com/free-photo/low-angle-grayscale-shot-business-building_181624-19724.jpg?w=740&t=st=1678795256~exp=1678795856~hmac=f6e008463597a08778ad14c8f2fb59d7cbc726847b82b667deabf78adf81f72a"
                alt=""
                className="ourshopimg"
              />
              <h3 className="heading3">PATH OF LEAST RESISTANCE </h3>
            </div>
            <div>
              <img
                src="https://img.freepik.com/free-photo/modern-skyscrapers-business-district_23-2148836742.jpg?w=360&t=st=1678795271~exp=1678795871~hmac=b8cb6a067042b6aa2660e6b01b321ab496dbadd2be09e74da603f8468d2ec747"
                alt=""
                className="ourshopimg"
              />
              <h3 className="heading3">HOW TO REACH NEW HEIGHTS</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurShops;
