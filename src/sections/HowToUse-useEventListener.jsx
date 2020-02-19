import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import { editorStyles, globals, handleHighlight } from "../shared";

import { useEventListenerExample } from "../snippets/codeBlockLibrary";

import { Header, Paragraph } from "../application/Application";

export const HowToUseUseEventListener = props => {
  // useEventListener Example
  const [useEventListenerCode, updateHandleUseEventListenerCode] = useState(
    useEventListenerExample
  );
  const handleUseEventListenerCode = editor =>
    updateHandleUseEventListenerCode(editor);

  return (
    <section>
      <Header>Hook useEventListener</Header>
      <Paragraph>
        If you find yourself adding a lot of event listeners using useEffect you
        might consider moving that logic to a custom hook. In the recipe below
        we create a useEventListener hook that handles checking if
        addEventListener is supported, adding the event listener, and removal on
        cleanup. See it in action in the CodeSandbox demo.
      </Paragraph>
      <Editor
        value={useEventListenerCode}
        onValueChange={handleUseEventListenerCode}
        highlight={handleHighlight}
        padding={globals.PADDING}
        style={editorStyles}
      />
    </section>
  );
};
