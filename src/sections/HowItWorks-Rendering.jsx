import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import { editorStyles, globals, handleHighlight } from "../shared";
import {
  RenderCodeSnippet,
  RenderNumberCodeSnippet,
  RenderCountLifeCodeSnippet,
  RenderParagraphCodeSnippet,
  RenderCountAlertSnippet
} from "../snippets/HowItWorks-Render";

import { Header, Image, List, Paragraph } from "../application/Application";
import CounterGif from "../assets/counter.gif";
import "./styles/Rendering.css";

import ImgReactLifecycleHooks from "../assets/react-lifecycle-hooks.jpg";

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
  // Paragraph tag
  const [renderParagraphCountCode, updateRenderParagraphCountCode] = useState(
    RenderParagraphCodeSnippet
  );
  const handleRenderParagraphCountCode = editor =>
    updateRenderParagraphCountCode(editor);
  // Render has its own event handlers example 1
  const [renderCountAlertCode, updateRenderCountAlertCode] = useState(
    RenderCountAlertSnippet
  );
  const handleRenderCountAlertCode = editor =>
    updateRenderCountAlertCode(editor);

  return (
    <section>
      <Image src={ImgReactLifecycleHooks} width="100%" />
      <Header>Knowledge</Header>
      <List>
        <li>
          The “Render phase” may be restarted by React so it has to be pure, it
          can’t have side effects.
        </li>
        <li>
          All side effects should be done in the “Layout phase” or in the
          “Commit phase”. In terms of React Hooks, inside the useLayoutEffect or
          the useEffect.
        </li>
      </List>
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
      <Paragraph>This next line doesn't do any special data binding:</Paragraph>
      <Editor
        value={renderParagraphCountCode}
        onValueChange={handleRenderParagraphCountCode}
        highlight={handleHighlight}
        padding={globals.PADDING}
        style={editorStyles}
      />
      <Paragraph>
        It only embeds a number value into the render output. That number is
        provided by React. When we setCount, React calls our component again
        with a different count value. Then React updates the DOM to match our
        latest render output.
      </Paragraph>
      <Paragraph>
        The key takeaway is that the count constant inside any particular render
        doesn’t change over time. It’s our component that’s called again — and
        each render “sees” its own count value that’s isolated between renders.
      </Paragraph>
      <Paragraph>
        (For an in-depth overview of this process, check out my post{" "}
        <a href="https://overreacted.io/react-as-a-ui-runtime/">
          React as a UI Runtime.
        </a>
        )
      </Paragraph>
      <Header>Each Render Has Its Own Event Handlers</Header>
      <Paragraph>So far so good. What about event handlers?</Paragraph>
      <Paragraph>
        Look at this example. It shows an alert with the count after three
        seconds:
      </Paragraph>
      <Editor
        value={renderCountAlertCode}
        onValueChange={handleRenderCountAlertCode}
        highlight={handleHighlight}
        padding={globals.PADDING}
        style={editorStyles}
      />
      <Paragraph>Let’s say I do this sequence of steps:</Paragraph>
      <List>
        <li>
          <strong>Increment</strong> the counter to 3
        </li>
        <li>
          <strong>Press</strong> "Show alert"
        </li>
        <li>
          <strong>Increment</strong> it to 5 before timeout fires
        </li>
      </List>
      <Image src={CounterGif} className="counterGif" />
    </section>
  );
};
