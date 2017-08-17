import React, { Component } from 'react';
import "../stylesheet/submitInput.css";

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
      <ul className = "formstyle">
        <li>  <input type="text" placeholder="What's the Title?" value={this.state.titleVal} onChange={this.setTitleVal} /> </li>
        <li>  <input type="text" placeholder="Who's the organizer?" value={this.state.organizerVal} onChange={this.setOrganizerVal}/> </li>
        <li>  <input type="text" placeholder="What day is the event?" value={this.state.dateVal} onChange={this.setDateVal} /> </li>
        <li>  <input type="text" placeholder="Where is the event?" value={this.state.locationVal} onChange={this.setLocationVal}/> </li>
        <li>  <input type="submit" onClick = {this.props.submitForm}   /> </li>
      </ul>
    </form>

      </section>
    );
  }

}






export default SubmitInputSection;
