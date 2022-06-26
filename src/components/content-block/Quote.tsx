import {useNode} from '@craftjs/core';
import parse from 'html-react-parser';

import * as UI from 'styles/content-block/quote';

const Quote = () => {
  const {text} = useNode((node) => ({
    text: node.data.props.text,
  }));
  return text ? (
    <UI.QuoteWrapper>
      <UI.VerticalLine />
      <UI.Text>{parse(text)}</UI.Text>
    </UI.QuoteWrapper>
  ) : null;
};

export default Quote;
