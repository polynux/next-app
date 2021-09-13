import Link from 'next/link'

export default function Home() {
  return (<>
  <h1>Hello 2021</h1>
  <p>please help me</p>
  <Link href="/">
    <a>Back to home</a>
  </Link>
  </>)
}
