import React from "react";
import "./Feature.css";
const feature = () => {
  return (
    <div className="feature" id="feature">
      <div className="page2">
        <h1 className="page2head">We Build Experience.</h1>
        <p className="page2para">
          A minimalist approach is the only way to design a website
        </p>
      </div>
      <section class="card-container">
        <div class="card">
          <i class="fas fa-paint-brush"></i>
          <h1>DESIGN </h1>
          <p>
            With an emphasis on typography, white space, and mobile-optimized
            design, your website will look absolutely breathtaking..
          </p>
          <a href="#" class="btn btn1">
            Hover me
          </a>
        </div>

        <div class="card">
          <i class="fas fa-desktop"></i>
          <h1>CONTENT</h1>
          <p>
            Our team will teach you the art of writing audience-focused content
            that will help you achieve the success you truly deserve.
          </p>
          <a href="#" class="btn btn1">
            Hover me
          </a>
        </div>

        <div class="card">
          <i class="fas fa-handshake"></i>
          <h1>STRATEGY</h1>
          <p>
            We help creative entrepreneurs build their digital business by
            focusing on three key elements of a successful online platform.
          </p>
          <a href="#" class="btn btn1">
            Hover me
          </a>
        </div>
      </section>
    </div>
  );
};

export default feature;
