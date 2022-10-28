import "./featured.scss";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import {CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

function Featured() {
  return (
    <div className="featured">
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVertOutlinedIcon fontSize="small"/>
        </div>
        <div className="bottom">
            <div className="featuredChart">
            <CircularProgressbar value={70} text="70%" strokeWidth={5}/>
            </div>
            <p className="title">Total Sales made today</p>
            <p className="amount">ksh 850</p>
            <p className="desc">Previous tranactions procesing. Last payments may not be included</p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                        <div className="resultAmount">ksh 300k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult negative">
                        <KeyboardArrowDownOutlinedIcon fontSize="small"/>
                        <div className="resultAmount">ksh 300k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                        <div className="resultAmount">ksh 300k</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured