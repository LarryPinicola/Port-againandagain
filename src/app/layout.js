import Navbar from '@/components/Navbar'
import './globals.css'


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{scrollBehavior:"smooth"}}>
      <body className=''>
        <Navbar/>
        {children}</body>
    </html>
  )
}