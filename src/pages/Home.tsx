import React, { useEffect, useState } from "react";
import axios from "axios";

//import JsonData from "./TollPlazaData.json";
import { ITollDetails } from "../models/ITollDetails";
//import { getTollIndiaAPI } from "../constants/endpoints";

export const Home = (props: any) => {

  const [tollFeeses, setTollFees] = useState<ITollDetails>({});
  
  useEffect(() => {
    axios.get("https://toll-india.herokuapp.com/api/toll/16").then((response) => {
      setTollFees(response.data as any);
    });
  }, [] )

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
          {tollFeeses.tollFees?.map(data => (
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
