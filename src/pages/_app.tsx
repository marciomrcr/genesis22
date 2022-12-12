import type { AppProps } from 'next/app';
import 'semantic-ui-css/semantic.min.css';
import '../styles/index.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
