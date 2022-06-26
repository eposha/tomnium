import Document, {
  DocumentContext,
  DocumentInitialProps,
  Main,
  NextScript,
  Head,
  Html,
} from 'next/document';
import {ServerStyleSheet} from 'styled-components';
import {mediaStyles} from 'src/media-styles';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang={'ru'}>
        <Head>
          <meta name='theme-color' content='#000000' />
          <link rel='apple-touch-icon' href='/icons/apple-touch-icon.png' />
          <style
            type='text/css'
            dangerouslySetInnerHTML={{__html: mediaStyles}}
          />
          <link rel='manifest' href='/manifest.json' />
          <link
            rel='preload'
            href='/fonts/Gilroy-RegularItalic.ttf'
            as='font'
            crossOrigin=''
          />
          <link
            rel='preload'
            href='/fonts/Gilroy-Regular.ttf'
            as='font'
            crossOrigin=''
          />
          <link
            rel='preload'
            href='/fonts/Gilroy-Medium.ttf'
            as='font'
            crossOrigin=''
          />
          <link
            rel='preload'
            href='/fonts/Gilroy-Semibold.ttf'
            as='font'
            crossOrigin=''
          />
          <link
            rel='preload'
            href='/fonts/Gilroy-Bold.ttf'
            as='font'
            crossOrigin=''
          />
          <script
            src={'/main-page-tilda/js/jquery-1.10.2.min.js'}
            defer
            onLoad={() => {
              //
            }}
          />

          <script
            src={'/main-page-tilda/js/jquery.touchswipe.min.js'}
            defer
            onLoad={() => {
              //
            }}
          />

          <script
            src={'/main-page-tilda/js/tilda-animation-1.0.min.js'}
            defer
            onLoad={() => {
              //
            }}
          />

          <script
            src={'/main-page-tilda/js/tilda-animation-sbs-1.0.min.js'}
            defer
            onLoad={() => {
              //
            }}
          />
          <script
            src={'/main-page-tilda/js/tilda-blocks-2.8.js'}
            defer
            onLoad={() => {
              //
            }}
          />

          <script
            src={'/main-page-tilda/js/tilda-blocks-page27750860.min.js'}
            defer
            onLoad={() => {
              //
            }}
          />

          <script
            src={'/main-page-tilda/js/tilda-events-1.0.min.js'}
            defer
            onLoad={() => {
              //
            }}
          />

          <script
            src={'/main-page-tilda/js/tilda-forms-1.0.min.js'}
            defer
            onLoad={() => {
              //
            }}
          />

          <script
            src={'/main-page-tilda/js/tilda-phone-mask-1.1.min.js'}
            defer
            onLoad={() => {
              //
            }}
          />

          <script
            src={'/main-page-tilda/js/tilda-scripts-3.0.min.js'}
            defer
            onLoad={() => {
              //
            }}
          />

          <script
            src={'/main-page-tilda/js/tilda-slds-1.4.min.js'}
            defer
            onLoad={() => {
              //
            }}
          />

          <script
            src={'/main-page-tilda/js/tilda-stat-1.0.min.js'}
            defer
            onLoad={() => {
              //
            }}
          />

          <script
            src={'/main-page-tilda/js/tilda-t806-quiz-1.0.min.js'}
            defer
            onLoad={() => {
              //
            }}
          />

          <script
            src={'/main-page-tilda/js/tilda-vote-1.1.min.js'}
            defer
            onLoad={() => {
              //
            }}
          />

          <script
            src={'/main-page-tilda/js/tilda-zero-1.0.min.js'}
            defer
            onLoad={() => {
              //
            }}
          />

          <script
            src={'/main-page-tilda/js/tilda-zero-forms-1.0.min.js'}
            defer
            onLoad={() => {
              //
            }}
          />
          <script
            src={'/main-page-tilda/js/hammer.min.js'}
            defer
            onLoad={() => {
              //
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
