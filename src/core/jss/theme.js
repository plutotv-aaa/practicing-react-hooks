export const theme = () => {
  return {
    nav: {
      display: "flex",
      backgroundColor: "rgb(53, 59, 69)",
      overflow: "hidden",
      flexDirection: "row",
      width: "100%",
      justifyContent: "flex-start"
    },
    nav_a: {
      padding: "14px 16px",
      listStyle: "none",
      color: "#f2f2f2",
      textAlign: "center",
      textDecoration: "none",
      fontSize: "17px",
      alignItems: "center"
    },
    nav_a_hover: { backgroundColor: "#ddd", color: "black" },
    nav_a_active: { backgroundColor: "#4caf50", color: "white" },
    section: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: "48rem",
      padding: "2.625rem 1.3125rem"
    },
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      width: "100%"
    },
    container__content: {
      width: "440px",
      maxWidth: "100%",
      padding: "10px",
      textAlign: "center"
    },
    container_editor_area: {
      tabSize: "4ch",
      maxHeight: "400px",
      overflow: "auto",
      margin: "1.67em 0"
    },
    container__editor: {
      fontSize: "12px",
      fontVariantLigatures: "common-ligatures",
      backgroundColor: "#fafafa",
      borderRadius: "3px"
    },
    container__editor_textarea: { outline: "0" },
    token_keyword: { color: "rgb(197, 165, 197)" },
    token_keyword_keyword_import: { color: "rgb(197, 165, 197)" },
    token_keyword_keyword_from: { color: "rgb(197, 165, 197)" },
    token_keyword_keyword_return: { color: "rgb(197, 165, 197)" },
    token_keyword_keyword_if: { color: "rgb(197, 165, 197)" },
    token_punctuation: { color: "rgb(136, 198, 190)" },
    token_string: { color: "rgb(141, 200, 145)" },
    token_function: { color: "rgb(121, 182, 242)" },
    token_comment: { color: "rgb(178, 178, 178)" },
    token_block_comment: { color: "rgb(178, 178, 178)" },
    token_prolog: { color: "rgb(178, 178, 178)" },
    token_doctype: { color: "rgb(178, 178, 178)" },
    token_cdata: { color: "rgb(178, 178, 178)" },
    token_operator: { color: "rgb(215, 222, 234)" },
    token_entity: { color: "rgb(215, 222, 234)" },
    token_url: { color: "rgb(215, 222, 234)" },
    token_variable: { color: "rgb(215, 222, 234)" },
    blockquote: {
      borderLeft: "calc(0.2vw + 2px) solid #333",
      padding: "0.1% 6% 0.1% 4%",
      margin: "1.6em 1vw",
      fontSize: "0.92em",
      lineHeight: "1.4em"
    }
  };
};
