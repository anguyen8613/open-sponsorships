import '../../styles/globals.css';
import Layout from '../components/Layout/Layout';
import FormProvider from '../context';

const App = ({ Component, pageProps }) => {
  return <Layout><FormProvider><Component {...pageProps} /></FormProvider></Layout>
}

export default App;