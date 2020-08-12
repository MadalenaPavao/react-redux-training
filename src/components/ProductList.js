import React, { Fragment } from "react";
import { connect } from "react-redux";

class ProductList extends React.Component {
  render() {
    return (
      <Fragment>
        <p>Product list</p>
      </Fragment>
    );
  }
}

const mapsStateToProps = (state) => {
  return {};
};

const mapsDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapsStateToProps, mapsDispatchToProps)(ProductList);
