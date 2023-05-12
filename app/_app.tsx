import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import colors from "tailwindcss/colors";
import { ConfigContext, config } from "./config";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConfigContext.Provider value={config}>
      <NextNProgress showOnShallow color={colors.current[500]} height={10} />
      <Component {...pageProps} />;
    </ConfigContext.Provider>
  );
}
