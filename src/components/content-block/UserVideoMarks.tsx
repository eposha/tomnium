import {ChangeEvent, FC, useEffect, useState} from 'react';

import {
  useGetVideoMarks,
  useCreateVideoMark,
  useUpdateVideoMark,
  useDeleteVideoMark,
} from '@/graph-hooks/userVideoMarks';

import * as UI from 'styles/content-block/video-block-style';
import {timeFormat} from '@/helpers/time';
import {UserVideoMark} from 'src/graphql.schema';

interface IUserVideoMarks {
  videoId: string;
  getVideoTime: () => number;
  handleStartPlay: (timing: string) => void;
}

const UserVideoMarks: FC<IUserVideoMarks> = ({
  videoId,
  getVideoTime,
  handleStartPlay,
}) => {
  const [videoMarkValue, setVideoMarkValue] = useState('');
  const [markDataValue, setMarkDataValue] = useState({});
  const [editedMarksValue, setEditedMarkValue] = useState({});
  const [videoMarksList, setVideoMarksList] = useState<UserVideoMark[]>([]);

  const {videoMarks} = useGetVideoMarks({
    filter: {
      videoId,
    },
    limit: 1000,
    offset: 0,
  });

  const {createMark} = useCreateVideoMark();
  const {updateMark} = useUpdateVideoMark();
  const {deleteMark} = useDeleteVideoMark();

  useEffect(() => {
    if (videoMarks?.UserVideoMarks) {
      const copyArray = [...videoMarks?.UserVideoMarks];
      setVideoMarksList(copyArray.reverse());

      setMarkDataValue(() => {
        const marksValue = {};

        //@ts-ignore
        copyArray.forEach(({id, text}) => (marksValue[id] = text));

        return marksValue;
      });
    }
  }, [videoMarks]);

  const handleVideoMarkValue = (event: ChangeEvent<HTMLInputElement>) =>
    setVideoMarkValue(event.target.value);

  const handleCreateMark = async () => {
    const time = Math.floor(getVideoTime());

    const timing = timeFormat(time * 1000);

    const createdVideoMark = await createMark({
      variables: {
        record: {
          videoId,
          timing,
          text: videoMarkValue,
        },
      },
    });
    //@ts-ignore
    const newMark = createdVideoMark?.data?.userVideoMarkCreate;
    //@ts-ignore
    if (createdVideoMark?.data?.userVideoMarkCreate) {
      setVideoMarksList((prevList) => [
        //@ts-ignore
        createdVideoMark?.data?.userVideoMarkCreate,
        ...prevList,
      ]);

      setMarkDataValue((prevValue) => {
        const copy = {...prevValue};
        //@ts-ignore
        copy[newMark.id] = newMark.text;
        return copy;
      });
      setVideoMarkValue('');
    }
  };

  const handleUpdateMarkValue = (
    event: {
      currentTarget: {textContent: any};
      target: {value: any};
    },
    id?: number,
  ) => {
    if (!id) return;

    const markIncomingValue = videoMarksList.find(
      ({id: markId}) => markId === id,
    )?.text;

    //@ts-ignore
    if (markIncomingValue !== event.target.value && !editedMarksValue[id]) {
      setEditedMarkValue((prevState) => {
        const copy = {...prevState};
        //@ts-ignore
        copy[id] = true;
        return copy;
      });
    }

    if (
      //@ts-ignore
      (markIncomingValue === event.target.value && editedMarksValue[id]) ||
      !event.currentTarget.textContent.trim()
    ) {
      setEditedMarkValue((prevState) => {
        const copy = {...prevState};
        //@ts-ignore
        copy[id] = false;
        return copy;
      });
    }

    setMarkDataValue((prevValue) => {
      const copyValue = {...prevValue};
      //@ts-ignore
      copyValue[id] = event.target.value;

      return copyValue;
    });
  };

  const handleUpdateMark = async (id?: number) => {
    if (!id) return;

    const result = await updateMark({
      variables: {
        record: {
          id,
          //@ts-ignore
          text: markDataValue[id],
        },
      },
    });

    //@ts-ignore
    if (result?.data?.userVideoMarkUpdate?.id) {
      setEditedMarkValue((prevData) => {
        const copy = {...prevData};

        //@ts-ignore
        copy[id] = false;
        return copy;
      });

      const indexChangedMark = videoMarksList.findIndex(
        ({id: markedId}) => markedId === id,
      );

      if (indexChangedMark >= 0) {
        setVideoMarksList((prevList) => {
          const copy = [...prevList];
          const markData = {...copy[indexChangedMark]};
          //@ts-ignore
          markData.text = result?.data?.userVideoMarkUpdate.text;

          copy[indexChangedMark] = markData;

          return copy;
        });
      }
    }
  };

  const handleDeleteMark = (id?: number) => async () => {
    if (!id) return;
    const deleteData = await deleteMark({
      variables: {
        id,
      },
    });

    //@ts-ignore
    if (deleteData?.data?.userVideoMarkDelete) {
      setVideoMarksList((prevList) =>
        prevList.filter(({id: prevId}) => prevId !== id),
      );
    }
  };

  return (
    <UI.Marks>
      <UI.MarkFieldWrapper>
        <UI.MarkField>
          <UI.MarkInputWrapper>
            <UI.MarkInput
              value={videoMarkValue}
              onChange={handleVideoMarkValue}
              placeholder='Оставить заметку к видео'></UI.MarkInput>
          </UI.MarkInputWrapper>
          <UI.SendButton onClick={handleCreateMark}>Добавить</UI.SendButton>
        </UI.MarkField>
      </UI.MarkFieldWrapper>
      {videoMarksList.map(({id, timing}) => (
        <UI.MarkWrapper key={id}>
          <UI.MarkLabel onClick={() => handleStartPlay(timing)}>
            {timing}
          </UI.MarkLabel>
          <UI.MarkInfo
            tagName='div'
            // @ts-ignore
            html={markDataValue[id] || ''}
            onChange={(event) => handleUpdateMarkValue(event, id)}
          />
          <UI.MarkButtonsWrapper>
            <UI.RemoveIcon
              width={20}
              height={20}
              onClick={handleDeleteMark(id)}
            />
            <UI.EditIcon
              width={20}
              height={20}
              onClick={() => {
                //@ts-ignore
                editedMarksValue[id] && handleUpdateMark(id);
              }}
              //@ts-ignore
              $isDisabled={!editedMarksValue[id]}
            />
          </UI.MarkButtonsWrapper>
        </UI.MarkWrapper>
      ))}
    </UI.Marks>
  );
};

export default UserVideoMarks;
