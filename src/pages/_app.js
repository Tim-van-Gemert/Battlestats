import '@/styles/globals.css'
import Header from '@/components/header'

export default function App({ Component, pageProps }) {
  return (
    <div className='flex flex-col h-screen w-screen items-center p-10 lg:p-0 bg-[#0F111C]'>
      <Header/>
      <Component {...pageProps} />
    </div>

  )
}
