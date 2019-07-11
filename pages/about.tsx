import NextSeo from 'next-seo'
import Link from 'next/link'

export default () => (<div>
  <NextSeo
    config={{
      title: 'About | Devero Studio'
    }}
  />

  <Link href='/'>
    <a>back home</a>
  </Link>
</div>)
