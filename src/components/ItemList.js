import React, { Component } from 'react';
import ListItem from './ListItem';


class ItemList extends Component{

  render() {
     console.log("rendering");




    let list= [];
    console.log(list);

    for (let i = 0; i < this.props.data.length; i++){
      list.push(
        <ListItem title={this.props.data[i].title[0].value}  date={this.props.data[i].field_date[0].value} organizer={this.props.data[i].field_organizer[0].value} location={this.props.data[i].field_location[0].value}/>
      );
    }


return(
      <article>
        <ol>
        {list}
        </ol>
      </article>
    );
  }
}


export default ItemList;
