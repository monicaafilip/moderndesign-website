import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import "./directory.css";
import "../../App.css";

import Navbar from "../../components/navbar/navbar";
import Product from "../../components/product/product";
import Footer from "../../components/footer/footer";

import { selectProducts } from "../../redux/directory/directory.selectors";

const Directory = ({ products }) => {
  return (
    <div className="App">
      <div className="container-fluid mainHomePage">
        <Navbar />

        {/* <section className="portfolio">
          <div className="container">
            <div className="portfolio-wrapper"> */}
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry>
            {products.map(({ id, ...otherProps }) => (
              <Product key={id} {...otherProps} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
        {/* </div>
          </div>
        </section> */}

        <Footer />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  products: selectProducts,
});

export default connect(mapStateToProps)(Directory);
