import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Shared/Footer/Footer'
import NavigationBar from '../Pages/Shared/NavigationBar/NavigationBar'
function Layout() {
  return (
    <div className='max-w-6xl mx-auto'>
      <NavigationBar />
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout