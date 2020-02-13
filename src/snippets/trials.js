export const TextTrackAAMP = `
import { createStructuredSelector } from 'reselect';

import React, { useCallback, useEffect, useState } from 'react';

import { connect } from 'react-redux';
import classNames from 'classnames';

import { RootState } from 'app-modules/index';

import {
  selectIsClosedCaptionsEnabled,
  selectClosedCaptions,
} from 'app-modules/settings/selectors';

import { VideoPlayer } from 'app-modules/player';

import { useEventListener } from 'app-modules/player/hooks/useAmpPlayer';
import { PlaybackEvents } from 'app-modules/player/playback';
import { VttCueItem } from 'app-modules/player/components/VttCueItem';

const styles = require('./styles/CCAAMPPlayer');

interface ReduxProps {
  closedCaptionsEnabled: boolean;
  closedCaptions: {
    values: {
      [key: string]: string;
    };
  };
}
interface VTTCuesShape {
  [index: number]: string;
}

interface TextTrackShape {
  bubbles: boolean;
  cancelable: boolean;
  currentTarget: undefined;
  defaultPrevented: boolean;
  duration: number;
  eventPhase: number;
  isTrusted: boolean;
  start: number;
  target: undefined;
  text: string;
  timestamp: number;
  type: string;
}
interface TextTrackState {
  vttCues: TextTrackShape[];
}

type Props = ReduxProps;

export const TextTrackAAMPComponent = (props: Props) => {
  // TODO: bind closedCaptions to styles
  const { closedCaptions, closedCaptionsEnabled } = props;
  const [textTracks, setTextTracks] = useState([]);
  const [textTrack, setTextTrack] = useState({});

  // TODO: Remove linter error
  const handleVttCues = useCallback((vttCue: TextTrackShape) => {
    setTextTrack(vttCue);
    console.log('[LOG]:: --------------------------------------');
    console.log('[LOG]:: handleVttCues -> vttCue', vttCue);
    console.log('[LOG]:: --------------------------------------');
    setTextTracks(vttCues => [...vttCues, vttCue]);
  }, []);

  const handleOnDurationComplete = useCallback(() => {
    if (textTracks != null) {
      setTextTracks(vttCues => vttCues.filter(vttCue => vttCue !== textTrack));
    }
  }, [textTracks, textTrack]);

  useEventListener(PlaybackEvents.vttCueDataListener, handleVttCues, VideoPlayer);

  // NOTE: Doesn't render anything until
  if (!closedCaptionsEnabled) {
    return null;
  }

  return (
    <div className={classNames(styles.closedCaptionsAAMPText)}>
      {vttCues.map((vttCue: TextTrackShape) => (
        <VttCueItem
          key={vttCue.durationvttCue.start}
          textTrack={vttCue}
          onDurationTimeEnd={handleOnDurationComplete}
        />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector<RootState, ReduxProps>({
  closedCaptionsEnabled: selectIsClosedCaptionsEnabled,
  closedCaptions: selectClosedCaptions,
});

export const TextTrackAAMP = connect(mapStateToProps, null)(TextTrackAAMPComponent);
`;

export const VttCueItem = `

import React, { useCallback, useEffect, useState } from 'react';
import { useTimeoutFn } from 'react-use';

import { msToSecFloor, msToSecRound } from 'app-modules/player/helpers/timePosition';

import { useTableLogger } from 'app-modules/player/hooks/useAmpPlayer';

import { VideoPlayer } from 'app-modules/player';
import { VttCueText } from 'app-modules/player/components/VttCueText';

export const VttCueItem = ({ textTrack, onDurationTimeEnd }) => {
  const { duration, start, text } = textTrack;
  const [inception, setInception] = useState(VideoPlayer.instance.currentTime);
  const [isShowing, setIsShowing] = useState(start > inception);
  const [delta, setDelta] = useState(start - inception);

  // Show track to start duration
  function onDeltaTimeout() {
    console.log('[LOG]:: -----------------------------------------');
    console.log('[LOG]:: onDeltaTimeEnd -> textTrack', textTrack);
    console.log('[LOG]:: onDeltaTimeEnd -> isShowing', isShowing);
    console.log('[LOG]:: -----------------------------------------');
    setIsShowing(true);
  }

  const [isReady, cancel, reset] = useTimeoutFn(onDeltaTimeout, delta);

  const onDurationTimeout = useCallback(() => {
    console.log('[LOG]:: -----------------------------------------');
    console.log('[LOG]:: onDurationTimeout -> useCallback -> textTrack', textTrack);
    console.log('[LOG]:: onDurationTimeout -> useCallback -> isShowing', isShowing);
    console.log('[LOG]:: -----------------------------------------');
    onDurationTimeEnd(textTrack);
  }, [isShowing, onDurationTimeEnd, textTrack]);

  // Don't render anything
  if (!isShowing) {
    return null;
  }

  return (
    <VttCueText isShowing={isShowing} textTrack={textTrack} onDurationTimeEnd={onDurationTimeEnd} />
  );
  // return (
  //   <div
  //     dangerouslySetInnerHTML={{
  //       __html: text,
  //     }}
  //   ></div>
};
`;

export const VttCueText = `
import React, { useCallback, useState, useEffect } from 'react';
import { useTimeoutFn } from 'react-use';

// FIXME: Show track and set timer using duration

// const durationTimer = useTimeoutFn(handleDuration, duration);

// useEffect(() => {
//   durationTimer.reset();
//   // Specify how to clean up after this effect:

//   return function cleanup() {
//     durationTimer.cancel();
//   };
// });

// if (durationTimer.isReady()) {
//   setIsShowing(false);
// }

export const VttCueText = ({ textTrack, onDurationTimeEnd }) => {
  const { duration, text } = textTrack;
  const [isShowing, setIsShowing] = useState(true);

  function onDurationTimeout() {
    console.log('[LOG]:: -----------------------------------------');
    console.log('[LOG]:: onDurationTimeEnd -> textTrack', textTrack);
    console.log('[LOG]:: onDurationTimeEnd -> isShowing', isShowing);
    console.log('[LOG]:: -----------------------------------------');
    setIsShowing(false);
    onDurationTimeEnd(textTrack);
  }
  const [isReady, cancel, reset] = useTimeoutFn(onDurationTimeout, duration);

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
