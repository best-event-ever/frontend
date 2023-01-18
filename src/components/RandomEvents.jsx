import React, {useState, useEffect} from "react";

export const RandomEvents = () => {
  
    const [random, setRandom] = useState([]);
    useEffect(() => {
      getRandom();
    }, []);

const getRandom = async () => {
  const api = await fetch("http://localhost:4011/events/");
  const data = await api.json();
  setRandom(data)
}

  


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
        {random.map((item) => {
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
  );
};
