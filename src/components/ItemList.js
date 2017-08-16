import React, { Component } from 'react';
import axios from "axios";
import ListItem from './ListItem';
import "../stylesheet/itemList.css";

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
        <ListItem title={this.state.data[i].title[0].value}  date={this.state.data[i].field_date[0].value} organizer={this.state.data[i].field_organizer[0].value} location={this.state.data[i].field_location[0].value}/>
      );
    }

    return(
      <article className="itemList">
        <ol>
        {list}
        </ol>
      </article>
    );
  }
}

export default ItemList;
