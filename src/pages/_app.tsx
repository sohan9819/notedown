import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Header, Footer } from "~/components";
import { NoteContextProvider } from "~/context/noteContext";
import { TopicContextProvider } from "~/context/topicContext";
// import Head from "./head";
import Head from "next/head";

import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Note Down</title>
        <meta property="og:title" content="NoteDown App" key="title" />
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <NoteContextProvider>
        <TopicContextProvider>
          <Component {...pageProps} />
        </TopicContextProvider>
      </NoteContextProvider>
      <Footer />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
