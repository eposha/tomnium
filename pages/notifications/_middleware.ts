/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {NextRequest, NextResponse} from 'next/server';
import parser from 'ua-parser-js';

// RegExp for public files
const PUBLIC_FILE = /\.(.*)$/;

export const middleware = async (req: NextRequest) => {
  const url = req.nextUrl.pathname;

  if (PUBLIC_FILE.test(url)) return;

  const token = req.cookies?.DNA_TOKEN;

  const handleCheckLogin = async () => {
    try {
      await fetch(process.env.NEXT_PUBLIC_GRAPH_API_URL || '', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify({
          query: `query me {
            me {
              id
            }
          }
        `,
        }),
      });
    } catch (e) {
      if (e instanceof Error && e.message === 'Not authenticated') {
        return NextResponse.redirect('/auth/login');
      }
    }
  };

  if (token) {
    await handleCheckLogin();
  }
  if (!token) {
    return NextResponse.redirect('/auth/login');
  }

  const ua = parser(req.headers.get('user-agent')!);

  const device = ua.device.type === 'mobile' ? 'mobile' : 'desktop';

  const languageCode =
    req.cookies['languageCode'] && req.cookies['languageCode'] !== 'default'
      ? req.cookies['languageCode']
      : 'ru';

  return NextResponse.rewrite(
    `/${languageCode}${url.replace('/default', '')}${device}`,
  );
};
