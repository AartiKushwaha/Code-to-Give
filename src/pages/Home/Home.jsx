import React from "react";
import "./home.css";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <>
        <Navigation />
      <div className="row mt-4">
        <div className="col-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            pulvinar eros. Nunc ut nulla placerat, varius dui ac, egestas leo.
            Phasellus laoreet leo commodo interdum ullamcorper. Suspendisse
            convallis ultrices sapien nec elementum. Donec lobortis fringilla
            mauris, id molestie quam dictum vel. Vivamus lorem augue, elementum
            eget commodo sit amet, lobortis a ipsum. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Morbi eleifend pellentesque nibh
            ultricies varius. Phasellus consequat suscipit vulputate. Aenean
            elementum tellus sed nulla pharetra, at placerat dui efficitur.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Ut ornare molestie elit vel molestie. Ut
            efficitur lectus tellus. Cras dictum metus eros, in congue enim
            pellentesque luctus. Vivamus mi ipsum, ultrices vel turpis id,
            gravida convallis nulla. Nulla interdum bibendum orci, sit amet
            facilisis lacus feugiat nec.
          </p>
        </div>
        <div className="col-4">
          <img
            className="aboutUs-img"
            src="https://images.freeimages.com/images/small-previews/155/bridge-1559052.jpg"
            alt="img"
          />
        </div>
      </div>
      <Footer />
    </>
    );
}