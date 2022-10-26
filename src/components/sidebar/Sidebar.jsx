import "./sidebar.scss"
import {Dashboard, PersonOutlineOutlined} from '@mui/icons-material';



function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <div className="logo">RufusAdmin</div>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <Dashboard className="icon"/>
            <span>Dashboard</span>
          </li>
           <p className="title">lISTS</p>
          <li>
            <PersonOutlineOutlined className="icon"/>
            <span>Users</span>
          </li>
          <li>
            <PersonOutlineOutlined className="icon"/>
            <span>Products</span>
          </li>
          <li>
            <PersonOutlineOutlined className="icon"/>
            <span>Orders</span>
          </li>
          <li>
            <PersonOutlineOutlined className="icon"/>
            <span>Delivery</span>
          </li>
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
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar