import {EntityName, Parent} from 'src/graphql.schema';
import Router from 'next/router';
import {
  IGetParentResponse,
  IGetParentRequest,
} from '@/query/notifications/getParent';
import {LazyQueryExecFunction} from '@apollo/client';
import {CHAT_TYPES} from '@/constants/chat';

export const entityStartLink = {
  [EntityName.EntityNameConsultation]: {
    route: '/consultations/',
    isNeedId: true,
  },
  [EntityName.EntityNameAppointment]: {
    route: '?appointmentId=',
    isNeedId: true,
  },
  [EntityName.EntityNameCourse]: {route: '/courses/', isNeedId: true},
  [EntityName.EntityNameDocument]: {route: '/documents/', isNeedId: true},
  [EntityName.EntityNameThread]: {route: '/threads/', isNeedId: true},
  [EntityName.EntityNameModule]: {route: '/modules/', isNeedId: true},
  [EntityName.EntityNameHomework]: {route: '/homeworks/', isNeedId: true},
  [EntityName.EntityNameLesson]: {route: '/lessons/', isNeedId: true},
  [EntityName.EntityNameOrder]: {route: '/user/payments/', isNeedId: false},
  [EntityName.EntityNameProduct]: {route: '/user/payments/', isNeedId: false},
  [EntityName.EntityNamePurchase]: {route: '/user/payments/', isNeedId: false},
  [EntityName.EntityNameProfile]: {route: '/user/', isNeedId: false},
  [EntityName.EntityNameUser]: {route: '/user/', isNeedId: false},
  [EntityName.EntityNameRoom]: {route: '/chat/', isNeedId: true},
  [EntityName.EntityNameTicket]: {route: '/support/', isNeedId: false},
};

export const getNestingFromParent = (
  parent: Parent,
): (string | undefined)[][] => {
  const {id, entityName, Parent} = parent;
  const nestingParents = [[id, entityName]];
  if (Parent) {
    return getNestingFromParent(Parent).concat(nestingParents);
  }

  return nestingParents;
};

export const generateLink = (parent: (string | undefined)[][]) => {
  let link = '';

  parent.forEach(([id, entity]) => {
    //@ts-ignore
    const entityLinkData = entity ? entityStartLink[entity] : null;

    if (!entityLinkData) return;

    const {route, isNeedId} = entityLinkData;

    if (isNeedId && !id) return;

    link += route + (isNeedId ? `${id}` : '');
  });
  return link;
};

export const generateChatLink = (parent: (string | undefined)[][]) => {
  const [id, entity] = parent[0];

  //@ts-ignore
  const entityLinkData = entity ? CHAT_TYPES[entity] : null;

  if (!id || !entityLinkData) return;

  return `/chat/${id}/${entityLinkData}`;
};

export const handleGetParent =
  (
    id: string,
    entityName: EntityName,
    getParent: LazyQueryExecFunction<IGetParentResponse, IGetParentRequest>,
  ) =>
  async () => {
    // const router = useRouter();
    try {
      const {data} = await getParent({
        variables: {
          entityName,
          id,
        },
      });
      const {entityGetParent} = data || {};
      if (entityGetParent) {
        const parent = getNestingFromParent(entityGetParent);
        const link =
          entityName === EntityName.EntityNameRoom
            ? generateChatLink(parent)
            : generateLink(parent);
        link ? Router.push(link) : null;
      } else {
        const link = generateLink([[id, entityName]]);
        link ? Router.push(link) : null;
      }
    } catch (e) {
      console.log(e);
    }
  };
