import React from "react";
import Button from "./Button";

import "../styles/ButtonWrapper.css";

const ButtonWrapper = (props) => {
  const { handlers } = props;

  // prettier-ignore
  const buttonValues = [
                            "←", "C", "^", "÷",
                            "7", "8", "9", "×",
                            "4", "5", "6", "-",
                            "1", "2", "3", "+",
                            "+-", "0", ".", "="
                        ]

  const onClickHandler = (b) => {
    if (!isNaN(b)) return handlers.numberPressedHandler;
    else if (b === ".") return handlers.decimalPressedHandler;
    else if (b === "+-") return handlers.invertPressedHandler;
    else if (b === "C") return handlers.deletePressedHandler;
    else if (b === "←") return handlers.backspacePressedHandler;
    else if (b === "=") return handlers.equalPressedHandler;
    else return handlers.operatorPressedHandler;
  };

  return (
    <div className="buttonWrapper">
      {buttonValues.map((b) => {
        return (
          <Button
            key={b}
            value={b}
            className={
              b === "." || b === "+-" || !isNaN(b) ? "" : "operator-color"
            }
            onClick={onClickHandler(b)}
          ></Button>
        );
      })}
    </div>
  );
};

export default ButtonWrapper;
