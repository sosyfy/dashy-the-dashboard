
import RootLayout from './../layouts/RootLayout';
import { useDrawer } from './../hooks/useDrawer';

function Home() {
   const {openDrawer} = useDrawer()
  return (
    <RootLayout>
      <main className='h-screen bg-red-600'>cvcjvicvic
       <button onClick={openDrawer}>open</button>
      </main>
    </RootLayout>
  )
}


export default Home;
