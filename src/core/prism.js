import Prism from "prismjs";


Prism.hooks.add("wrap", function(env) {
  if (env.type !== "keyword") {
    return;
  }
  env.classes.push("keyword-" + env.content);
});

export const handleHighlight = code =>
  Prism.highlight(code, Prism.languages.js, "js");
