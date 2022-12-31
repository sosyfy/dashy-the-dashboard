
import Sidebar from '../components/navs/Sidebar';
import cn from 'classnames';
import MobileMenu from '../components/navs/MobileMenu';

export default function RootLayout({ children, contentClassName }) {
  return (
    <div className='outline-none'>
      <Sidebar className="hidden xl:block" />
      <MobileMenu className="xl:hidden" />
      <main
        className={cn(
          'min-h-screen lg:px-8 xl:pb-24 3xl:px-10 3xl:pt-2.5',
          contentClassName
        )}
      >
        {children}
      </main>
    </div>
  )
}