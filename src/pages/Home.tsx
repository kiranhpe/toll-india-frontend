import React from "react";

export const Home = (props: any) => {
  return (
    <div className="container.is-fullhd p-4">
      {props.children}
      <input className="input is-info" type="text" placeholder="search here" />

      <table
        className="table is-fullwidth i"
      >
          <tr><td>jj</td></tr>
      </table>
    </div>
  );
};
