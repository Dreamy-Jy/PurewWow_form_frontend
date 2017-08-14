import React, { Component } from "react";
import FormTitle from "./components/FormTitle";
import ItemList from "./components/ItemList";
import SubmitInputSection from "./components/SubmitInputSection";
import JSONViewer from "./components/JSONViewer";
import GooglePlusLogin from "./components/GooglePlusLogin"

class App extends Component {
  render() {
    return(
      <main>
        <section className="panel">
          <FormTitle text="Events"/>
          <ItemList />
        </section>
        <section className="panel">
          <FormTitle text="Create a New Event" />
          <SubmitInputSection />
        </section>
        <GooglePlusLogin />
        <JSONViewer />
      </main>
    );
  }
}
export default App;
