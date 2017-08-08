import React, { Component } from "react";
import FormTitle from "./components/FormTitle";
import ItemList from "./components/ItemList";
import SubmitInputSection from "./components/SubmitInputSection";

class App extends Component {
  render() {
    return(
      <div>
        <FormTitle text="Placeholder:{><*/*CHANGEME*/*><}"/>
        <ItemList />
        <SubmitInputSection />
      </div>
    );
  }
}
export default App;
