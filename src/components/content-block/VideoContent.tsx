import {useEffect, useContext} from 'react';
import {LoadedPlayerScriptContext} from './ContentBlock';
import {useNode} from '@craftjs/core';

import * as UI from 'styles/content-block/external-video';

const VideoContent = () => {
  const {url} = useNode((node) => ({
    url: node.data.props.url,
  }));

  const isLoadedPlayerScript = useContext(LoadedPlayerScriptContext);

  useEffect(() => {
    //@ts-ignore
    if (!url || !window.Playerjs) return;
    //@ts-ignore
    new window.Playerjs({
      id: url,
      file: url,
    });
  }, [url, isLoadedPlayerScript]);

  return <UI.ExternalVideo id={url} />;
};

export default VideoContent;
