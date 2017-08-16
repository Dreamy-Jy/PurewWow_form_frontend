import React from 'react';
import "../stylesheet/listItem.css";

function ListItem(props) {
  return(
  <li>
    <section className="listItem">
      <div className="LIRowOne">
        <h2>{props.title}</h2>
        <p>{props.date}</p>
      </div>
      <div className="LIRowTwo">
        <p>{props.date}</p>
        <p>{props.organizer}</p>
        <p>{props.location} </p>
      </div>
    </section>
  </li>
  );
}

export default ListItem;
