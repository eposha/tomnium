import {FC, ReactNode} from 'react';
import {useCookieSettings} from 'src/hooks';
import Container from './Container';
import NavigationLayout from './NavigationLayout';
import {useDirectories} from '@/graph-hooks/directories';
import GlobalLayoutStyles from 'styles/globalLayoutStyles';
import {useUser} from '@/graph-hooks/user';
import {useGetTildaCache} from '@/graph-hooks/tilda/useGetTildaCache';
import Head from 'next/head';

interface IMainLayout {
  children: ReactNode;
}

const MainLayout: FC<IMainLayout> = ({children}) => {
  useCookieSettings();
  useUser();

  const {directories} = useDirectories();
  const tildaId = directories?.Settings?.connect;
  const {tildaData} = useGetTildaCache({alias: tildaId});

  const tildaJs = tildaData?.TildaProject?.js;

  return (
    <>
      {tildaJs && (
        <Head>
          {tildaJs?.map((url: string) => (
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
      )}
      <Container>
        <>
          <GlobalLayoutStyles />
          <NavigationLayout>{children}</NavigationLayout>
        </>
      </Container>
    </>
  );
};

export default MainLayout;
