import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      {/** Product (id, title, price, rating, image) */}
      {/** ROW ONE */}
      <div className="home_row">
        <Product
          id="1232145"
          title="The 4-Hour Workweek: Escape 9-5, Live Anywhere, and Join the Rich Paperback"
          price={16.05}
          rating={5}
          image="https://books.google.com/books/content/images/frontcover/dxumVrUrpYcC?fife=w400-h600"
        />
        <Product
          id="5699798"
          title="CalmDo Air Fryer Toaster Oven, 26.3 QT Convection Toaster Oven Airfryer with 21 Preset Cooking Functions for Bake, Pizza, Defrost, Oven Mitts & Recipes Included, Silver"
          price={199.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/7131OLb0FPL._AC_SL1500_.jpg"
        />
      </div>
      {/** ROW TWO */}
      <div className="home_row">
        <Product
          id="7914684"
          title="Oneach Modern Table Lamps Set of 2 with USB Port for Living Room Bedroom 25 Inch Night Light Lamp with Fabric Drum Shade Brown"
          price={94.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71681crRzEL._AC_SL1500_.jpg"
        />
        <Product
          id="7894652"
          title="Fire TV Stick 4K streaming device with Alexa Voice Remote | Dolby Vision | 2018 release"
          price={49.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51CgKGfMelL._AC_SL1000_.jpg"
        />
        <Product
          id="8974653"
          title="Jordan Jumpman Fleece Full-Zip Hoodie"
          price={44.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41ieqAM5wnL._AC_.jpg"
        />
      </div>
      {/** ROW THREE */}
      <div className="home_row">
        <Product
          id="9865742"
          title="Samsung 34-Inch SJ55W Ultrawide Gaming Monitor (LS34J550WQNXZA) – 75Hz Refresh, WQHD Computer Monitor, 3440 x 1440p Resolution, 4ms Response, FreeSync, Split Screen, HDMI, Black"
          price={382.49}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/91g-Y1B09EL._AC_SL1500_.jpg"
        />
      </div>

      {/** Product */}
    </div>
  );
}

export default Home;
