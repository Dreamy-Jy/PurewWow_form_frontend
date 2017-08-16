import React, { Component } from "react";
import FormTitle from "./components/FormTitle";
import ItemList from "./components/ItemList";
import SubmitInputSection from "./components/SubmitInputSection";
//import JSONViewer from "./components/JSONViewer";
//import GooglePlusLogin from "./components/GooglePlusLogin";
import "./stylesheet/panel.css";
import "./stylesheet/formApp.css";
import "./stylesheet/utilityStyles.css";


var axios = require('axios');

class App extends Component {
<<<<<<< HEAD
  render() {
    return(
      <main className="formApp">
=======
      constructor(props) {
      super(props);
      this.state = {
        data: [],
        token:"",
      };

      this.submitForm = this.submitForm.bind(this);
  }


componentWillMount() {
   console.log("Mounting");
   console.log(this.state);

  let self = this;

    axios.get("http://ec2-18-220-143-227.us-east-2.compute.amazonaws.com/api/events")
       .then(function(eventData) {
        console.log("State set");
        self.setState({
           data: eventData.data
       });

        })
        .catch(function(error) {
         alert("Sorry the data was not retrieved");
         console.error(error);
         console.log(self.state);
        });


        axios.get("http://ec2-18-220-143-227.us-east-2.compute.amazonaws.com/session/token")
           .then(function(eventData) {
            console.log("State set");
            self.setState({
               token: eventData.data
           });

            })
            .catch(function(error) {
             alert("Sorry your token was not recieved");
             console.error(error);
             console.log(self.state);
            });



  }


submitForm(e){
alert("Submit click");
axios.post('http://ec2-18-220-143-227.us-east-2.compute.amazonaws.com/entity/node',
     JSON.stringify({

       "type": [
          {
              "target_id": "events"
          }
      ],
      "title": [
          {
              "value": "Event Test"
          }
      ],




  }), {

           headers: {
           'Content-Type': 'application/json',
           'X-CSRF-Token': this.state.token,
           'Data-Type': 'json',
           'Authorization': 'Basic YWRtaW46bWV0NHNNUlk1Vg=='
         }
       })
       .then(response =>{
           console.log('Post went through');
           console.log(response);
           this.componentWillMount();
       })
       .catch((xhr, status, error) => {
           console.log('Post did not go through');
           console.log("An error occurred: ", xhr, error);

       });

   }




render() {



  return(
      <main>
>>>>>>> Naomi-s-branch
        <section className="panel">
          <FormTitle text="Events"/>
          <ItemList
           data = {this.state.data}
          />

        </section>
        <section className="panel">
          <FormTitle text="Create a New Event" />
          <SubmitInputSection
           submitForm = {this.submitForm}
          />
        </section>
<<<<<<< HEAD
=======
        <GooglePlusLogin />

>>>>>>> Naomi-s-branch
      </main>
    );
  }
}
export default App;
