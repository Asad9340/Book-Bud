import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Shared/Footer/Footer'
import NavigationBar from '../Pages/Shared/NavigationBar/NavigationBar'
function Layout() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className='m-4'>
        <NavigationBar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default Layout