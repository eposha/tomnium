import {useCreateFavorite, useDeleteFavorite} from '@/graph-hooks/favorite';
import {GET_FAVORITES} from '@/query/favorites/getFavorites';
import {IDocument} from '@/types/document';
import type {NextPage} from 'next';
import {useEffect, useState} from 'react';
import {
  CardDescription,
  CardFooter,
  CardHeader,
  HeartIcon,
} from 'src/components/documents';
import {FavoriteTarget} from 'src/graphql.schema';
import {Card} from 'styles/common';

interface IDocumentCard {
  documentData: IDocument;
}

const DocumentCard: NextPage<IDocumentCard> = ({documentData}) => {
  const {
    id,
    Author,
    description,
    title,
    label,
    startDate,
    publishDate,
    type,
    isFavorite,
    durationLabel,
    Course,
    imageList,
  } = documentData;

  const [favoriteState, setFavoriteState] = useState<boolean | undefined>(
    false,
  );

  useEffect(() => {
    setFavoriteState(isFavorite);
  }, [isFavorite]);

  const {handleCreateFavorite} = useCreateFavorite({
    targetId: id,
    targetType: FavoriteTarget.FavoriteTargetDocument,
    setFavoriteState,
  });

  const {handleDeleteFavorite} = useDeleteFavorite({
    targetId: id,
    targetType: FavoriteTarget.FavoriteTargetDocument,
    setFavoriteState,
    refetchQueries: [GET_FAVORITES],
  });

  const handleChangeFavorite = () =>
    favoriteState ? handleDeleteFavorite() : handleCreateFavorite();

  return (
    <Card>
      <HeartIcon isFavorite={favoriteState} onClick={handleChangeFavorite} />
      <CardHeader
        label={label}
        type={type}
        publishDate={publishDate}
        durationLabel={durationLabel}
        startDate={startDate}
        imageList={imageList}
        Course={Course}
      />
      <CardDescription
        title={title}
        description={description}
        Course={Course}
        type={type}
      />
      <CardFooter
        id={id}
        author={Author}
        startDate={startDate}
        publishDate={publishDate}
        type={type}
        Course={Course}
      />
    </Card>
  );
};

export default DocumentCard;
