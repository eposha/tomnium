import Script from 'next/script';
import {FC, createContext, useState, useEffect, useRef} from 'react';
import {Editor, Frame, Element, useNode} from '@craftjs/core';

import * as UI from 'styles/content-block/content-block';

import {
  Button,
  Text,
  Quote,
  OrderedList,
  UnorderedList,
  ContentImage,
  AudioContent,
  VideoContent,
  VideoDataBase,
  ButtonWithDescription,
  Notice,
  UploadFile,
  TildaData,
} from './';

export const LoadedPlayerScriptContext = createContext(false);

const Container: FC = ({children}) => {
  const {
    connectors: {connect},
  } = useNode();

  return (
    //@ts-ignore
    <UI.ContainerEditor ref={connect}>{children}</UI.ContainerEditor>
  );
};

interface IContentBlock {
  contentData: any;
}

const ContentBlock: FC<IContentBlock> = ({contentData}) => {
  const {content} = contentData?.[0] || contentData || {};
  const [isLoadedPlayerScript, setLoadedPlayerScript] = useState(false);

  const isFirstRender = useRef(true);

  const [isRenderContent, setIsRenderContent] = useState(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setIsRenderContent(false);
  }, [content]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    let timerId: NodeJS.Timeout;

    if (!isRenderContent) {
      timerId = setTimeout(() => {
        setIsRenderContent(true);
      }, 0);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [isRenderContent]);

  if (!content) return null;

  const parseContent = JSON.parse(content);

  return isRenderContent ? (
    <>
      <Script
        src='/player/playerjs.js'
        onLoad={() => setLoadedPlayerScript(true)}
      />
      <LoadedPlayerScriptContext.Provider value={isLoadedPlayerScript}>
        <Editor
          resolver={{
            Text,
            Button,
            Container,
            Quote,
            UnorderedList,
            OrderedList,
            ContentImage,
            AudioContent,
            VideoContent,
            VideoDataBase,
            ButtonWithDescription,
            Notice,
            UploadFile,
            TildaData,
          }}>
          <Frame data={parseContent}>
            <Element is={Container} />
          </Frame>
        </Editor>
      </LoadedPlayerScriptContext.Provider>
    </>
  ) : null;
};

export default ContentBlock;
