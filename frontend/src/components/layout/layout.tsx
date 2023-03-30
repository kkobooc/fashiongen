import Head from 'next/head';
import { Container, Grid, useTheme } from "@nextui-org/react";
import Bottom from "./bottom";
// import Left from "./left";
import Top from "./top";

type AppLayoutProps = {
  children: React.ReactNode;
};

const Layout = ({children}: AppLayoutProps) => {
  const { theme } = useTheme();

  return (
    <Grid.Container css={{ minHeight: '100vh' }} direction="column">
      <Head>
        <title>FashionGenAI</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid css={{ flexGrow: 0, zIndex: 1 }}>
        <Top />
      </Grid>
      <Grid css={{ display: 'flex', flexGrow: 1, zIndex: 0 }}>
        <Grid.Container css={{flex: 1}}>
          {/* <Grid
            css={{
              '@mdMax': {
                w: 0,
                overflow: 'hidden',
              },
              '@mdMin': {
                w: 250,
              },
              display: 'flex',
              shadow: '$xs',
            }}
          >
            <Left />
          </Grid> */}
          <Grid
            css={{
              flex: 1,
            }}
          >
            <Container fluid responsive={false}>
              {children}
            </Container>
          </Grid>
        </Grid.Container>
      </Grid>
      <Grid css={{ flexGrow: 0, zIndex: 0 }}>
        <Bottom />
      </Grid>
    </ Grid.Container>
  )
}

export default Layout;
