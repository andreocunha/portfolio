import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document{
    render(){
        return(
            <Html lang="pt-BR">
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link rel="shortcut icon" href="/icon.png" type="image/jpg"/>
                    <meta name="description" content="Portfolio feito por André Oliveira Cunha"></meta>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}