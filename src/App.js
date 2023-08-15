import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";
import { useState } from "react";

const btnValues = [
  ["AC", "+/-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const getClassForButton = (btn) => {
  const classNames = {
    "AC": "clear",
    "+/-": "sign",
    "%": "percentage",
    "/": "operator",
    "x": "operator",
    "-": "operator",
    "+": "operator",
    ".": "decimal",
    "=": "equals",
    0: "zero",
    1: "number",
    2: "number",
    3: "number",
    4: "number",
    5: "number",
    6: "number",
    7: "number",
    8: "number",
    9: "number",
  };

  return classNames[btn];
};

const App = () => {
  const [currentValue, setCurrentValue] = useState("0");
  
  const handleButtonClick = (value) => {
    if (value === "AC") {
      setCurrentValue("0");
    } else if (value === "=") {
      try {
        setCurrentValue(eval(currentValue).toString());
      } catch (error) {
        setCurrentValue("Error");
      }
    } else if (value === "+/-") {
      setCurrentValue((prevValue) => (parseFloat(prevValue) * -1).toString());
    } else if (value === "%") {
      setCurrentValue((prevValue) => (parseFloat(prevValue) / 100).toString());
    } 
    else if (value === "x") { 
      setCurrentValue((prevValue) => (parseFloat(prevValue) * parseFloat(currentValue)).toString());
    }
     else {
      setCurrentValue((prevValue) =>
        prevValue === "0" ? value.toString() : prevValue + value.toString()
      );
    }
  };


  return (
    <Wrapper>
      <Screen value={currentValue} />
      <ButtonBox>
        {btnValues.flat().map((btn, i) => (
          <Button
            key={i}
            className={`btn ${getClassForButton(btn)}`} 
            value={btn}
            onClick={() => handleButtonClick(btn)}
          />
        ))}
      </ButtonBox>
    </Wrapper>
  );
};

export default App;