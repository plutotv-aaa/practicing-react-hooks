export const createRefManageFocusSnippet = `
import {createRef} from 'react' 

const FocusInput = () => {
   const inputEl = createRef()

   const focusInput = () => {
      inputEl.current.focus()
   }

   return (
      <div>
         <input ref={inputEl} type="text" />
         <button onClick={focusInput}>Focus input</button>
      </div>
   )
}`;
export const useRefManageFocusSnippet = `
const FocusInput = () => {
  const inputEl = React.useRef()

  const focusInput = () => {
     inputEl.current.focus()
  }

  return (
     <div>
        <input ref={inputEl} type="text" />
        <button onClick={focusInput}>Focus input</button>
     </div>
  )
}`;

export const useRefTestSnippet = `
// This should be a codepen or something equivalent
// so that the reader can see this in action
const Test = () => {
  const [renderIndex, setRenderIndex] = React.useState(1)
 const refFromUseRef = React.useRef()
 const refFromCreateRef = createRef()

 if (!refFromUseRef.current) {
    refFromUseRef.current = renderIndex
 }

 if (!refFromCreateRef.current) {
    refFromCreateRef.current = renderIndex
 }

 return (
    <div>
       <p>Current render index: {renderIndex}</p>
       <p>
          <b>refFromUseRef</b> value: {refFromUseRef.current}
       </p>
       <p>
          <b>refFromCreateRef</b> value:{refFromCreateRef.current}
       </p>

       <button onClick={() => setRenderIndex(prev => prev + 1)}>
          Cause re-render
       </button>
    </div>
 )
}
`;
export const useRefCustomComparisonBugSnippet = `
const Profile = () => {
  const [user, setUser] = React.useState({name: 'Alex', weight: 40})

  React.useEffect(() => {
     console.log('You need to do exercise!')
  }, [user])

  const gainWeight = () => {
     const newWeight = Math.random() >= 0.5 ? user.weight : user.weight + 1
     setUser(user => ({...user, weight: newWeight}))
  }

  return (
     <>
        <p>Current weight: {user.weight}</p>
        <button onClick={gainWeight}>Eat burger</button>
     </>
  )
}

export default Profile
`;

export const useRefCustomComparisonFixSnippet = `
const Profile = () => {
  const [user, setUser] = React.useState({name: 'Alex', weight: 40})

  React.useEffect(() => {
      if (!_.isEqual(previousUser, user) {
          console.log('You need to do exercise!')
      }
  })

   ...
}

export default Profile
`;

export const useRefCustomComparisonFix2Snippet = `
const Profile = () => {
  const [user, setUser] = React.useState({name: 'Alex', weight: 20})

  React.useEffect(() => {
      const previousUser = previousUserRef.current
      if (!_.isEqual(previousUser, user) {
          console.log('You need to do exercise!')
      }
  })

  const previousUserRef = React.useRef()
  React.useEffect(() => {
     previousUserRef.current = user
  })

   ...
}

export default Profile
`;
export const useRefUsePreviousCustomHookSnippet = `
const usePrevious = (value) => {
  const ref = React.useRef()
 React.useEffect(() => {
    ref.current = value
 })

 return ref.current
}
`;
export const useRefCustomComparisonFix3Snippet = `
const Profile = () => {
  const initialValue = {name: 'Alex', weight: 20}
 const [user, setUser] = React.useState(initialValue)

  const previousUser = usePrevious(user)

 React.useEffect(() => {
     if (!_.isEqual(previousUser, user) {
         console.log('You need to do exercise!')
     }
 })

 const gainWeight = () => {
    const newWeight = Math.random() >= 0.5 ? user.weight : user.weight + 1
    setUser(user => ({...user, weight: newWeight}))
 }

 return (
    <>
       <p>Current weight: {user.weight}</p>
       <button onClick={gainWeight}>Eat burger</button>
    </>
 )
}

export default Profile
`;

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
