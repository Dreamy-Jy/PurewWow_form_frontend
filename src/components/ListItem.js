import React from 'react';

function ListItem(props) {
  return(
    <section>
      <h2>{props.title}</h2>
      <div>
        <p>{props.date}</p>
        <p>{props.organizer}</p>
        <p>{props.location} </p>
      </div>
    </section>
  );
}

export default ListItem;
