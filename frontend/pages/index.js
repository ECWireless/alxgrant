import Head from 'next/head'
import groq from 'groq'
import client from '../client'

const index = () => {
    return (
        <>
            <Head>
                <title>Alx Photography</title>
            </Head>
            <div style={{ height: '80rem' }}>Home Page</div>
        </>
    )
}

export default index
