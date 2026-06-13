import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Studio Silva Decorações - A vida é mais feliz com festa! Kits de balões e decorações para festas em geral." />
        <meta property="og:title" content="Studio Silva Decorações" />
        <meta property="og:description" content="A vida é mais feliz com festa! 🎉" />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
