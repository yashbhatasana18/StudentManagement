import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = ({ size = 20 }) => {
  return (
    <Spinner
      as="span"
      animation="border"
      style={{ width: size, height: size }}
      role="status"
      aria-hidden="true"
    ></Spinner>
  );
};

export default Loading;
