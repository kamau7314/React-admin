import "./sidebar.scss"
import {Dashboard, PersonOutlineOutlined} from '@mui/icons-material';
import {Link} from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";



function Sidebar() {

  const {dispatch} = useContext(DarkModeContext)
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/">
        <div className="logo">RufusAdmin</div>
        </Link>        
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/">          
          <li>
            <Dashboard className="icon"/>
            <span>Dashboard</span>
          </li>
          </Link>
           <p className="title">lISTS</p>

           <Link to="/users">           
          <li>
            <PersonOutlineOutlined className="icon"/>
            <span>Users</span>
          </li>
          </Link>
          <Link to="/products">
          <li>
            <PersonOutlineOutlined className="icon"/>
            <span>Products</span>
          </li>
          </Link>
          <Link>
          <li>
            <PersonOutlineOutlined className="icon"/>
            <span>Orders</span>
          </li>
          </Link>
          <Link>
          <li>
            <PersonOutlineOutlined className="icon"/>
            <span>Delivery</span>
          </li>
          </Link>
          
          <p className="title">USEFUL LINKS</p>
          <li>
            <PersonOutlineOutlined className="icon"/>
            <span>Stats</span>
          </li>
          <li>
            <PersonOutlineOutlined className="icon"/>
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <PersonOutlineOutlined className="icon"/>
            <span>System Health</span>
          </li>
          <li>
            <PersonOutlineOutlined className="icon"/>
            <span>Logs</span>
          </li>
          <li>
            <PersonOutlineOutlined className="icon"/>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <PersonOutlineOutlined className="icon"/>
            <span>Profile</span>
          </li>
          <li>
            <PersonOutlineOutlined className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      
      <div className="bottom">
        <div 
          className="colorOption" 
          onClick={()=> dispatch({type: "LIGHT" })}
        ></div>
        <div 
          className="colorOption" 
          onClick={()=> dispatch({type: "DARK" })}
        ></div>
      </div>
    </div>
  )
}

export default Sidebar