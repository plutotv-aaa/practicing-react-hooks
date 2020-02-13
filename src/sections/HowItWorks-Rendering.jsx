import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import { editorStyles, globals, handleHighlight } from "../shared";
import { RenderCodeSnippet } from "../snippets/HowItWorks-Render";

import { Header, Paragraph } from "../application/Application";

export const HowItWorksRendering = props => {
  // useRef Example
  const [renderingCode, updateRenderingCode] = useState(RenderCodeSnippet);
  const handleRenderingCode = editor => updateRenderingCode(editor);

  return (
    <article>
      <section>
        <Header>Each Render Has Its Own Props and State</Header>
        <Paragraph>
          Here’s a counter. Look at the highlighted line closely:
        </Paragraph>
        <Editor
          value={renderingCode}
          onValueChange={handleRenderingCode}
          highlight={handleHighlight}
          padding={globals.PADDING}
          style={editorStyles}
        />
      </section>
    </article>
  );
};
