import { handleHighlight } from "./prism";

const globals = {
  PADDING: 20,
  FONT_SIZE: 14,
  FONT_FAM: '"Fira code", "Fira Mono", monospace'
};

const editorStyles = {
  borderRadius: "9px",
  backgroundColor: "rgb(53, 59, 69)",
  color: "rgb(255, 255, 255)",
  fontFamily: globals.FONT_FAM,
  fontSize: globals.FONT_SIZE
};

export { globals, editorStyles, handleHighlight };
