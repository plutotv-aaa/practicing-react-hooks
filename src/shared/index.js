import { handleHighlight } from "./prism";

const globals = {
  PADDING: 10,
  FONT_SIZE: 16,
  FONT_FAM: '"Fira code", "Fira Mono", monospace'
};

const editorStyles = {
  borderRadius: "13px",
  backgroundColor: "rgb(53, 59, 69)",
  color: "rgb(255, 255, 255)",
  tabSize: "1.5em",
  fontFamily: globals.FONT_FAM,
  fontSize: globals.FONT_SIZE
};

export { globals, editorStyles, handleHighlight };
