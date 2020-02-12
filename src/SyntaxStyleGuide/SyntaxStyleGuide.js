import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import Prism from "prismjs";

import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup";

import { useEventListenerExample } from "./codeBlockLibrary";
import { useEffectExample } from "../Hooks/HowToUseHook-useEffect";
import {
  useRefExample,
  useRefExample2,
  useRefExample3
} from "../Hooks/HowToUseHook-useRef";
import "./styles.css";

const PADDING = 10;
const FONT_SIZE = 16;
const FONT_FAM = '"Fira code", "Fira Mono", monospace';

export const SyntaxStyleGuide = props => {
  // useEventListener Example
  const [useEventListenerCode, updateHandleUseEventListenerCode] = useState(
    useEventListenerExample
  );
  const handleUseEventListenerCode = editor =>
    updateHandleUseEventListenerCode(editor);

  // useEffect Example
  const [useEffectCode, updateHandleUseEffectCode] = useState(useEffectExample);
  const handleUseEffectCode = editor => updateHandleUseEffectCode(editor);

  // useRef Example
  const [useRefCode, updateHandleUseRefCode] = useState(useRefExample);
  const handleUseRefCode = editor => updateHandleUseRefCode(editor);

  // useRef Example2
  const [useRefCode2, updateHandleUseRefCode2] = useState(useRefExample2);
  const handleUseRefCode2 = editor => updateHandleUseRefCode2(editor);
  // useRef Example2
  const [useRefCode3, updateHandleUseRefCode3] = useState(useRefExample3);
  const handleUseRefCode3 = editor => updateHandleUseRefCode3(editor);

  const handleHighlight = code =>
    Prism.highlight(code, Prism.languages.js, "js");

  return (
    <article>
      {/* useEffect */}
      <section>
        <h2>Hook useEffect</h2>
        <p>
          You don’t need to provide any extra typings. TypeScript will check
          that the method signature of the function you provide is correct. This
          function also has a return value (for cleanups). And TypeScript will
          check that you provide a correct function as well:
        </p>
        <Editor
          value={useEffectCode}
          onValueChange={handleUseEffectCode}
          highlight={handleHighlight}
          padding={PADDING}
          style={{
            fontFamily: FONT_FAM,
            fontSize: FONT_SIZE
          }}
        />
      </section>
      <section>
        <h2>Hook useRef</h2>
        <p>
          useRef is nice as you can set references directly in your function
          components. However, this was the first time I found hooks together
          with TypeScript a bit tricky! When you are in strict mode, TypeScript
          might complain:
        </p>
        <Editor
          value={useRefCode}
          onValueChange={handleUseRefCode}
          highlight={handleHighlight}
          padding={PADDING}
          style={{
            fontFamily: FONT_FAM,
            fontSize: FONT_SIZE
          }}
        />
        <p>
          Here’s what bugs us: usually we initialise refs with null. This is
          because we set it later in our JSX calls with the initial value of a
          ref being null, inputEl might be null. TypeScript complains that you
          should do a strict null check. That’s not the only thing. Since
          TypeScript doesn’t know which element we want to refer to, things like
          current and focus() will also probably be null. So our strict null
          checks are pretty elaborate. We can make this a ton easier for us and
          for TypeScript, when we know which type of element we want to ref.
          This also helps us to not mix up element types in the end:
        </p>
        <Editor
          value={useRefCode2}
          onValueChange={handleUseRefCode2}
          highlight={handleHighlight}
          padding={PADDING}
          style={{
            fontFamily: FONT_FAM,
            fontSize: FONT_SIZE
          }}
        />
      </section>
      <section>
        <h2>Hook useRef 3</h2>
        <p>
          Here’s an example, where I log to the console the value of the DOM
          reference of the span element that contains the count value:
        </p>
        <Editor
          value={useRefCode3}
          onValueChange={handleUseRefCode3}
          highlight={handleHighlight}
          padding={PADDING}
          style={{
            fontFamily: FONT_FAM,
            fontSize: FONT_SIZE
          }}
        />
        <p></p>
      </section>
      {/* useEventListener */}
      <section>
        <h2>Hook useEventListener</h2>
        <p>
          If you find yourself adding a lot of event listeners using useEffect
          you might consider moving that logic to a custom hook. In the recipe
          below we create a useEventListener hook that handles checking if
          addEventListener is supported, adding the event listener, and removal
          on cleanup. See it in action in the CodeSandbox demo.
        </p>
        <Editor
          value={useEventListenerCode}
          onValueChange={handleUseEventListenerCode}
          highlight={handleHighlight}
          padding={PADDING}
          style={{
            fontFamily: FONT_FAM,
            fontSize: FONT_SIZE
          }}
        />
      </section>
    </article>
  );
};
