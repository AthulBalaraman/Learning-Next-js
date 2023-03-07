import Link from "next/link"

export default function FirstPost(){
  return <>
  <h1>First Post</h1><br /><br />
  <h2>Welcome to the First Post Click <a href="http://nextjs.org">here</a> to go to nextjs webiste</h2><br /><br />
  <h3>
    <Link href="/">Go back to home</Link>
  </h3>

  </>
}