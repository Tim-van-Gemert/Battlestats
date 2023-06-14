import '@/styles/globals.css'
import Header from '@/components/header'

export default function App({ Component, pageProps }) {
  return (
    <div className='flex flex-col relative min-h-screen min-w-screen h-[100%] w-[100%] text-white items-center p-10 lg:p-0 bg-[#0F111C]'>
      <Header/>
      <Component {...pageProps} />
    </div>

  )
}
