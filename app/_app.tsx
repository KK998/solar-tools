import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import colors from "tailwindcss/colors";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress showOnShallow color={colors.current[500]} height={10} />
      <Component {...pageProps} />;
    </>
  );
}
