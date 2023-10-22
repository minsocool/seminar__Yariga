import { LayoutMain } from "@/components/layout";
import "@/styles/globals.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Manrope } from "next/font/google";

const queryClient = new QueryClient();

const manrope = Manrope({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-manrope",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <LayoutMain>
        <div className={`${manrope.variable} font-manrope`}>
          <Component {...pageProps} />
        </div>
      </LayoutMain>
    </QueryClientProvider>
  );
}
