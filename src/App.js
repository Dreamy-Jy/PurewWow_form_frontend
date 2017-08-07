import React, { Component } from 'react';
import axios from "axios";
import data from "./eventsData.json"

function FormTitle(props) {
  return(<h1>{props.text}</h1>);
}

function CreatedItems(props) {
  return(
    <section>
      <h2>{props.title}</h2>
      <div>
        <p>{props.date}</p>
        <p>{props.organizer}</p>
      </div>
    </section>
  );
}

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
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
  }


  render() {
    console.log("rendering");
    console.log(this.state);

    let list= [];

    for (let i = 0; i < this.state.data.length; i++){
      list.push(
        <CreatedItems title={this.state.data[i].title[0].value}  date={this.state.data[i].field_date[0].value} organizer={this.state.data[i].field_organizer[0].value} />
      );
    }

    return(
      <article>
        {list}
      </article>
    );
  }
}

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
}

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
