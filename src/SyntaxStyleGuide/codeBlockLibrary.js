
export const useEventListenerExample = `
import { useState, useRef, useEffect, useCallback } from 'react';

// Usage
function App(){
  // State for storing mouse coordinates
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  
  // Event handler utilizing useCallback ...
  // ... so that reference never changes.
  const handler = useCallback(
    ({ clientX, clientY }) => {
      // Update coordinates
      setCoords({ x: clientX, y: clientY });
    },
    [setCoords]
  );
  
  // Add event listener using our hook
  useEventListener('mousemove', handler);
  
  return (
    <h1>
      The mouse position is ({coords.x}, {coords.y})
    </h1>
  );
}

// Hook
function useEventListener(eventName, handler, element = window){
  // Create a ref that stores handler
  const savedHandler = useRef();
  
  // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(
    () => {
      // Make sure element supports addEventListener
      // On 
      const isSupported = element && element.addEventListener;
      if (!isSupported) return;
      
      // Create event listener that calls handler function stored in ref
      const eventListener = event => savedHandler.current(event);
      
      // Add event listener
      element.addEventListener(eventName, eventListener);
      
      // Remove event listener on cleanup
      return () => {
        element.removeEventListener(eventName, eventListener);
      };
    },
    [eventName, element] // Re-run if eventName or element changes
  );
};
`;
export const vttcueItem = `
import React, { useCallback, useState, useEffect } from 'react';
import { useTimeoutFn } from 'react-use';

import { msToSecFloor, msToSecRound } from 'app-modules/player/helpers/timePosition';

import { VttCueText } from 'app-modules/player/components/VttCueText';

import { VideoPlayer } from 'app-modules/player';

// FIXME: figure out how to get the delta
// FIXME: Show track and set timer using duration

export const VttCueItem = ({ textTrack, onDurationComplete }) => {
  const { duration, start, text } = textTrack;
  const [inception, setInception] = useState(VideoPlayer.instance.currentTime);
  const [isShowing, setIsShowing] = useState(false);
  const [delta, setDelta] = useState(start - inception);

  const handleDurationComplete = useCallback(textTrack => {
    // onDurationComplete(textTrack);
    console.log('[LOG]:: -----------------------------------------');
    console.log('[LOG]:: VttCueItem -> textTrack', textTrack);
    console.log('[LOG]:: -----------------------------------------');
  }, []);

  function handleDelta() {
    setIsShowing(true);
  }

  const deltaTimer = useTimeoutFn(handleDelta, delta);

  // Don't render anything
  if (!deltaTimer.isReady()) {
    return null;
  }

  // return <VttCueText textTrack={textTrack} onDurationComplete={onDurationComplete} />;
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: text,
      }}
    ></div>
  );
};
`;

