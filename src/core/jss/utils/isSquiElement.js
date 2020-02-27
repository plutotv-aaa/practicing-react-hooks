import * as React from "react";

export default function isSquiElement(element, squiNames) {
  return (
    React.isValidElement(element) &&
    squiNames.indexOf(element.type.squiName) !== -1
  );
}
