import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { editorStyles, globals, handleHighlight } from '../core';

import {
  BasicConceptHTMLSnippet,
  BasicConceptCSSSnippet,
  CssGrid3By3CSSSnippet,
  CssGrid3By3HTMLSnippet,
} from '../snippets/HowToUse-CSSGrid';

import {
  GridContainer,
  GridDisplay,
  GridItem,
  Header,
  List,
  Paragraph,
} from '../application/Application';

export const HowToUseCSSGrid = props => {
  // BasicConceptHTMLSnippet
  const [basicConceptHTMLCode, updateBasicConceptHTMLCode] = useState(BasicConceptHTMLSnippet);
  const handleBasicConceptHTMLCode = editor => updateBasicConceptHTMLCode(editor);

  // BasicConceptCSSSnippet
  const [basicConceptCSSCode, updateBasicConceptCSSCode] = useState(BasicConceptCSSSnippet);
  const handleBasicConceptCSSCode = editor => updateBasicConceptCSSCode(editor);

  // CssGrid3By3HTMLSnippet
  const [cssGrid3By3HTMLCode, updateCssGrid3By3HTMLCode] = useState(CssGrid3By3HTMLSnippet);
  const handleCssGrid3By3HTMLCode = editor => updateCssGrid3By3HTMLCode(editor);

  // CssGrid3By3CSSSnippet
  const [cssGrid3By3CSSCode, updateCssGrid3By3CSSCode] = useState(CssGrid3By3CSSSnippet);
  const handleCssGrid3By3CSSCode = editor => updateCssGrid3By3CSSCode(editor);

  return (
    <section>
      <Header>Introduction to CSS Grid Terminology</Header>
      <List>
        <li>1. Grid Line</li>
        <li>1. Grid Container</li>
        <li>1. Grid Cell</li>
        <li>1. Grid Area</li>
        <li>1. Grid Track</li>
        <li>1. Grid Gap</li>
      </List>
      <Paragraph>
        The basic concept of CSS Grid is to take an HTML element and divide it into rows and
        columns. This process will turn the HTML element into a grid that can be used for layouts.
      </Paragraph>
      <Paragraph>
        We can declare the wrapping div as a grid. The elements that are wrapped by this div will be
        considered as grid items.
      </Paragraph>
      <Paragraph>
        {' '}
        The <code>h1</code> and <code>aside</code> elements are inside gride items but will not
        become grid items themselves
      </Paragraph>
      <Editor
        value={basicConceptHTMLCode}
        onValueChange={handleBasicConceptHTMLCode}
        highlight={handleHighlight}
        padding={globals.PADDING}
        style={editorStyles}
      />
      <Paragraph>
        This is the fundamental concept behind CSS Grid: you can use normal HTML elements to create
        grids and layouts. You don't need any special frameworks
      </Paragraph>
      <Header>1. Grid Line</Header>
      <Paragraph>
        The grid line is the most basic unit of the grid. Your grid layout is defined by your grid
        lines.
      </Paragraph>
      <Paragraph>
        You can refer to these lines as a number or a custom name. Custom names can be very useful
        with more complex layouts.
      </Paragraph>
      <Paragraph>IMAGE</Paragraph>
      <Header>2. Grid Container</Header>
      <Paragraph>
        The wrapping element for all the grid items. You define a grid container with a single CSS
        property.
      </Paragraph>
      <Editor
        value={basicConceptCSSCode}
        onValueChange={handleBasicConceptCSSCode}
        highlight={handleHighlight}
        padding={globals.PADDING}
        style={editorStyles}
      />
      <Paragraph>IMAGE</Paragraph>
      <Header>2. Grid Cell</Header>
      <Paragraph>
        A grid cell is an area surrounded by four grid lines. YOu can think of a grid cell as being
        just like a spreadsheet cell.
      </Paragraph>
      <Paragraph>IMAGE</Paragraph>
      <Header>3. Grid Area</Header>
      <Paragraph>A grd area is composed of multiple grid cells.</Paragraph>
      <Paragraph>
        The CSS Grid module currently allows you to define rectangular or square areas. But you
        won't be able to define more complex areas such as an L-shaped figure.
      </Paragraph>
      <Paragraph>IMAGE</Paragraph>
      <Header>3. Grid Track</Header>
      <Paragraph>General terminology to identify rows or columns.</Paragraph>
      <Paragraph>IMAGE</Paragraph>
      <Header>4. Grid Gap</Header>
      <Paragraph>
        A Grid Gap is the space between grid cells or grid areas. You can think of its as being
        similar to margin in HTML.
      </Paragraph>
      <Paragraph>
        You cannot place content in a grid gap. By default the grid gap is 0, which means there is
        no separation between cells in the grid
      </Paragraph>
      <Paragraph>IMAGE</Paragraph>
      <GridDisplay>
        <GridContainer>
          <GridItem>1</GridItem>
          <GridItem>2</GridItem>
          <GridItem>3</GridItem>
          <GridItem>4</GridItem>
          <GridItem>5</GridItem>
          <GridItem>6</GridItem>
          <GridItem>7</GridItem>
          <GridItem>8</GridItem>
          <GridItem>9</GridItem>
        </GridContainer>
      </GridDisplay>
      <Paragraph>Here the grid is described as such:</Paragraph>
      <List>
        <li>The grid contains nine grid elements</li>
        <li>Each of these elements will be laid out in a 3x3 grid</li>
        <li>Each column will have a width of 100px</li>
        <li>The grid items will be separated from each other by a 20px gap</li>
      </List>
      <Editor
        value={cssGrid3By3CSSCode}
        onValueChange={handleCssGrid3By3CSSCode}
        highlight={handleHighlight}
        padding={globals.PADDING}
        style={editorStyles}
      />
      <Paragraph>
        In this code we explicitly define 3 columns. The <code>grid-template-columns</code> property
        enables us to define the columns of the grid. Each one of these three columns will have a
        width of 100px
      </Paragraph>
      <Editor
        value={cssGrid3By3HTMLCode}
        onValueChange={handleCssGrid3By3HTMLCode}
        highlight={handleHighlight}
        padding={globals.PADDING}
        style={editorStyles}
      />
      <Paragraph>
        Notice that we didn't define the number of rows in the grid. These rows were added in an
        implicit way by the browser.
      </Paragraph>
      <Paragraph>
        If you define the columns or rows in a grid, it's called an "Explicit Grid". On the other
        hand, if the grid items are placed automatically by the browser, it's called an "Implicit
        Grid".
      </Paragraph>
      <Header>How to Create Explicit and Implicit Grids</Header>
      <Paragraph>
        Looking at the current CSS grid, we'll notice that there is no separation between the grid
        items.
      </Paragraph>
    </section>
  );
};
