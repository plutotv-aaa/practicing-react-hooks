import React, { useState } from "react";
import Editor from "react-simple-code-editor";

import {
  Blockquote,
  BugEmoji,
  FireEmoji,
  Header,
  Image,
  List,
  Paragraph,
  QuestionEmoji,
  QuestionHeader,
  RocketEmoji,
  WrenchEmoji
} from "../application/Application";

import { editorStyles, globals, handleHighlight } from "../core";

import {
  useRefCounterIncrementSnippet,
  useRefManageFocusSnippet,
  createRefManageFocusSnippet,
  useRefCustomComparisonBugSnippet,
  useRefCustomComparisonFixSnippet,
  useRefCustomComparisonFix2Snippet,
  useRefCustomComparisonFix3Snippet,
  useRefUsePreviousCustomHookSnippet,
  useRefTestSnippet,
  useRefKeepMutableSnippet
  // useRefExample,
  // useRefExample2,
  // useRefExample3
} from "../snippets/HowToUseHook-useRef";

import DifferencesGif from "../assets/differences.gif";

export const HowToUseUseRef = props => {
  // createRef to manage input focus
  const [
    useRefCounterIncrementCode,
    updateUseRefCounterIncrementCode
  ] = useState(useRefCounterIncrementSnippet);
  const handleUseRefCounterIncrementCode = editor =>
    updateUseRefCounterIncrementCode(editor);
  // createRef to manage input focus
  const [
    createRefManagingFocusCode,
    updateCreateRefManagingFocusCode
  ] = useState(createRefManageFocusSnippet);
  const handleCreateRefManagingFocusCode = editor =>
    updateCreateRefManagingFocusCode(editor);

  // useRef to manage input focus
  const [useRefManagingFocusCode, updateUseRefManagingFocusCode] = useState(
    useRefManageFocusSnippet
  );
  const handleUseRefManagingFocusCode = editor =>
    updateUseRefManagingFocusCode(editor);

  // useRef Test Code
  const [useRefTestCode, updateUseRefTestCode] = useState(useRefTestSnippet);
  const handleUseRefTestCode = editor => updateUseRefTestCode(editor);

  // useRef Comparison Bug Code
  const [
    useRefCustomComparisonBugCode,
    updateUseRefCustomComparisonBugCode
  ] = useState(useRefCustomComparisonBugSnippet);
  const handleUseRefCustomComparisonBugCode = editor =>
    updateUseRefCustomComparisonBugCode(editor);

  // useRef Comparison Fix Code
  const [
    useRefCustomComparisonFixCode,
    updateUseRefCustomComparisonFixCode
  ] = useState(useRefCustomComparisonFixSnippet);
  const handleUseRefCustomComparisonFixCode = editor =>
    updateUseRefCustomComparisonFixCode(editor);
  // useRef Comparison Fix Code
  const [
    useRefCustomComparisonFix2Code,
    updateUseRefCustomComparisonFix2Code
  ] = useState(useRefCustomComparisonFix2Snippet);
  const handleUseRefCustomComparisonFix2Code = editor =>
    updateUseRefCustomComparisonFix2Code(editor);

  // useRef usePrevious Custom Hook
  const [
    useRefUsePreviousCustomHookCode,
    updateUsePreviousCustomHookCode
  ] = useState(useRefUsePreviousCustomHookSnippet);
  const handleUsePreviousCustomHookCode = editor =>
    updateUsePreviousCustomHookCode(editor);

  // useRef usePrevious Custom Hook
  const [
    useRefCustomComparisonFix3Code,
    updateUseRefCustomComparisonFix3Code
  ] = useState(useRefCustomComparisonFix3Snippet);
  const handleUseRefCustomComparisonFix3Code = editor =>
    updateUseRefCustomComparisonFix3Code(editor);

  // Keeping mutable variable
  const [useRefKeepMutableCode, updateUseRefKeepMutableCode] = useState(
    useRefKeepMutableSnippet
  );
  const handleUseRefKeepMutableCode = editor =>
    updateUseRefKeepMutableCode(editor);

  // // useRef Example
  // const [useRefCode, updateHandleUseRefCode] = useState(useRefExample);
  // const handleUseRefCode = editor => updateHandleUseRefCode(editor);

  // // useRef Example2
  // const [useRefCode2, updateHandleUseRefCode2] = useState(useRefExample2);
  // const handleUseRefCode2 = editor => updateHandleUseRefCode2(editor);
  // // useRef Example2
  // const [useRefCode3, updateHandleUseRefCode3] = useState(useRefExample3);
  // const handleUseRefCode3 = editor => updateHandleUseRefCode3(editor);

  return (
    <section>
      <Header>How To Use useRef Hook</Header>
      <QuestionHeader>
        <QuestionEmoji />
        What is useRef hook?
      </QuestionHeader>
      <Blockquote>
        <strong>
          Refs provide a way to access DOM nodes or React elements created in
          the render method.
        </strong>
      </Blockquote>
      <Paragraph>
        The useRef Hook lets us create mutable variables inside functional
        components. There are three main key points that you should keep in mind
        when using the useRef Hook:
      </Paragraph>
      <List>
        <li>
          A ref created with useRef will be created only when the component has
          been mounted and preserved during the full lifecycle.
        </li>
        <li>
          Refs can be used for accessing DOM nodes or React elements, and for
          keeping mutable variables (like instance variables in class
          components).
        </li>
        <li>Updating a ref value is a side effect.</li>
        <li>
          Updating a ref is a side effect so it should be done only inside an
          useEffect (or useLayoutEffect) or inside an event handler.
        </li>
        <li>
          If you create a ref using createRef in a functional component, React
          will create a new instance of the ref on every re-render instead of
          keeping it between renders.
        </li>
        <li>Mutating the .current property won’t cause a re-render.</li>
        <li>
          Unless you’re doing lazy initialization, avoid setting refs during
          rendering — this can lead to surprising behavior. Instead, typically
          you want to modify refs in event handlers and effects.
        </li>
      </List>

      <Paragraph>
        There are two main uses of <code>useRef</code>:
      </Paragraph>
      <List>
        <li>Accessing DOM nodes or React Elements</li>
        <li>Keeping a mutable variable</li>
      </List>
      <Paragraph>
        In this example, every time the component has been re-rendered, the
        counter is incremented.
      </Paragraph>
      <Editor
        value={useRefCounterIncrementCode}
        onValueChange={handleUseRefCounterIncrementCode}
        highlight={handleHighlight}
        padding={globals.PADDING}
        style={editorStyles}
      />
      <Paragraph>
        All side effects should be done in the “Layout phase” or in the “Commit
        phase”. In terms of React Hooks, inside the useLayoutEffect or the
        useEffect.
      </Paragraph>
      <Paragraph>
        In this example, we are using the the <strong>createRef API</strong> to
        manage the focus of an input when the user clicks on the button.
      </Paragraph>
      <Editor
        value={createRefManagingFocusCode}
        onValueChange={handleCreateRefManagingFocusCode}
        highlight={handleHighlight}
        padding={globals.PADDING}
        style={editorStyles}
      />
      <Paragraph>
        We can achieve exactly the same result with <strong>useRef</strong> hook
      </Paragraph>
      <Editor
        value={useRefManagingFocusCode}
        onValueChange={handleUseRefManagingFocusCode}
        highlight={handleHighlight}
        padding={globals.PADDING}
        style={editorStyles}
      />
      <QuestionHeader>
        <QuestionEmoji />
        Wait! What's the difference?
      </QuestionHeader>
      <Image src="https://i.imgur.com/yMlp70t.jpg" width="100%" />
      <Paragraph>
        Why do we need to use useRef hook when we can use createRef API to
        manage the focus of an input? Does the React team just want to make the
        code look consistent by creating a doppelganger when they introduced
        Hooks in React 16.8?
      </Paragraph>
      <Paragraph>
        <strong>
          Well, the difference is that createRef will return a new ref on every
          render while useRef will return the same ref each time.
        </strong>
      </Paragraph>
      <Blockquote>
        useRef returns a mutable ref object whose .current property is
        initialized to the passed argument (initialValue). The returned object
        will persist for the full lifetime of the component.
      </Blockquote>
      <Paragraph>
        In the example below <strong>refFromUseRef</strong> persists its value
        even when the component re-renders while{" "}
        <strong>refFromCreateRef</strong> does not.
      </Paragraph>
      <Editor
        value={useRefTestCode}
        onValueChange={handleUseRefTestCode}
        highlight={handleHighlight}
        padding={globals.PADDING}
        style={editorStyles}
      />
      <Image src={DifferencesGif} className="counterGif" width="100%" />
      <Paragraph>
        <strong>useRef</strong> can hold a value in its <code>.current</code>{" "}
        property and it can persist after the component re-renders. Therefore,
        <strong>useRef</strong> is useful more than just managing the component
        ref
      </Paragraph>
      <Paragraph>
        Apart from ref attribute, we can use <strong>useRef</strong> hook to
        make a custom comparison instead of using the default shallow comparison
        in <strong>useEffect</strong> hook.
      </Paragraph>
      <Editor
        value={useRefCustomComparisonBugCode}
        onValueChange={handleUseRefCustomComparisonBugCode}
        highlight={handleHighlight}
        padding={globals.PADDING}
        style={editorStyles}
      />
      <Paragraph>
        Given that the user's name will never change. Our expectation is that
        the effect will output the warning text only when user has gained
        weight. However, if you test the code above, you can see that our effect
        run every time the user clicks on the button, even when the weight
        property stays the same. That is because useEffect Hook use shallow
        comparison by default while our userState is an object. <BugEmoji />
        <BugEmoji /> <BugEmoji />
        <WrenchEmoji /> To fix this bug, we need to write our own comparison
        instead of using the default one.
      </Paragraph>
      <Header>Steps for fixing comparison bugs</Header>
      <List>
        <li>Use lodash isEqual method for deep comparison</li>
        <li>Use useRef for saving the previous state</li>
        <li>Extract effects to the custom Hooks</li>
        <li>Apply usePrevious hook to code fix</li>
      </List>
      <Editor
        value={useRefCustomComparisonFixCode}
        onValueChange={handleUseRefCustomComparisonFixCode}
        highlight={handleHighlight}
        padding={globals.PADDING}
        style={editorStyles}
      />

      <Paragraph>
        We have just removed the dependency array in our effect and use the
        lodash isEqual method instead to make a deep comparison. Unfortunately,
        we run into a new issue because of the missing previousUser value. If we
        do the same thing with a class component in{" "}
        <code>ComponentDidUpdate</code> lifecycle, we can easily have the
        previous state value.
      </Paragraph>
      <Blockquote>
        <FireEmoji /> useRef comes to rescue
      </Blockquote>
      <Editor
        value={useRefCustomComparisonFix2Code}
        onValueChange={handleUseRefCustomComparisonFix2Code}
        highlight={handleHighlight}
        padding={globals.PADDING}
        style={editorStyles}
      />
      <Paragraph>
        To keep track of the previousUser value, we save it to the{" "}
        <code>.current</code> property of useRef hook because it can survive
        even when the component re-renders. To do that another effect will be
        used to update the previousUserRef.current value after every renders.
        Finally, we can extract the previousUser value from
        previousUserRef.current, then we deep compare the previous value with
        the new one to make sure our effect only run when those values are
        different
      </Paragraph>
      <Editor
        value={useRefUsePreviousCustomHookCode}
        onValueChange={handleUsePreviousCustomHookCode}
        highlight={handleHighlight}
        padding={globals.PADDING}
        style={editorStyles}
      />
      <Paragraph>Let's apply our custom usePrevious hook to the code</Paragraph>
      <Editor
        value={useRefCustomComparisonFix3Code}
        onValueChange={handleUseRefCustomComparisonFix3Code}
        highlight={handleHighlight}
        padding={globals.PADDING}
        style={editorStyles}
      />
      <Paragraph>
        You can also extract the deep comparison logic to a new custom Hook too.
        Check{" "}
        <a href="https://github.com/kentcdodds/use-deep-compare-effect">
          use-deep-compare-effect by Kent C. Dodds
        </a>
      </Paragraph>
      <Paragraph>
        <RocketEmoji /> useRef Hook is more than just to manage DOM ref and it
        is definitely not createRef doppelganger. useRef can persist a value for
        a full lifetime of the component. However, note that the component will
        not rerender when the current value of useRef changes, if you want that
        effect, use useState hook instead 👏👏👏
      </Paragraph>
      <Paragraph>
        Below is an example of keeping a mutable variable in a ref. The Timer
        component initializes a setInterval on every re-render and needs to
        implement a callback to stop its interval imperatively:
      </Paragraph>
      <Editor
        value={useRefKeepMutableCode}
        onValueChange={handleUseRefKeepMutableCode}
        highlight={handleHighlight}
        padding={globals.PADDING}
        style={editorStyles}
      />
      <Header>Resources</Header>
      <List>
        <li>
          <a href="https://medium.com/@accardo.steven/throw-the-flag-reacts-createref-api-callbackref-api-and-forwardref-api-cb464231cca1">
            Reacts createRef API
          </a>
        </li>
        <li>
          <a href="https://reactjs.org/docs/hooks-reference.html#useref">
            React useRef documentation
          </a>
        </li>
        <li>
          <a href="https://egghead.io/lessons/react-handle-deep-object-comparison-in-react-s-useeffect-hook-with-the-useref-hook">
            Handle Deep Object Comparison in React's useEffect hook
          </a>
        </li>
        <li>
          <a href="https://medium.com/trabe/react-useref-hook-b6c9d39e2022">
            React useRef Hook
          </a>
        </li>
      </List>
      {/* <Paragraph>
        useRef is nice as you can set references directly in your function
        components. However, this was the first time I found hooks together with
        TypeScript a bit tricky! When you are in strict mode, TypeScript might
        complain:
      </Paragraph>

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
      /> */}
    </section>
  );
};
