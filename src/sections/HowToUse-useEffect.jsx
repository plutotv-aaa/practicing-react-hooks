import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import { editorStyles, globals, handleHighlight } from "../core";

import {
  useEffectExample,
  useEffectFnDeps
} from "../snippets/use-effect";
import { renderScopeCode } from "../snippets/render-scope";

import {
  Header,
  List,
  Paragraph,
  QuestionHeader,
  QuestionEmoji
} from "../application/Application";

export const HowToUseUseEffect = props => {
  // useEffect Example
  const [useEffectCode, updateHandleUseEffectCode] = useState(useEffectExample);
  const handleUseEffectCode = editor => updateHandleUseEffectCode(editor);

  // useEffectFnDeps Example
  const [useEffectFnDepsCode, updateEffectFnDepsCode] = useState(
    useEffectFnDeps
  );
  const handleEffectFnDepsCode = editor => updateEffectFnDepsCode(editor);

  return (
    <section>
      <Header>
        How do we use useEffect <QuestionEmoji />
      </Header>
      <strong>Facts of useEffect</strong>
      <List>
        <li>
          Functions can “see” values from props and state — so they participate
          in the data flow.
        </li>
        <li>
          Effects run after every render — and setting the state will trigger
          the effects again.
        </li>
        <li>
          Effects always “see” props and state from the render they were defined
          in.
        </li>
      </List>
      <QuestionHeader>
        <QuestionEmoji />
        Why do I have stale state or prop value inside my effect?
      </QuestionHeader>
      <Paragraph>
        Effects always “see” props and state from the render they were defined
        in. That{" "}
        <a href="https://overreacted.io/how-are-function-components-different-from-classes/">
          helps prevent bugs
        </a>{" "}
        but in some cases can be annoying. For those cases, you can explicitly
        maintain some value in a mutable ref (the linked article explains it at
        the end). If you think you’re seeing some props or state from an old
        render but don’t expect it, you probably missed some dependencies. Try
        using the lint rule to train yourself to see them. A few days, and it’ll
        be like a second nature to you. See also{" "}
        <a href="https://reactjs.org/docs/hooks-faq.html#why-am-i-seeing-stale-props-or-state-inside-my-function">
          this answer
        </a>
        .
      </Paragraph>
      <QuestionHeader>
        <QuestionEmoji />
        How to use functions as effect dependencies?
      </QuestionHeader>
      <List>
        <li>
          Hoist functions that don’t need props or state outside of your
          component, and pull the ones that are used only by an effect inside of
          that effect.
        </li>
        <li>
          If your effect uses functions in the render scope (including function
          from props), wrap them into useCallback where they’re defined, and
          repeat the process.
        </li>
      </List>
      <Editor
        value={useEffectFnDepsCode}
        onValueChange={handleEffectFnDepsCode}
        highlight={handleHighlight}
        padding={globals.PADDING}
        style={editorStyles}
      />
      <QuestionHeader>
        <QuestionEmoji />
        What is the render scope?
      </QuestionHeader>
      <Editor
        value={renderScopeCode}
        onValueChange={handleUseEffectCode}
        highlight={handleHighlight}
        padding={globals.PADDING}
        style={editorStyles}
      />
      <QuestionHeader>
        <QuestionEmoji />
        What is []?
      </QuestionHeader>
      <Paragraph>
        {" "}
        [] means the effect doesn’t use any value that participates in React
        data flow, and is for that reason safe to apply once. It is also a
        common source of bugs when the value actually is used. You’ll need to
        learn a few strategies (primarily useReducer and useCallback) that can
        remove the need for a dependency instead of incorrectly omitting it.
      </Paragraph>
      <QuestionHeader>
        <QuestionEmoji />
        How do I correctly fetch data inside useEffect? What is []?
      </QuestionHeader>
      <Paragraph>
        Keep in mind that the mental model for effects is different from
        componentDidMount and other lifecycles, and trying to find their exact
        equivalents may confuse you more than help. We need to “think in
        effects”, and their mental model is closer to implementing
        synchronization than to responding to lifecycle events.
      </Paragraph>
      <Paragraph>
        You don’t need to provide any extra typings. TypeScript will check that
        the method signature of the function you provide is correct. This
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
      <QuestionHeader>
        <QuestionEmoji />
        How did I create an infinite refetching loop?
      </QuestionHeader>
      <List>
        <li>
          If we’re data fetching in an effect without the second dependencies
          argument. Without it, effects run after every render — and setting the
          state will trigger the effects again.
        </li>
        <li>
          An infinite loop may also happen if you specify a value that always
          changes in the dependency array.
        </li>
      </List>
      <Paragraph>
        You can tell which one by removing them one by one. However, removing a
        dependency you use (or blindly specifying []) is usually the wrong fix.
        Instead, fix the problem at its source. For example, functions can cause
        this problem, and putting them inside effects, hoisting them out, or
        wrapping them with useCallback helps. To avoid recreating objects,
        useMemo can serve a similar purpose.
      </Paragraph>
    </section>
  );
};
