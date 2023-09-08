import Head from "next/head";

export default function TagHead({title}){
    return (
        <Head>
            <title>{title}</title>
        </Head>
    )
}