export const vttcueItem2 = `
import React, { useState, useEffect } from 'react';
import { useTimeoutFn } from 'react-use';

import { msToSecFloor, msToSecRound } from 'app-modules/player/helpers/timePosition';

import { useTableLogger } from 'app-modules/player/hooks/useAmpPlayer';

import { VideoPlayer } from 'app-modules/player';

export const VttCueItem = ({ textTrack, onDurationComplete }) => {
  const { duration, start, text } = textTrack;
  const [inception, setInception] = useState(VideoPlayer.instance.currentTime);
  const [isShowing, setIsShowing] = useState(
    msToSecFloor(start) > msToSecFloor(VideoPlayer.instance.currentTime)
  );

  const [delta, setDelta] = useState(
    msToSecFloor(start) - msToSecFloor(VideoPlayer.instance.currentTime)
  );

  const handleDuration = useTimeoutFn(() => {
    setIsShowing(false);
    onDurationComplete(textTrack);
  }, duration);

  // Show track and set timer using duration
  useTimeoutFn(() => {
    setIsShowing(true);
    console.table([
      { type: typeof text, name: 'text', val: text },
      { type: typeof isShowing, name: 'isShowing', val: isShowing },
      { type: typeof currentTime, name: 'currentTime', val: inception },
      { type: typeof start, name: 'start', val: msToSecFloor(start) },
      { type: typeof duration, name: 'duration', val: msToSecFloor(duration) },
    ]);
    if(handleDuration.isReady()))
    handleDuration.rese();
  }, delta);


  // Don't render anything
  if (!isShowing) {
    return null;
  }

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: text,
      }}
    ></div>
  );
};
`;
export const vttcueItem3 = `
import React, { useState, useEffect } from 'react';
import { useTimeoutFn } from 'react-use';

import { msToSecFloor, msToSecRound } from 'app-modules/player/helpers/timePosition';

import { useTableLogger } from 'app-modules/player/hooks/useAmpPlayer';

import { VideoPlayer } from 'app-modules/player';
import { VttCueText } from 'app-modules/player/components/VttCueText';

export const VttCueItem = ({ textTrack, onDurationComplete }) => {
  const { duration, start, text } = textTrack;
  const [inception, setInception] = useState(VideoPlayer.instance.currentTime);
  const [isShowing, setIsShowing] = useState(
    msToSecFloor(start) > msToSecFloor(VideoPlayer.instance.currentTime),
  );

  const [delta, setDelta] = useState(
    msToSecFloor(start) - msToSecFloor(VideoPlayer.instance.currentTime),
  );

  // function handleDelta() {
  //   setIsShowing(true);
  //   console.table([
  //     { type: typeof text, name: 'text', val: text },
  //     { type: typeof isShowing, name: 'isShowing', val: isShowing },
  //     { type: typeof currentTime, name: 'currentTime', val: inception },
  //     { type: typeof start, name: 'start', val: msToSecFloor(start) },
  //     { type: typeof duration, name: 'duration', val: msToSecFloor(duration) },
  //   ]);
  // }
  const handleDuration = useTimeoutFn(() => {
    setIsShowing(false);
    onDurationComplete(textTrack);
  }, duration);



  // Show track and set timer using duration
  useTimeoutFn(handleDelta, delta);

  useEffect(() => {
    if (!isShowing) {
      onDurationComplete(textTrack);
    }
  }, delta);

  // Don't render anything
  if (!isShowing) {
    return null;
  }

  return <VttCueText text={text} />;
};
`;
export const code = `

const [delta, setDelta] = useState(msToSecRound(start) - msToSecRound(inception));
msToSecRound(start) - msToSecRound(inception)
msToSecRound(start) - msToSecRound(VideoPlayer.instance.currentTime)


const handleDuration = useCallback(() => {
    setIsShowing(false);
    onDurationComplete(textTrack);
}, [onDurationComplete, textTrack])

// msToSecRound(start) > msToSecRound(VideoPlayer.instance.currentTime)
// const [delta, setDelta] = useState(start - inception);
// msToSecRound(start) - msToSecRound(inception)
// msToSecRound(start) - msToSecRound(VideoPlayer.instance.currentTime)


const handleDuration = useTimeoutFn(() => {
  setIsShowing(true);
  console.log('[LOG]:: ---------------------------------------------');
  console.log('[LOG]:: handleDuration -> textTrack', textTrack);
  console.log('[LOG]:: ---------------------------------------------');
  onDurationComplete(textTrack);
}, duration);
const timeout = useTimeoutFn(() => {
  handleDuration();
}, delta);

useEffect(() => {
  timeout.start();
}, []);
// FIXME: Show track and set timer using duration


useEffect(() => {
  console.log('[LOG]:: ---------------------------------------------');
  console.log('[LOG]:: useEffect -> isShowing', isShowing);
  console.log('[LOG]:: useEffect -> INCEPTION', inception);
  console.log('[LOG]:: useEffect -> START', msToSecRound(start));
  console.log('[LOG]:: useEffect -> DELAT', delta);
  console.log('[LOG]:: useEffect -> DURATION', msToSecRound(duration));
  console.log('[LOG]:: useEffect -> TEXT', text);
  console.log('[LOG]:: ---------------------------------------------');
}, [isShowing, inception, start, delta, duration, text]);

// useTimeoutFn Example
const [isReady, cancel, reset] = useTimeoutFn(fn, 5000);
  const cancelButtonClick = useCallback(() => {
    if (isReady() === false) {
      cancel();
      setState('cancelled');
    } else {
      reset();
      setState('Not called yet');
    }
  }, []);

  const readyState = isReady();


`;

export const inputStyling = `
::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: rgba(255, 255, 255, 0.5);
}
::-moz-placeholder {
  /* Firefox 19+ */
  color: rgba(255, 255, 255, 0.5);
}
:-ms-input-placeholder {
  /* IE 10+ */
  color: rgba(255, 255, 255, 0.5);
}
`;
export const closedCaptionsStyling = `
const calculatedStyles = showClosedCaptions
? useStyles(selectedStyle ? { [selectedStyle]: selectedValue } : {})
: {};

const img = (
<>
  <img className={styles.img} src={imgUrl} />
  {showClosedCaptions && (
    <div style={calculatedStyles} className={styles.captions}>
      Captions will look like this
    </div>
  )}
</>
);
`;
