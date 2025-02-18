import React, { useState, useEffect } from "react";

import CalculatorButtons from "./CalculatorButtons";
import CalculatorScreen from "./CalculatorScreen";
import { Card, Row } from "antd";

export default function Calculator() {
  const [buttonValue, setButtonValue] = useState("0");
  const [waitingForOperand, setWaitingForOperand] = useState(true);
  const [pendingOperator, setPendingOperator] = useState(null);
  const [storedValue, setStoredValue] = useState(0);

  useEffect(() => {
    if (buttonValue === "C") {
      setButtonValue("0");
    }
  }, [buttonValue]);

  const clearAll = () => {
    setButtonValue("0");
    setWaitingForOperand(true);
    setPendingOperator(null);
    setStoredValue(0);
  };

  const handleDigit = (digit) => {
    if (waitingForOperand) {
      setButtonValue(digit);
      setWaitingForOperand(false);
    } else {
      setButtonValue(buttonValue === "0" ? digit : buttonValue + digit);
    }
  };

  const handleOperator = (operator) => {
    const operand = parseFloat(buttonValue);
    if (isNaN(operand)) {
      clearAll();
      return;
    }
    
    if (pendingOperator !== null && !waitingForOperand) {
      const result = performCalculation(storedValue, operand, pendingOperator);
      if (typeof result === 'number' && !isNaN(result)) {
        setButtonValue(String(result));
        setStoredValue(result);
      } else {
        setButtonValue("Error");
        setStoredValue(NaN);
      }
    } else {
      setStoredValue(operand);
    }
    
    setPendingOperator(operator);
    setWaitingForOperand(true);
  };

  const performCalculation = (leftOperand, rightOperand, operator) => {
    if (operator === "+") {
      return leftOperand + rightOperand;
    } else if (operator === "-") {
      return leftOperand - rightOperand;
    } else if (operator === "x") {
      return leftOperand * rightOperand;
    } else if (operator === "÷") {
      return rightOperand !== 0 ? leftOperand / rightOperand : NaN;
    }
    return rightOperand;
  };

  const calculate = () => {
    const operand = parseFloat(buttonValue);
    if (isNaN(operand)) {
      clearAll();
      return;
    }
    
    if (pendingOperator !== null) {
      const result = performCalculation(storedValue, operand, pendingOperator);
      if (typeof result === 'number' && !isNaN(result)) {
        setButtonValue(String(result));
        setStoredValue(result);
      } else {
        setButtonValue("Error");
        setStoredValue(NaN);
      }
      setPendingOperator(null);
    } else {
      setStoredValue(operand);
    }
    setWaitingForOperand(true);
  };

  const handleButtonPressed = (label) => {
    if (label === "C") {
      clearAll();
      return;
    } 
    
    if (label === "=") {
      calculate();
      return;
    } 
    
    if (label === "x" || label === "-" || label === "+" || label === "÷") {
      handleOperator(label);
      return;
    }

    handleDigit(label);
  };

  return (
    <Row style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: "100vh", width: "100vw", backgroundColor: "#2a52be" }}>
      <Card style={{ paddingTop: '2vh', border: '1px solid #d9d9d9', borderRadius: '5px', width: '400px' }}>
        <CalculatorScreen value={buttonValue}/>
        <CalculatorButtons onButtonClick={handleButtonPressed}/>
      </Card>
    </Row>
  );
};