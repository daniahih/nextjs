import Link from "next/link"
export default function posts (){
    return (
        <>
        <h1> posts page </h1>
         <Link href="/articles">
         <button> Take me to artiles page </button>
         </Link>
        </>
    )
}