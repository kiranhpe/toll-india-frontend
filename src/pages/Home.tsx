import React from "react";
import JsonData from "./TollPlazaData.json";

export const Home = (props: any) => {

  return (
    <div className="container.is-fullhd p-4">
      {props.children}
      <input className="input is-info" type="text" placeholder="search here" />

      <table className="table is-fullwidth is-hoverable">
        <thead>
          <tr>
            <th>Type of Vehicle</th>
            <th>Single Journey</th>
            <th>Return Journey</th>
            <th>Monthly Pass</th>
            <th>Commercial Vehicle Registered within the district of plaza</th>
          </tr>
        </thead>
        <tbody>
          {JsonData.tollFees.map(el => (
            <tr>
              <td>{el.vehicleType}</td>
              <td>{el.single}</td>
              <td>{el.return}</td>
              <td>{el.monthly}</td>
              <td>{el.commercialVehiclesWithinDist}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
