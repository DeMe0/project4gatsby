import * as React from "react"
import { Helmet } from 'react-helmet';
import App from '../components/App';

// styles

// markup
const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{'Father & Son Sewer'}</title>
        <html lang={'en'}/>
        <meta name="description" />
      </Helmet>
      <App />
    </>
  );
};

export default IndexPage
