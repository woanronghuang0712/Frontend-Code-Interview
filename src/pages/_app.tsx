import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {Sidebar} from '../components/Sidebar'
import {JediTitle} from '../components/JediTitle'
export default function App({ Component, pageProps }: AppProps) {
  return(
    <main className="bg-amber-50 p-4 min-h-screen">

    <Sidebar />


    <JediTitle />
      <div className="p-4 max-w-[720px] mx-auto bg-white rounded shadow">
    <Component {...pageProps} />
</div>
    </main>
    )
}
