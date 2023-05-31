import 'tailwindcss/tailwind.css'

import type {AppProps} from 'next/app'
import Head from 'next/head'
import Header from '../components/header'
import {Auth0Provider} from '@auth0/auth0-react'
import AppSlugProvider from "../providers/AppSlugProvider";
import Script from "next/script";

export default function MyApp({Component, pageProps}: AppProps) {
  return (
      <AppSlugProvider>
        {appSlug => (
            <Auth0Provider
                clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
                domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
            >
              <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta
                    name="description"
                    content="Clone and deploy your own Next.js portfolio in minutes."
                />
                <title>My awesome blog</title>
              </Head>

              <Header/>

              <main className="py-14">
                <Component {...pageProps} />
                <Script
                    data-appname={appSlug}
                    src={process.env.NEXT_PUBLIC_SDK_URL}
                    id="gl-sdk-script"
                >
                </Script>
              </main>
            </Auth0Provider>
        )}
      </AppSlugProvider>
  )
}
