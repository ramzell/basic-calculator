import React from "react";
import { Col, Input } from "antd";

export default function CalculatorScreen({ value="0" }) {
  return (
    <Col style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Input
          size="large"
          style={{ width: "400px", height: '80px', margin: "auto", fontSize: "40px", textAlign: "right" }}
          readOnly
          value={0 || value}
          aria-label="Calculator Screen"
      />
    </Col>
  );
};