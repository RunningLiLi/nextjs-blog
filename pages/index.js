import Head from "next/head";
import Link from "next/link";
export default function Home() {
  return (
    <>
        <Head>
          <title>HOME</title>
        </Head>
        hello world!
        <Link href="/article/1">article</Link>
    </>
  );
}
