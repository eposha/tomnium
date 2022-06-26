import {LoadedPlayerScriptContext} from 'src/components/chat/Chat';
import {useContext, useEffect} from 'react';
import {AudioPlayer} from 'styles/content-block/audio-style';

const AudioContent = ({path, id}: {path: string; id: string}) => {
  const isLoadedPlayerScript = useContext(LoadedPlayerScriptContext);

  useEffect(() => {
    //@ts-ignore
    if (!window.Playerjs && !path && !isLoadedPlayerScript) return;
    //@ts-ignore
    new window.Playerjs({
      id,
      file: path,
      player: 2,
    });
  }, [path, isLoadedPlayerScript, id]);

  return <AudioPlayer id={id} />;
};

export default AudioContent;
