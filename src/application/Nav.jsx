import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => (
  <nav>
    <Link to="/">Render</Link>
    <Link to="/use-effect">useEffect</Link>
    <Link to="/use-ref">useRef</Link>
    <Link to="/use-event-listener">useEventListener</Link>
  </nav>
);
