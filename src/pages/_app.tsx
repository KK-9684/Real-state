import { type Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import { type AppType } from "next/app"
import Layout from './app/layout'
import {NextUIProvider} from "@nextui-org/react"

import { api } from "apple/utils/api"

import "apple/styles/globals.css"

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <NextUIProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp)
