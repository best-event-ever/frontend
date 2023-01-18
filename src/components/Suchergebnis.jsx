import React from 'react';

const Suchergebnis = ({search}) => {
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
          search.map((item) => {
            return (
              
                // <div className="table-group-divider"></div>
                <tr>
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