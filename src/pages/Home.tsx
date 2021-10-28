import React, { useEffect, useState } from "react";
import axios from "axios";

//import JsonData from "./TollPlazaData.json";
import { ITollDetails } from "../models/ITollDetails";
import {
  getTollIndiaAllAPI,
  getTollIndiaNameAPI,
} from "../constants/endpoints";
import { Console } from "console";

export const Home = (props: any) => {
  const [tollFeeses, setTollFeeses] = useState<ITollDetails[]>([]);
  const [tollFee, setTollFee] = useState<ITollDetails>({});
  const [searchTollId, setSearchTollId] = useState("");

  const handleTollIdChange = (event: any) => {
    setSearchTollId(event.target.value);
  };

  const handleSearch = (event: any) => {
    event.preventDefault();
    axios.get(`${getTollIndiaNameAPI() + searchTollId}`).then((response) => {
      console.log(response);
      const data = response.data as any;
      setTollFeeses(data);
      setTollFee({});
      if (data.length < 1) {
        whenNoDataFound(searchTollId);
      }
    });
  };

  function whenNoDataFound(searchTollId: String) {
    alert("No data found for the name " + searchTollId + " provided.");
  }

  const handleClear = () => {
    setSearchTollId("");
  };

  useEffect(() => {
    axios.get(getTollIndiaAllAPI() + "16").then((response) => {
      console.log(response);
      setTollFee(response.data as any);
      setTollFeeses([]);
    });
  }, []);

  function createTableDataDynamically(tollFeeData: ITollDetails) {
    return (
      <div className="test">
        <span className="tag is-primary is-medium">
          {tollFeeData.tollName} - {tollFeeData.tollId}
        </span>

        <table className="table is-fullwidth is-hoverable">
          <thead>
            <tr>
              <th>Type of Vehicle</th>
              <th>Single Journey</th>
              <th>Return Journey</th>
              <th>Monthly Pass</th>
              <th>
                Commercial Vehicle Registered within the district of plaza
              </th>
            </tr>
          </thead>
          <tbody>
            {tollFeeData.tollFees?.map((data) => (
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
  }

  return (
    <div className="container.is-fullhd p-4">
      {props.children}
      <input
        className="input is-info"
        type="text"
        placeholder="Enter Toll Name"
        value={searchTollId}
        onChange={handleTollIdChange}
      />

      <div className="field is-grouped">
        <p className="control">
          <button className="button is-success" onClick={handleSearch}>
            Search
          </button>
        </p>
        <p className="control">
          <button className="button is-danger" onClick={handleClear}>
            Clear Search
          </button>
        </p>
      </div>

      {tollFeeses.length > 0
        ? tollFeeses.map((tollFeeData) =>
            createTableDataDynamically(tollFeeData)
          )
        : tollFee.tollId
        ? createTableDataDynamically(tollFee)
        : null}
    </div>
  );
};
