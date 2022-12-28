
import Sidebar from '../sidebar/Sidebar'


export default function Layout({ children }) {
  return (
    <div className='outline-none relative'>
      <Sidebar />
      <main className='flex flex-col min-h-screen ml-[290px] '>
        <div className="w-full mr-auto ml-auto">
          {children}
        </div>
      </main>
    </div>
  )
}