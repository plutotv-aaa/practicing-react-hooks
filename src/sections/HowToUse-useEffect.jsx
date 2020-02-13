import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import { editorStyles, globals, handleHighlight } from "../shared";

import { useEffectExample } from "../snippets/HowToUseHook-useEffect";

import { Header, Paragraph, QuestionHeader } from "../application/Application";

export const HowToUseUseEffect = props => {
  // useEffect Example
  const [useEffectCode, updateHandleUseEffectCode] = useState(useEffectExample);
  const handleUseEffectCode = editor => updateHandleUseEffectCode(editor);

  return (
    <article>
      <section>
        <Header>How do we use useEffect 🤔</Header>
        <QuestionHeader>
          Do I need to specify functions as effect dependencies or not?
        </QuestionHeader>
        <Paragraph>
          The recommendation is to hoist functions that don’t need props or
          state outside of your component, and pull the ones that are used only
          by an effect inside of that effect. If after that your effect still
          ends up using functions in the render scope (including function from
          props), wrap them into useCallback where they’re defined, and repeat
          the process. Why does it matter? Functions can “see” values from props
          and state — so they participate in the data flow. There’s a more
          detailed answer in our FAQ.
        </Paragraph>
        <QuestionHeader>
          How do I correctly fetch data inside useEffect? What is []?
        </QuestionHeader>
        <Paragraph>
          {" "}
          [] means the effect doesn’t use any value that participates in React
          data flow, and is for that reason safe to apply once. It is also a
          common source of bugs when the value actually is used. You’ll need to
          learn a few strategies (primarily useReducer and useCallback) that can
          remove the need for a dependency instead of incorrectly omitting it.
        </Paragraph>
        <Paragraph>
          Keep in mind that the mental model for effects is different from
          componentDidMount and other lifecycles, and trying to find their exact
          equivalents may confuse you more than help. To get productive, you
          need to “think in effects”, and their mental model is closer to
          implementing synchronization than to responding to lifecycle events.
        </Paragraph>
        <Paragraph>
          You don’t need to provide any extra typings. TypeScript will check
          that the method signature of the function you provide is correct. This
          function also has a return value (for cleanups). And TypeScript will
          check that you provide a correct function as well:
        </Paragraph>
        <Editor
          value={useEffectCode}
          onValueChange={handleUseEffectCode}
          highlight={handleHighlight}
          padding={globals.PADDING}
          style={editorStyles}
        />
      </section>
    </article>
  );
};
