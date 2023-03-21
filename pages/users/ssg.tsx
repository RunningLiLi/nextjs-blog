
export default function Users({data}){
    if(!data)return"loading"
    return JSON.stringify(data)

}
export async function  getServerSideProps(){
    const data=await fetch("http://runninglili.club:8080/getAllMessages").then(res=>res.json())
    return {
        props:{
            data
        }
    }
}