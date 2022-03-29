import React, { Fragment } from "react";
import spinner from "./spinning.gif";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Fragment>
    <img
      src={spinner}
      style={{ width: "200px", margin: "auto", display: "block" }}
      alt="Loading..."
    />
  </Fragment>
);
