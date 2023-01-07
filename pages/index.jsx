import Link from "next/link";
import { useState } from 'react';

const index = () =>{
    const [username,setUsername] = useState("")
    return (
        <div>
            <label>
                username
                <input value={username} onChange={(e)=>setUsername(e.target.value)}/>
            </label>
            <p>{username} 깃허브 검색하기</p>
            <Link href={`/users/${username}`}>검색하기</Link>
        </div>
    )
}

// export const getServerSideProps = async ()=>{
//     try{
//         const res = await fetch("https://api.github.com/users/bookhabit")
//         if(res.status === 200){
//             const user = await res.json();
//             return {props:{user}} // 데이터가 잘 전달되면(200) props로 index함수에 user정보를 넘긴다
//         }
//         return {props:{}} // 데이터가 잘 전달되지 않으면 props로 index함수에 빈 객체를 넘긴다
//     }catch(e){
//         console.log(e)
//         return {props:{}}
//     }
// }


export default index;