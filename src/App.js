import React, { Component } from "react";
import FormTitle from "./components/FormTitle";
import ItemList from "./components/ItemList";
import SubmitInputSection from "./components/SubmitInputSection";
import GooglePlusLogin from "./components/GooglePlusLogin"
import "./stylesheet/panel.css";
import "./stylesheet/formApp.css";
import "./stylesheet/utilityStyles.css";


var axios = require('axios');

class App extends Component {
      constructor(props) {
      super(props);
      this.state = {
        data: [],
        token:"",
        titleVal: "",
        organizerVal: "",
        dateVal: "",
        locationVal: ""
      };

      this.submitForm = this.submitForm.bind(this);
      this.setTitleVal = this.setTitleVal.bind(this);
      this.setOrganizerVal = this.setOrganizerVal.bind(this);
      this.setDateVal = this.setDateVal.bind(this);
      this.setLocationVal = this.setLocationVal.bind(this);

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
      });
}


submitForm(e){
    let token = this.state.token;

    axios.post('http://ec2-18-220-143-227.us-east-2.compute.amazonaws.com/entity/node',
      JSON.stringify({
        "type": [
            {
                "target_id": "asaweq"
            }
        ],
        "title": [
            {
                "value": this.state.titleVal
            }
        ],
        "field_date": [
            {
                "value": this.state.dateVal
            }
        ],
        "field_location": [
            {
                "value": this.state.locationVal
            }
        ],
        "field_organizer": [
            {
                "value": this.state.organizerVal
            }
        ]
      }), {
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': token,
        'Authorization': 'Basic ' + btoa('admin:met4sMRY5V')
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

setTitleVal(event) {
  this.setState({
    titleVal: event.target.value
  });
}

setOrganizerVal(event) {
  this.setState({
    organizerVal: event.target.value
  });
}

setDateVal(event) {
  this.setState({
    dateVal: event.target.value
  });
}

setLocationVal(event) {
  this.setState({
    locationVal: event.target.value
  });
}


render() {
  return(
      <main className= "formApp">
        <section className="panel">
          <FormTitle text="Events"/>
          <ItemList
           data = {this.state.data}
          />

        </section>
        <section className="panel">
          <FormTitle text="Create an Event" />
          <SubmitInputSection
           submitForm = {this.submitForm}
           setTitleVal ={this.setTitleVal}
           setOrganizerVal = {this.setOrganizerVal}
           setDateVal = {this.setDateVal}
           setLocationVal = {this.setLocationVal}
          />
        </section>
        <GooglePlusLogin />

      </main>
    );
  }
}
export default App;
