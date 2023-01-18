import React from 'react';
// import { getSearchParamsForLocation } from 'react-router-dom/dist/dom.js';

const Suchergebnis = ({search, uebergabe}) => {
  console.log('inputvariable',uebergabe);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Event</th>
            <th scope="col">Location</th>
            <th scope="col">City</th>
            <th>Date / Time CET</th>
            <th scope="col">Eintrittspreis in €</th>
          </tr>
        </thead>
        <tbody>
        {search.length > 0 &&
          search
          .filter((city) => city.eventCity === uebergabe)
          .map((item) => {
            return (
              
                // <div className="table-group-divider"></div>
                <tr key={item._id}>
                  {/* <th scope="row">
                    <a href={`/event-details`}>Event 1</a>
                  </th> */}
                  <td>{item.eventTitle}</td>
                  <td>{item.eventPlace}</td>
                  <td>{item.eventCity}</td>
                  <td>{item.eventDate}</td>
                  <td>{item.eventPrice}</td>
                </tr>
              
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Suchergebnis;