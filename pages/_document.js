import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="bg-[url('/bg.jpg')] bg-no-repeat bg-cover">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}