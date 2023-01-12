import { Plus_Jakarta_Sans as Pjsans } from "@next/font/google";
import { Nav } from "../components/general";

const pjsans = Pjsans({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        *,
        *::before,
        *::after {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
        ul {
          list-style: none;
        }
        a {
          text-decoration: none;
        }
        html {
          font-size: 0.625em;
          --charleston-green: #222629;
          --silver-sand: #c4c8c8;
        }
        body {
          font-size: 1.6rem;
          font-family: ${pjsans.style.fontFamily};
          overflow-x: hidden;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        h1 {
          font-weight: 700;
        }
        button {
          font-family: ${pjsans.style.fontFamily};
        }
        p {
          font-weight: 500;
        }
      `}</style>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}
