import {LoadedPlayerScriptContext} from 'src/components/chat/Chat';
import {useContext, useEffect} from 'react';

const VideoContent = ({path, id}: {path: string; id: string}) => {
  const isLoadedPlayerScript = useContext(LoadedPlayerScriptContext);

  useEffect(() => {
    //@ts-ignore
    if (!window.Playerjs && !isLoadedPlayerScript && !path) return;
    //@ts-ignore
    new window.Playerjs({
      id,
      file: path,
    });
  }, [path, isLoadedPlayerScript, id]);

  return <div id={id} />;
};

export default VideoContent;
