import Document,{Html,Head,Main,NextScript} from "next/document"

class MyDocument extends Document{
    render(){
        return(
            <Html lang="ko">
                <Head>
                    <meta name="title" content="깃허브 레퍼지토리"/>
                    <meta name="description" content="깃허브 레퍼지토리 리스트입니다."/>
                    {/* 구글폰트적용 */}
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                    <link href="https://fonts.googleapis.com/css2?family=Dongle:wght@300&family=Hahmlet:wght@300&family=Montserrat:wght@100&family=Noto+Sans+KR:wght@100;400;700&family=Poiret+One&display=swap" rel="stylesheet"/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument;