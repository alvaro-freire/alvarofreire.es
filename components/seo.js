import Head from "next/head"

function Seo() {
  return (
    <Head>
      <title>Álvaro Freire — Software Developer</title>
      <meta name="description" content="Welcome to my personal portfolio" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <style>
        @import url("https://fonts.googleapis.com/css2?family=Secular+One&display=swap");
      </style>
    </Head>
  )
}

export default Seo