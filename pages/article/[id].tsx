import { useRouter } from "next/router"
import Head from "next/head"
import Script from "next/script"
import article from "./article.module.css"
export default function Article(){
    const route=useRouter()
    console.log(route)
    return (
        <div>
            <Head>
                <title>article</title>
                <Script src="https://connect.facebook.net/en_US/sdk.js" strategy="lazyOnload" onLoad={()=>{console.log("OK")}} />
            </Head>
            <h1 className={article.title}>Article</h1>
        </div>
    )
}
