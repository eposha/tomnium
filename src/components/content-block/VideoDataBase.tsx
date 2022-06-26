import {useRef, useEffect, useContext} from 'react';
import {LoadedPlayerScriptContext} from './ContentBlock';
import {useNode} from '@craftjs/core';
import {FILE_URL, VIDEO_RESOLUTIONS} from 'src/constants/common';

import * as UI from 'styles/content-block/video-block-style';
import UserVideoMarks from './UserVideoMarks';
import {useGetVideo} from '@/graph-hooks/contentBlock/useGetVideo';
import {useUser} from '@/graph-hooks/user';

//@ts-ignore
const VideoDataBase = () => {
  const {videoData} = useNode((node) => ({
    videoData: node.data.props.videoData,
  }));
  const {video} = useGetVideo(videoData?.id);
  const {user} = useUser();

  const player = useRef();
  const isLoadedPlayerScript = useContext(LoadedPlayerScriptContext);

  useEffect(() => {
    //@ts-ignore
    if (!video || !window.Playerjs) return;
    const videoFiles = video.VideoFiles?.map((videoFile) => {
      const {path, resolution} = videoFile || {};
      if (!path || !resolution) return;

      return `[${VIDEO_RESOLUTIONS[resolution]}]` + FILE_URL + path;
    });
    const subtitles = video.Subtitles?.map((subtitle) => {
      const {file, Language} = subtitle || {};
      if (!file || !Language) return;

      return `[${Language.code}]` + FILE_URL + file;
    });

    const videos = videoFiles?.join(',');
    const subtitle = subtitles?.join(',');

    const points = video.VideoMarks?.map((mark) => {
      if (!mark) return;
      const {timing, text} = mark;
      const [hours, minutes, seconds] = timing?.split(':') || [];
      return {time: +hours * 60 * 60 + +minutes * 60 + +seconds, text};
    });

    const isPoster = video?.image?.[0];
    const poster = isPoster ? `${FILE_URL}` + isPoster.path : null;

    //@ts-ignore
    player.current = new window.Playerjs({
      id: video.id,
      file: videos,
      poster,
      subtitle,
      points,
    });
  }, [video, isLoadedPlayerScript]);

  //@ts-ignore
  const getVideoTime = () => player.current?.api('time');

  const handleStartPlay = (timing: string) => {
    const [hours, minutes, seconds] = timing.split(':');
    const second = +hours * 60 * 60 + +minutes * 60 + +seconds;
    //@ts-ignore
    player.current?.api('play');
    //@ts-ignore
    player.current?.api('seek', second);
  };

  return (
    <UI.ElementWrapper>
      <UI.VideoPlayerWrapper>
        {video && (
          <UI.VideoPlayer
            id={video.id}
            $isMarkers={!!video.VideoMarks?.length}
          />
        )}
        {!!video?.VideoMarks?.length && (
          <UI.MarkersWrapper>
            <UI.MarkerTitle>Структура урока</UI.MarkerTitle>
            <UI.MarkersList>
              {/* @ts-ignore */}
              {video.VideoMarks.map(({id, timing, text}) => {
                const [hours, minutes, seconds] = timing.split(':');

                const second = +hours * 60 * 60 + +minutes * 60 + +seconds;
                return (
                  <UI.Marker
                    key={id}
                    onClick={() => {
                      //@ts-ignore
                      player.current?.api('play');
                      //@ts-ignore
                      player.current?.api('seek', second);
                    }}>
                    <UI.MarkerTime>{timing}</UI.MarkerTime>
                    <UI.MarkerText>{text}</UI.MarkerText>
                  </UI.Marker>
                );
              })}
            </UI.MarkersList>
          </UI.MarkersWrapper>
        )}
      </UI.VideoPlayerWrapper>
      {video?.id && user && (
        <UserVideoMarks
          videoId={video.id}
          getVideoTime={getVideoTime}
          handleStartPlay={handleStartPlay}
        />
      )}
    </UI.ElementWrapper>
  );
};

export default VideoDataBase;
