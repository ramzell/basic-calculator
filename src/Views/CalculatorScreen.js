import React from "react";
import { Col, Input } from "antd";

export default function CalculatorScreen() {
  return (
    <Col style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Input
          size="large"
          style={{ width: "400px", margin: "auto" }}
          readOnly
          value="0"
          aria-label="Calculator Screen"
      />
    </Col>
  );
};