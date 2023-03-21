import { NextRouter, useRouter } from "next/router";
import useSWR from "swr";
export default function Post({ params }) {
  const route: NextRouter = useRouter();
  const {data} = useSWR("/api/sendPost", (...arg) =>{
    return fetch(...arg,{method:"POST",body:"HELLo WORLD"}).then((res) => res.json())
}
  );
  return <>{params.attitude+data?.post}</>;
}
export function getStaticPaths() {
  return {
    paths: [
      {
        params: { name: "火影忍者" },
      },
      {
        params: { name: "柯南" },
      },
    ],
    fallback: false,
  };
}
export function getStaticProps({ params }) {
  return { props: { params: { attitude: "我爱" + params.name } } };
}
