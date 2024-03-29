import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
 return (
  <Html lang='es,en'>
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
