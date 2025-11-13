import { Layout } from '../components';
import { ParallaxProvider } from 'react-scroll-parallax';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';
import '../styles/component.styles.scss';
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  console.log(`
  %c
  ░█░█░█▀▀░█░░░█░░░█▀█
  ░█▀█░█▀▀░█░░░█░░░█░█
  ░▀░▀░▀▀▀░▀▀▀░▀▀▀░▀▀▀
  %c
  ░█░█░█▀█░█▀▄░█░░░█▀▄░█
  ░█▄█░█░█░█▀▄░█░░░█░█░▀
  ░▀░▀░▀▀▀░▀░▀░▀▀▀░▀▀░░▀
  %c
  ░▀█▀░█░█░▀█▀░█▀▀░░░▀█▀░█▀▀░░
  ░░█░░█▀█░░█░░▀▀█░░░░█░░▀▀█░░
  ░░▀░░▀░▀░▀▀▀░▀▀▀░░░▀▀▀░▀▀▀░░
  %c
  ░▀▀█░█▀█░█▀▄░█▀▄░█▀█░█▀█
  ░░░█░█░█░█▀▄░█░█░█▀█░█░█
  ░▀▀░░▀▀▀░▀░▀░▀▀░░▀░▀░▀░▀
  %c
  ░█▀▀░█▄█░▀█▀░▀█▀░█░█
  ░▀▀█░█░█░░█░░░█░░█▀█
  ░▀▀▀░▀░▀░▀▀▀░░▀░░▀░▀
  %c
  ░█▀▀░▀█▀░█░█░█▀▄░▀█▀░█▀█
  ░▀▀█░░█░░█░█░█░█░░█░░█░█
  ░▀▀▀░░▀░░▀▀▀░▀▀░░▀▀▀░▀▀▀
  `,
  'color: #06e',
  'color: #f04',
  'color: #fc0',
  'color: #06e',
  'color: #f04',
  'color: #fc0',
  );
  return (
    <ParallaxProvider>
      <Layout
        headerPageTitle={ pageProps.pageData?.page_title }
        headerMetaDesc={ pageProps.pageData?.meta_description }
        footerData={ pageProps.footerData }
        headerData={ pageProps.headerData }
        headerShareImage={ pageProps.pageData?.share_image }
      >
        <Component {...pageProps} />
      </Layout>
    </ParallaxProvider>
  );
}
