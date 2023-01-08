import '../../styles/globals.css';
import FormProvider from '../context';

const App = ({ Component, pageProps }) => {
  return <FormProvider><Component {...pageProps} /></FormProvider>
}

export default App;