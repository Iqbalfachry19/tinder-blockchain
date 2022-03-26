import '../styles/globals.css';
import { MoralisProvider } from 'react-moralis';
import { TinderProvider } from '../context/TinderContext';

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl="https://tortdzkfheda.usemoralis.com:2053/server"
      appId="HvjaZwsGwJSpzv1YDzBL9q8Pq2ba4DROiz8SVyK3"
    >
      <TinderProvider>
        <Component {...pageProps} />
      </TinderProvider>
    </MoralisProvider>
  );
}

export default MyApp;
