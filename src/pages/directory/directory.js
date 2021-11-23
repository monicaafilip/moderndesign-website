import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import "./directory.css";
import "../../App.css";

import MyNavbar from "../../components/mynavbar/mynavbar";
import Product from "../../components/product/product";
import Footer from "../../components/footer/footer";

import { selectProducts } from "../../redux/directory/directory.selectors";

const Directory = ({ products }) => {
  if (products)
    return (
      <div className="App">
        <div className="container-fluid mainHomePage">
          <MyNavbar />
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry>
              {products.map(({ id, ...otherProps }) => (
                <Product key={id} {...otherProps} />
              ))}
            </Masonry>
          </ResponsiveMasonry>
          <Footer />
        </div>
      </div>
    );
  else return <div>UNDEFINED</div>;
};

const mapStateToProps = createStructuredSelector({
  products: selectProducts,
});

export default connect(mapStateToProps)(Directory);
