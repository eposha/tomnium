import {NextRequest, NextResponse} from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

// export const setCookie = (
//   req: NextRequest,
//   res: NextResponse,
//   name: string,
//   value: any,
// ) => {
//   if (req.cookies[name]) return;
//   res.cookie(name, value);
// };

export const middleware = async (req: NextRequest) => {
  if (PUBLIC_FILE.test(req.nextUrl.pathname)) return;

  const token = req.cookies?.DNA_TOKEN;

  const isRootPath = req.nextUrl.pathname === '/';
  // const isCenterPath = req.nextUrl.pathname === '/center/';

  const handleCheckLogin = async () => {
    let me = null;
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
      })
        .then((res) => res.json())
        .then((result) => {
          me = result?.data?.me;
        });
    } catch (e) {
      console.log(e);
      if (e instanceof Error && e.message === 'Not authenticated') {
        return NextResponse.redirect('/');
      }
    }
    return me;
  };

  if (token && isRootPath) {
    const me = await handleCheckLogin();
    if (me) {
      return NextResponse.redirect('/courses/');
    }
  }
  // if (isCenterPath) {
  //   if (!token) {
  //     return NextResponse.redirect(`/`);
  //   }
  //   const me = await handleCheckLogin();
  //   if (!me) {
  //     return NextResponse.redirect(`/`);
  //   }
  // }

  const shouldHandleLocale =
    !PUBLIC_FILE.test(req.nextUrl.pathname) &&
    !req.nextUrl.pathname.includes('/api/') &&
    req.nextUrl.locale === 'default';

  if (!shouldHandleLocale) return;

  const langFromCookie =
    req.cookies['languageCode'] && req.cookies['languageCode'] !== 'default'
      ? req.cookies['languageCode']
      : null;

  const languageCode = langFromCookie || 'ru';

  return NextResponse.redirect(
    `/${languageCode}${req.nextUrl.pathname.replace('/default', '')}`,
  );
};
