import React from "react";

import { HowToUseUseEffect } from "../sections/HowToUse-useEffect";
import { HowToUseUseRef } from "../sections/HowToUse-useRef";
import { HowToUseUseEventListener } from "../sections/HowToUse-useEventListener";
import "./styles.css";

export const SyntaxStyleGuide = props => {
  return (
    <article>
      <HowToUseUseEffect />
      <HowToUseUseRef />
      <HowToUseUseEventListener />
    </article>
  );
};
