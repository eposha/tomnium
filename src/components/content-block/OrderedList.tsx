import parse from 'html-react-parser';

import {useNode} from '@craftjs/core';

import {OL} from 'styles/content-block/ordered-list';

const OrderedList = () => {
  const {text} = useNode((node) => ({
    text: node.data.props.text,
  }));

  return text ? (
    <OL style={{listStyleType: 'decimal'}}>{parse(text)}</OL>
  ) : null;
};

export default OrderedList;
