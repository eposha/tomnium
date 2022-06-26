import {useEffect} from 'react';
import queryString from 'query-string';

const useTildaConfig = () => {
  useEffect(() => {
    const allData = [...document.querySelectorAll('a')];
    const lwiData = allData.filter((data) => data?.href.includes('#lwi_type='));

    lwiData.forEach((nodeElement) => {
      //@ts-ignore
      const href = nodeElement.attributes?.href?.value;

      const queryParams = href && queryString.parse(href);
      if (queryParams && queryParams.lwi_type === 'price_old') {
        nodeElement.replaceWith('1230$');
      }
      if (queryParams && queryParams.lwi_type === 'price_current') {
        nodeElement.replaceWith('123$');
      }

      if (queryParams && queryParams.lwi_type === 'buy_course') {
        const that = nodeElement;

        const div = document.createElement('div');
        that.getAttribute('class') &&
          //@ts-ignore
          div.setAttribute('class', that?.getAttribute('class'));

        // move all elements in the other container.
        while (that.firstChild) {
          div.appendChild(that.firstChild);
        }
        //@ts-ignore
        that?.parentNode.replaceChild(div, that);
        div.style.cursor = 'pointer';
        div.onclick = () => {
          alert('Here will be buy modal window');
        };
      }

      if (queryParams && queryParams.lwi_type === 'buy_subscription') {
        const that = nodeElement;

        const div = document.createElement('div');
        that.getAttribute('class') &&
          //@ts-ignore
          div.setAttribute('class', that?.getAttribute('class'));

        // move all elements in the other container.
        while (that.firstChild) {
          div.appendChild(that.firstChild);
        }
        //@ts-ignore
        that?.parentNode.replaceChild(div, that);
        div.style.cursor = 'pointer';
        div.onclick = () => {
          alert('Here will be subscription modal window');
        };
      }
    });
  }, []);
};

export default useTildaConfig;
