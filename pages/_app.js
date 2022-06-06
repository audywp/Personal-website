import 'antd/dist/antd.css';
import Navbar from '../components/Nav/Navbar';
import Socmed from '../components/Socmed';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Socmed />
    </>
  );
}

export default MyApp;

