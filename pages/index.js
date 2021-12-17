import Head from 'next/head';
// import the Sidebar component
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (

    <div className="">

      {/* next.js Head component */}
      <Head>
        <title>Twitter Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="border-2 border-white bg-black min-h-screen max-w-screen-2xl mx-auto flex">
        {/* defininng the broad structure of the project */}
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        {/* Widgets */}

        {/* Modal */}
      </main>

    </div>
  )
}
