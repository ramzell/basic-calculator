import React from "react";
import { Card, Col, Row, Button } from "antd";

export default function CalculatorButtons() {
  const buttonRows = [
    ["7", "8", "9", "x"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["C", "0", "=", "/"],
  ];

  const cardStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    maxWidth: 400,
    padding: "20px",
  };

return (
  <Card style={cardStyle}>
      {buttonRows.map((row, rowIndex) => (
        <Row key={rowIndex} gutter={[16, 16]} justify="center">
          {row.map((label, colIndex) => (
            <Col key={colIndex} span={6}>
              <Button
                type="primary"
                shape="circle"
                size="large"
                style={{ width: "60px", height: "60px" }}
                aria-label={`Button ${label}`}
              >
                <h1 style={{ margin: 0 }}>{label}</h1>
              </Button>
            </Col>
          ))}
        </Row>
      ))}
    </Card>
);
}