import useSWR from 'swr';
export default function Users(){
    const {data}=useSWR("http://runninglili.club:8080/getAllMessages",(...arg)=>fetch(...arg).then(res=>res.json()))
    if(!data)return"loading"
    return JSON.stringify(data)

}