import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import { editorStyles, globals, handleHighlight } from "../core";
import {
  useReducerEX1Snippet,
  useReducerDispatchSnippet,
  useReducerContactsReducerSnippet
} from "../snippets/use-reducer";
// TODO: import * as UseReducerSnippet

import { Header, Paragraph } from "../application/Application";

export const HowToUseReducer = props => {
  // useReducer Snippet 1
  const [useReducerCode1, updateUseReducerCode1] = useState(
    useReducerEX1Snippet
  );

  const handleUseReducerCode1 = editor => updateUseReducerCode1(editor);

  // Dispatch Snippet
  const [useReducerDispatchCode, updateUseReducerDispatchCode] = useState(
    useReducerDispatchSnippet
  );

  const handleUseReducerDispatchCode = editor =>
    updateUseReducerDispatchCode(editor);

  // Reducer Snippet
  const [useReducerReducerCode, updateUseReducerReducerCode] = useState(
    useReducerContactsReducerSnippet
  );

  const handleUseReducerReducerCode = editor =>
    updateUseReducerReducerCode(editor);

  return (
    <section>
      <Header>
        How to Use the useReducer React Hook to Share Data Between Components
      </Header>
      <Paragraph>
        React is a simple library for creating interactive front-end web apps.
        Its feature set is basic. It provides you with a component-based
        architecture for building web apps. Passing data from a parent component
        and child component is easy. You can just pass props into the child from
        the parent. Passing data from child to parent is a bit harder. The child
        component has to call a function that is part of the parent component to
        pass child component’s data back to the parent. Components in any other
        configuration like sibling or unrelated components can be done with the
        Context API. It lets you specify the provider for the data where you
        pass the data and a consumer to the data that is passed in by the
        provider.
      </Paragraph>
      <Paragraph>
        With the introduction of React hooks, there is an easier way to share
        data centrally between components situated in any configuration. We can
        use the <code>useReducer</code> hook to pass data to the reducer by
        calling the dispatch function returned from the <code>useReducer</code>{" "}
        function and the state will be updated. To use the{" "}
        <code>useReducer</code> hook, we put the following in our function
        component:
      </Paragraph>
      <pre>
        <span>
          const [contacts, dispatch] = useReducer(contactsReducer, []);
        </span>
      </pre>
      <Editor
        value={useReducerCode1}
        onValueChange={handleUseReducerCode1}
        highlight={handleHighlight}
        padding={globals.PADDING}
        style={editorStyles}
      />
      <Editor
        value={useReducerDispatchCode}
        onValueChange={handleUseReducerDispatchCode}
        highlight={handleHighlight}
        padding={globals.PADDING}
        style={editorStyles}
      />
      <Editor
        value={useReducerReducerCode}
        onValueChange={handleUseReducerReducerCode}
        highlight={handleHighlight}
        padding={globals.PADDING}
        style={editorStyles}
      />
    </section>
  );
};
