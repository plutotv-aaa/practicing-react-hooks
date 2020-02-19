import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import { editorStyles, globals, handleHighlight } from "../shared";
import {
  useRefExample,
  useRefExample2,
  useRefExample3
} from "../snippets/HowToUseHook-useRef";

import { Header, Paragraph } from "../application/Application";

export const HowToUseUseRef = props => {
  // useRef Example
  const [useRefCode, updateHandleUseRefCode] = useState(useRefExample);
  const handleUseRefCode = editor => updateHandleUseRefCode(editor);

  // useRef Example2
  const [useRefCode2, updateHandleUseRefCode2] = useState(useRefExample2);
  const handleUseRefCode2 = editor => updateHandleUseRefCode2(editor);
  // useRef Example2
  const [useRefCode3, updateHandleUseRefCode3] = useState(useRefExample3);
  const handleUseRefCode3 = editor => updateHandleUseRefCode3(editor);

  return (
    <section>
      <Header>How To Use useRef Hook</Header>
      <Paragraph>
        useRef is nice as you can set references directly in your function
        components. However, this was the first time I found hooks together with
        TypeScript a bit tricky! When you are in strict mode, TypeScript might
        complain:
      </Paragraph>
      <Editor
        value={useRefCode}
        onValueChange={handleUseRefCode}
        highlight={handleHighlight}
        padding={globals.PADDING}
        style={editorStyles}
      />
      <Paragraph>
        Here’s what bugs us: usually we initialise refs with null. This is
        because we set it later in our JSX calls with the initial value of a ref
        being null, inputEl might be null. TypeScript complains that you should
        do a strict null check. That’s not the only thing. Since TypeScript
        doesn’t know which element we want to refer to, things like current and
        focus() will also probably be null. So our strict null checks are pretty
        elaborate. We can make this a ton easier for us and for TypeScript, when
        we know which type of element we want to ref. This also helps us to not
        mix up element types in the end:
      </Paragraph>
      <Editor
        value={useRefCode2}
        onValueChange={handleUseRefCode2}
        highlight={handleHighlight}
        padding={globals.PADDING}
        style={editorStyles}
      />
      <Header>useRef Hook with onClick</Header>
      <Paragraph>
        Here’s an example, where I log to the console the value of the DOM
        reference of the span element that contains the count value:
      </Paragraph>
      <Editor
        value={useRefCode3}
        onValueChange={handleUseRefCode3}
        highlight={handleHighlight}
        padding={globals.PADDING}
        style={editorStyles}
      />
    </section>
  );
};
