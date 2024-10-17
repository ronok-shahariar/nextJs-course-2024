import Link from "next/link"

export default function notFound(){
    return <div>
        <h1>This page does not exits</h1>
        <Link href={'/'}>Go back to home</Link>
    </div>
}