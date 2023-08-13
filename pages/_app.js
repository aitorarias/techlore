// pages/_app.js

import "../styles/globals.css";
import Navbar from "../components/NavBar/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
