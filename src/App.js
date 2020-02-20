import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

import { connect } from "react-redux";

import { addItem, removeItem } from "./actions/index";

const App = (props) => {
  console.log(props);

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeItem={props.removeItem} />
      </div>
      <div className="box">
        <AdditionalFeatures
          additionalFeatures={props.additionalFeatures}
          addItem={props.addItem}
        />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  };
}

export default connect(mapStateToProps, { addItem, removeItem })(App);
