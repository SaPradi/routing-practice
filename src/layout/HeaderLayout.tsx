import './headerLayour.css';
import { Link, Outlet } from 'react-router-dom';
const HeaderLayout = () => {  
  return (
    <>
      <header>  
          <h1>Routing App</h1>

          <div>
            <Link to='/'> Home </Link>
            <Link to='/dashboard'> Dashboard </Link>
            <Link to='/contact'> Contact </Link>
            <Link to='/sdafdf'> Not found </Link>
          </div>
      </header>
      <Outlet /> 
    </>
  )
}

export default HeaderLayout;
