import "../styles/global.css";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
