import React from "react";
import axios from "axios";

//import JsonData from "./TollPlazaData.json";
import {getTollIndiaAPI} from "../constants/endpoints";

export const Home = (props: any) => {

  var tollJsonData = axios.get(getTollIndiaAPI()).then((response) => {
    response.data;
  });

  return (
    <div className="container.is-fullhd p-4">
      {props.children}
      <input className="input is-info" type="text" placeholder="search toll name" />

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
          {tollJsonData.tollFees.map(data => (
            <tr>
              <td>{data.vehicleType}</td>
              <td>{data.single}</td>
              <td>{data.return}</td>
              <td>{data.monthly}</td>
              <td>{data.commercialVehiclesWithinDist}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
