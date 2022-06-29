import React, { useState } from "react";

import Header from "./Header";
import CalcDisplay from "./CalcDisplay";
import ButtonWrapper from "./ButtonWrapper";

import "../styles/CalcWrapper.css";

const CalcWrapper = () => {
  const [keyPress, setKeyPress] = useState({
    num: 0,
    result: 0,
    operator: "",
    decimal: false,
  });

  //handler when pressing a number key
  const numberPressedHandler = (event) => {
    event.preventDefault();
    const value = event.target.innerHTML;

    if (keyPress.num < 10 ** 10) {
      setKeyPress({
        ...keyPress,
        num:
          keyPress.num === 0 && value === "0"
            ? "0"
            : !keyPress.decimal
            ? keyPress.num * 10 + Number(value)
            : Number(keyPress.num + value),
      });
    }
  };

  //handler when pressing the decimal key
  const decimalPressedHandler = (event) => {
    event.preventDefault();
    const value = event.target.innerHTML;

    setKeyPress({
      ...keyPress,
      num: !keyPress.num.toString().includes(".")
        ? keyPress.num + value
        : keyPress.num,
      decimal: true,
    });
  };

  //handler when pressing the backspace key
  const backspacePressedHandler = (event) => {
    event.preventDefault();

    setKeyPress({
      ...keyPress,
      num: !keyPress.decimal
        ? Math.floor(keyPress.num / 10)
        : Number(keyPress.num.toString().slice(0, -1)),
      decimal: keyPress.num.toString().includes(".") ? true : false,
    });
  };

  //handler when pressing the "C" key
  const deletePressedHandler = (event) => {
    event.preventDefault();

    setKeyPress({
      num: 0,
      result: 0,
      operator: "",
      decimal: false,
    });
  };

  //handling when attempting to calculate
  const operatorPressedHandler = (event) => {
    event.preventDefault();
    const value = event.target.innerHTML;

    setKeyPress({
      ...keyPress,
      operator: value,
      num: 0,
      result: keyPress.num ? keyPress.num : keyPress.result,
    });
  };

  //handling invertion
  const invertPressedHandler = (event) => {
    event.preventDefault();

    setKeyPress({
      ...keyPress,
      num: -keyPress.num,
    });
  };

  //handling when pressing %
  //   const percPressedHandler = (event) => {
  //     event.preventDefault();

  //     setKeyPress({
  //       ...keyPress,
  //       num: 0,
  //       result: keyPress.num / 100,
  //     });
  //   };

  //handling when pressing the equal key
  const equalPressedHandler = (event) => {
    event.preventDefault();

    if (keyPress.operator !== "") {
      const calculate = (result, num, operator) => {
        if (operator === "+") return result + num;
        else if (operator === "-") return result - num;
        else if (operator === "×") return result * num;
        else if (operator === "÷") return result / num;
        else return result ** num;
      };

      setKeyPress({
        ...keyPress,
        result: calculate(keyPress.result, keyPress.num, keyPress.operator),
        num: 0,
        operator: "",
      });
    }
  };

  return (
    <div className="calcWrapper">
      <Header></Header>
      <CalcDisplay
        value={
          keyPress.num === 0 && keyPress.result !== 0
            ? keyPress.result
            : keyPress.num
        }
      ></CalcDisplay>
      <ButtonWrapper
        handlers={{
          numberPressedHandler,
          decimalPressedHandler,
          backspacePressedHandler,
          deletePressedHandler,
          invertPressedHandler,
          operatorPressedHandler,
          equalPressedHandler,
        }}
      ></ButtonWrapper>
    </div>
  );
};

export default CalcWrapper;
