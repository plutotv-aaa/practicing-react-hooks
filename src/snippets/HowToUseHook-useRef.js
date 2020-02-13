export const useRefExample = `
import React, { useRef } from 'react';
function TextInputWithFocusButton() {
  // it's common to initialise refs with null
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // ⚡️ TypeScript in strict mode will complain here, 
    // because inputEl can be null!
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
`;

export const useRefExample2 = `
function TextInputWithFocusButton() {
    // initialise with null, but tell TypeScript we are looking for an HTMLInputElement
    const inputEl = useRef<HTMLInputElement>(null);
    const onButtonClick = () => {
      // strict null checks need us to check if inputEl and current exist.
      // but once current exists, it is of type HTMLInputElement, thus it
      // has the method focus! ✅
      if(inputEl && inputEl.current) {
        inputEl.current.focus();
      } 
    };
    return (
      <>
        { /* in addition, inputEl only can be used with input elements. Yay! */ }
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
      </>
    );
  }
`;

export const useRefExample3 = `
import React, { useState, useRef } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  const counterEl = useRef(null)

  const increment = () => {
    setCount(count + 1)
    console.log(counterEl)
  }

  return (
    <>
      Count: <span ref={counterEl}>{count}</span>
      <button onClick={increment}>+</button>
    </>
  )
}

ReactDOM.render(<Counter />, document.getElementById('app'))

// Notice the const counterEl = useRef(null) line, and the <span ref={counterEl}>{count}</span>. This is what sets the link.
// Now we can access the DOM reference by accessing counterEl.current.

`;
