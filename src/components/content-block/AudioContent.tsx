import {useEffect, useContext} from 'react';
import {LoadedPlayerScriptContext} from './ContentBlock';
import {useNode} from '@craftjs/core';

import * as UI from 'styles/content-block/audio-style';

const AudioContent = () => {
  const {audioData} = useNode((node) => ({
    audioData: node.data.props.audioData,
  }));

  const isLoadedPlayerScript = useContext(LoadedPlayerScriptContext);

  useEffect(() => {
    //@ts-ignore
    if (!audioData || !window.Playerjs) return;
    const audio = audioData.AudioFile?.path;

    //@ts-ignore
    new window.Playerjs({
      id: 'audio',
      file: audio,
      player: 2,
    });
  }, [audioData, isLoadedPlayerScript]);

  if (!audioData) return null;

  return (
    <UI.ElementWrapper>
      <UI.AudioTitle>{audioData.title}</UI.AudioTitle>
      <UI.AudioPlayerWrapper>
        <UI.AudioPlayer id={'audio'} />
      </UI.AudioPlayerWrapper>
    </UI.ElementWrapper>
  );
};

export default AudioContent;
