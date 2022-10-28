import "./widget.scss";
import {KeyboardArrowUpOutlined, AccountBalanceOutlined, PersonOutlineOutlined, ShoppingCartOutlined, MonetizationOnOutlined} from '@mui/icons-material';


const Widget = ({ type }) => {
    let data;

    const amount = 100
    const diff = 20

    switch(type){
            case "user":
                data={
                    title:"USERS",
                    isMoney: false,
                    link: "See all Users",
                    icon: (
                    <PersonOutlineOutlined className="icon user"/>
                    )
                }
                break;
            case "order":
                data={
                    title:"ORDERS",
                    isMoney: false,
                    link: "See all orders",
                    icon: (
                    <ShoppingCartOutlined className="icon order"/>
                    )
                }
                break;
            case "earning":
                data={
                    title:"EARNINGS",
                    isMoney: true,
                    link: "View Net Earnings",
                    icon: (
                    <MonetizationOnOutlined className="icon earning"/>
                    )
                }
                break;
            case "balance":
                data={
                    title:"BALANCE",
                    isMoney: true,
                    link: "See Details",
                    icon: (
                    <AccountBalanceOutlined className="icon balance"/>
                    )
                }
                break;
                default:
                    break;
        }



  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "ksh"} {amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage negative">
                <KeyboardArrowUpOutlined/>
                {diff} %
            </div>
            {data.icon}
        </div>
    </div>
  )
};

export default Widget