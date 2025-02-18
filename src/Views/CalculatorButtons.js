import React from "react";
import { Card, Col, Row, Button } from "antd";

export default function CalculatorButtons({ onButtonClick }) {
  const buttonRows = [
    ["7", "8", "9", "x"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["C", "0", "=", "÷"],
  ];

  const cardStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "100%",
  }

  const handleButtonClick = (label) => {
    onButtonClick(label);
  };

  return (
    <Card style={cardStyle}>
      {buttonRows.map((row, rowIndex) => (
        <Row key={rowIndex} gutter={[12, 12]} justify="center">
          {row.map((label, colIndex) => (
            <Col key={colIndex} span={6} style={{ padding: 8 }}>
              <Button
                size="large"
                style={{ width: '70px', height: "60px" }}
                onClick={() => handleButtonClick(label)}
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