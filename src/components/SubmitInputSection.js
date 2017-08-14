import React, { Component } from 'react';



var axios = require('axios');

class SubmitInputSection extends Component {
  constructor() {
    super();
    this.state = {
      titleVal: null,
      organizerVal: null,
      dateVal: null,
      locationVal: null

    };

    this.setTitleVal = this.setTitleVal.bind(this);
    this.setOrganizerVal = this.setOrganizerVal.bind(this);
    this.setDateVal = this.setDateVal.bind(this);
    this.setLocationVal = this.setLocationVal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

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
      <section>
        <form>
          <input type="text" placeholder="What's the Title?" value={this.state.titleVal} onChange={this.setTitleVal}/>
          <input type="text" placeholder="Who's the organizer?" value={this.state.organizerVal} onChange={this.setOrganizerVal}/>
          <input type="text" placeholder="What day is the event?" value={this.state.dateVal} onChange={this.setDateVal}/>
          <input type="text" placeholder="Where is the event?" value={this.state.locationVal} onChange={this.setLocationVal}/>
          <input type="submit"/>
        </form>
      </section>
    );
  }




handleSubmit(e) {
  axios.post('ec2-18-220-143-227.us-east-2.compute.amazonaws.com/entity/node',
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
      "field_date": [
           {
              "value": "2017-08-11"
           }
      ],
     "field_location": [
          {
              "value": "Computer"
           }
     ],
     "field_organizer": [
       {
        "value": "Naomi Computer"

        }

     ]


  }), {

           headers: {
           'Content-Type': 'application/json',
           'X-CSRF-Token': '/url/session/token',
           'Data-Type': 'json',
           'Authorization': 'Basic' + btoa('username:password')
         }
       })
       .then(response =>{
           console.log(response);
           this.componentWillMount();
       })
       .catch((xhr, status, error) => {
           console.log("An error occurred: ", xhr, error);
       });

   }
 };


export default SubmitInputSection;
