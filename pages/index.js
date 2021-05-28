import Head from 'next/head'
import Image from 'next/image'

export default function Home () {
  return (
    <div>
      <Head>
        <title>Boilerplate Contentful</title>
        <meta name='description' content='Boilerplate for websites using Contentful APIs' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1 className='text-xl'>Hello World</h1>
      </main>
    </div>
  )
}
