// import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import { NextUIProvider, createTheme } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import themeLight from '@/styles/theme/light-theme';
import themeDark from '@/styles/theme/dark-theme';
import { RecoilRoot } from 'recoil';

const dark = createTheme(themeDark);
const light = createTheme(themeLight);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        value={{
        light: light.className,
        dark: dark.className
        }}
      >
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      </NextThemesProvider>
    </RecoilRoot>
  );
}
