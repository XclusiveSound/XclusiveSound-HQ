import type { AppProps } from 'next/app';
import { Layout } from '@/src/view/components';
import '@/src/view/scss/index.scss';

const App = ({ Component, pageProps }: AppProps) => {
 return (
  <Layout>
   <Component {...pageProps} />
  </Layout>
 );
};

export default App;
