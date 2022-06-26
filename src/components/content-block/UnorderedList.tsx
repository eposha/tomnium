import parse from 'html-react-parser';
import {useNode} from '@craftjs/core';

import {UL} from 'styles/content-block/unordered-list';

const UnorderedList = () => {
  const {text} = useNode((node) => ({
    text: node.data.props.text,
  }));

  return text ? <UL>{parse(text)}</UL> : null;
};

export default UnorderedList;
