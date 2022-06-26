import {FC, useState} from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import {useEffect} from 'react';

const TildaComponent = dynamic(import('src/components/tilda'));

interface ITilda {
  html: string;
  tildaCss: string[];
  js: string[];
}

const TildaContentBlock: FC<ITilda> = ({html, js, tildaCss}) => {
  const [isRender, setIsRender] = useState(false);

  useEffect(() => {
    let idTimer: NodeJS.Timeout | null = null;
    //@ts-ignore
    if (typeof $ !== 'function') {
      idTimer = setTimeout(() => {
        setIsRender((prev: boolean) => !prev);
      }, 300);
    } else {
      if (idTimer) {
        clearTimeout(idTimer);
      }
      setIsRender(true);
    }

    return () => {
      if (idTimer) {
        clearTimeout(idTimer);
      }
    };
  }, [isRender]);

  return isRender ? (
    <>
      <Head>
        {tildaCss.map((url) => (
          <link key={url} href={url} rel='stylesheet' />
        ))}

        {js.map((url) => (
          <script
            key={url}
            src={url}
            defer
            onLoad={() => {
              //
            }}
          />
        ))}
      </Head>
      {/* @ts-ignore */}
      {typeof $ === 'function' && <TildaComponent tildaHtml={html} />}
    </>
  ) : null;
};

export default TildaContentBlock;
