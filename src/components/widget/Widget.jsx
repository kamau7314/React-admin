import "./widget.scss";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

function Widget() {
  return (
    <div className="widget">
        <div className="left">
            <span className="title">Users</span>
            <span className="counter">23121312</span>
            <span className="link">See all users</span>
        </div>
        <div className="right">
            <div className="percentage">
                <KeyboardArrowUpOutlinedIcon/>
                20 %
            </div>
            <PersonOutlineOutlinedIcon className="icon"/>
        </div>
    </div>
  )
}

export default Widget