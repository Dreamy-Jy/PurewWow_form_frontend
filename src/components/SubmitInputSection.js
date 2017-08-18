import React, { Component } from 'react';
import "../stylesheet/submitInput.css";

class SubmitInputSection extends Component {

  render() {
    return(
<section>
  <form>
      <ul className = "formstyle">
        <li>  <input type="text" placeholder="What's the Title?" onChange={this.props.setTitleVal} /> </li>
        <li>  <input type="text" placeholder="Who's the organizer?" onChange={this.props.setOrganizerVal}/> </li>
        <li>  <input type="text" placeholder="What day is the event?" onChange={this.props.setDateVal} /> </li>
        <li>  <input type="text" placeholder="Where is the event?"  onChange={this.props.setLocationVal}/> </li>
        <li>  <button type="button" onClick = {this.props.submitForm}>Submit</button>  </li>
      </ul>
    </form>

</section>
    );
  }

}






export default SubmitInputSection;
