import Link from "next/link"
import Head from "next/head"
import Image from "next/image"
import Script from "next/script"
import ProfilePic from "../../public/images/profile.jpeg"
import Layout from "../../components/Layout"
export default function FirstPost(){
  return <Layout>
  <Head>
    <title>First Post page</title>
  </Head>
  <Script
  src="https://connect.facebook.net/en_US/sdk.js"
  strategy="lazyOnload"
  onLoad={()=>{
    console.log("Script loaded correctly")
  }}
  />
  <h1>First Post</h1><br /><br />
  <h2>Welcome to the First Post Click <a href="http://nextjs.org">here</a> to go to nextjs webiste</h2><br /><br />
  <div>
  <Image 
  src="/images/profile.jpeg"
  height={144}
  width={144}
  alt="Athul"
  /> 
  <br />
  <Image 
  src={ProfilePic}
  height={250}
  width={250}
  alt="Athul"
  />

  </div>
  <h3>
    <Link href="/">Go back to home</Link>
  </h3>
  </Layout>
}