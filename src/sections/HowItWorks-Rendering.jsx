import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import { editorStyles, globals, handleHighlight } from "../core";
import {
  RenderCodeSnippet,
  RenderNumberCodeSnippet,
  RenderCountLifeCodeSnippet,
  RenderParagraphCodeSnippet,
  RenderCountAlertSnippet,
  RegularFunctionSnippet,
  SubstitutionPrincipleSnippet,
  SubstitutionPrincipleSnippet2
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
  // Regular function example
  const [regularFunctionCode, updateRegularFunctionCode] = useState(
    RegularFunctionSnippet
  );
  const handleRegularFunctionCode = editor => updateRegularFunctionCode(editor);
  // Substitution principle
  const [substitutionPrincipleCode, updateSubstitutionPrincipleCode] = useState(
    SubstitutionPrincipleSnippet
  );
  const handleSubstitutionPrincipleCode = editor =>
    updateSubstitutionPrincipleCode(editor);
  // Substitution Principle 2
  const [
    substitutionPrincipleCode2,
    updateSubstitutionPrincipleCode2
  ] = useState(SubstitutionPrincipleSnippet2);
  const handleSubstitutionPrincipleCode2 = editor =>
    updateSubstitutionPrincipleCode2(editor);

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
        <li>
          Event handlers “belong” to a particular render and keep using the
          state from that render.
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
      <Paragraph>
        The alert will “capture” the state at the time I clicked the button.The
        count value is constant for every particular call to our function. It’s
        worth emphasizing this — our function gets called many times (once per
        each render), but every one of those times the count value inside of it
        is constant and set to a particular value (state for that render). This
        is not specific to React — regular functions work in a similar way:
      </Paragraph>
      <Editor
        value={regularFunctionCode}
        onValueChange={handleRegularFunctionCode}
        highlight={handleHighlight}
        padding={globals.PADDING}
        style={editorStyles}
      />
      <Paragraph>
        In this example, the outer <code>someone</code> variable is reassigned
        several times. (Just like somewhere in React, the current component
        state can change.)
      </Paragraph>
      <Paragraph>
        However, inside <code>sayHi</code>, there is a local name constant that
        is associated with a <code>person</code> from a particular call.
      </Paragraph>
      <Paragraph>
        That constant is local, so it’s isolated between the calls! As a result,
        when the timeouts fire, each alert “remembers” its own name.
      </Paragraph>
      <Paragraph>
        This explains how our event handler captures the count at the time of
        the click. If we apply the same <strong>substitution principle</strong>,
        each render “sees” its own count:
      </Paragraph>
      <Editor
        value={substitutionPrincipleCode}
        onValueChange={handleSubstitutionPrincipleCode}
        highlight={handleHighlight}
        padding={globals.PADDING}
        style={editorStyles}
      />
      <Paragraph>
        So effectively, each render returns its own “version” of
        handleAlertClick. Each of those versions “remembers” its own count:
      </Paragraph>
      <Editor
        value={substitutionPrincipleCode2}
        onValueChange={handleSubstitutionPrincipleCode2}
        highlight={handleHighlight}
        padding={globals.PADDING}
        style={editorStyles}
      />
      <Paragraph>
        Event handlers “belong” to a particular render. The event keeps using
        the state from that render.
      </Paragraph>
      <Paragraph>
        Inside any particular render, props and state forever stay the same. But
        if props and state are isolated between renders, so are any values using
        them (including the event handlers). They also “belong” to a particular
        render. So even async functions inside an event handler will “see” the
        same count value.
      </Paragraph>
      <Paragraph>
        Side note: I inlined concrete count values right into handleAlertClick
        functions above. This mental substitution is safe because count can’t
        possibly change within a particular render. It’s declared as a const and
        is a number. It would be safe to think the same way about other values
        like objects too, but only if we agree to avoid mutating state. Calling
        setSomething(newObj) with a newly created object instead of mutating it
        is fine because state belonging to previous renders is intact. Each
      </Paragraph>
      <Header>Each Render Has Its Own Effects</Header>
    </section>
  );
};
