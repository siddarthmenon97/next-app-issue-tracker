import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main>
      <h1>hello world</h1>
      <h1>{new Date().toLocaleTimeString()}</h1>
      <h1>
        <Link href='/users'>Users</Link>
      </h1>
      <h1>
        <Link href='/users/new'>New Users</Link>
      </h1>
      <ProductCard />
    </main>
  )
}
