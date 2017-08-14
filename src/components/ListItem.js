import React from 'react';

function ListItem(props) {
  return(
  <li>
    <section>
      <h2>{props.title}</h2>
      <div>
        <p>{props.date}</p>
        <p>{props.organizer}</p>
        <p>{props.location} </p>
      </div>
    </section>
  </li>
  );
}

export default ListItem;
