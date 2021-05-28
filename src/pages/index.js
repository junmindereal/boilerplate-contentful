import Head from 'next/head'
import Homepage from '@/components/homepage/index'

export default function Home () {
  return (
    <div>
      <Head>
        <title>Boilerplate Contentful</title>
        <meta name='description' content='Boilerplate for websites using Contentful APIs' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Homepage />
      </main>
    </div>
  )
}
