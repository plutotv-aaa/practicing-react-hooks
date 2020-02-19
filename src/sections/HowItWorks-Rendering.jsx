import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import { editorStyles, globals, handleHighlight } from "../shared";
import {
  RenderCodeSnippet,
  RenderNumberCodeSnippet,
  RenderCountLifeCodeSnippet
} from "../snippets/HowItWorks-Render";

import { Header, Paragraph } from "../application/Application";

export const HowItWorksRendering = props => {
  // counter
  const [renderingCode, updateRenderingCode] = useState(RenderCodeSnippet);
  const handleRenderingCode = editor => updateRenderingCode(editor);

  // js number
  const [renderNumberCode, updateRenderNumberCode] = useState(
    RenderNumberCodeSnippet
  );
  const handleRenderNumberCode = editor => updateRenderNumberCode(editor);
  // render count lifecycle example
  const [renderCountLifeCode, updateRenderCountLifeCode] = useState(
    RenderCountLifeCodeSnippet
  );
  const handleRenderCountLifeCode = editor => updateRenderCountLifeCode(editor);

  return (
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

      <Paragraph>
        What does it mean? Does count somehow “watch” changes to our state and
        update automatically? That might be a useful first intuition when you
        learn React but it’s not an{" "}
        <a href="https://overreacted.io/react-as-a-ui-runtime/">
          accurate mental model
        </a>
        .
      </Paragraph>
      <Paragraph>
        <strong>In this example, count is just a number</strong>. It’s not a
        magic “data binding”, a “watcher”, a “proxy”, or anything else. It’s a
        good old number like this one:
      </Paragraph>
      <Editor
        value={renderNumberCode}
        onValueChange={handleRenderNumberCode}
        highlight={handleHighlight}
        padding={globals.PADDING}
        style={editorStyles}
      />
      <Paragraph>
        The first time our component renders, the count variable we get from
        useState() is 0. When we call setCount(1), React calls our component
        again. This time, count will be 1. And so on:
      </Paragraph>
      <Editor
        value={renderCountLifeCode}
        onValueChange={handleRenderCountLifeCode}
        highlight={handleHighlight}
        padding={globals.PADDING}
        style={editorStyles}
      />
      <Paragraph>
        <strong>
          Whenever we update the state, React calls our component. Each render
          result “sees” its own counter state value which is a constant inside
          our function.
        </strong>
      </Paragraph>
    </section>
  );
};
