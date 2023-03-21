
export default function Users({data,context}){
    console.log(context)
    if(!data)return"loading"
    return JSON.stringify(data)

}
export async function  getServerSideProps(context){
    const data=await fetch("http://runninglili.club:8080/getAllMessages").then(res=>res.json())
    return {
        props:{
            data
        }
    }
}