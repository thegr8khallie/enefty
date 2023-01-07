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
          font-size: 10px;
          font-family: ${pjsans.style.fontFamily};
        }
        body {
          font-size: 1.6rem;
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
        p {
          font-weight: 500;
        }
      `}</style>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}
