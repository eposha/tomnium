import Head from 'next/head';
import {FC} from 'react';

interface SeoProps {
  seoTitle?: string;
  seoDescription?: string;
}

const HeadSeo: FC<SeoProps> = ({seoTitle, seoDescription}) => {
  return (
    <Head>
      {seoTitle && <title>{seoTitle}</title>}
      {seoDescription && <meta name='description' content={seoDescription} />}
    </Head>
  );
};

export default HeadSeo;
