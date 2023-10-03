import Image from 'next/image'

export default function Home() {
  const gladys = 45
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <h1 className="text-4xl font-bold text-gray-900">age = {gladys} </h1>
    </main>
  )
}
