import "./navbar.scss"
import 
{Search, Language, DarkModeOutlined, FullscreenOutlined, NotificationsNoneOutlined, ChatBubbleOutlineOutlined, FormatListBulletedOutlined} 
from '@mui/icons-material';


function Navbar() {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="search...." />
          <Search/>
        </div>
        <div className="items">
          <div className="item">
            <Language className="icon"/>
            English
          </div>
          <div className="item">
            <DarkModeOutlined className="icon"/>
          </div>
          <div className="item">
            <FullscreenOutlined className="icon"/>
          </div>
          <div className="item">
            <NotificationsNoneOutlined className="icon"/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlined className="icon"/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <FormatListBulletedOutlined className="icon"/>
          </div>
          <div className="item">
            <img 
              src="https://www.nicepng.com/png/full/182-1829287_cammy-lin-ux-designer-circle-picture-profile-girl.png" 
              alt=""
              className="avatar" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar