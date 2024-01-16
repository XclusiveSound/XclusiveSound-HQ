import { Html, Head, Main, NextScript } from 'next/document';
import { useSelectorState } from '@/src/core/hooks';

const Document = () => {
 const { currentLanguage } = useSelectorState((state) => state.view);

 return (
  <Html lang={currentLanguage}>
   <Head>
    <link rel='shortcut icon' href='./images/branding/favicon.ico' type='image/x-icon' />
   </Head>
   <body>
    <Main />
    <NextScript />
   </body>
  </Html>
 );
};

export default Document;
