//React Router Dom
import { Link } from "react-router-dom";
// Mui Icons
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
//Images
import En from '../../img/en.png'
//Scss 
import './navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src={En} alt="" />
            <KeyboardArrowDownIcon/>
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon/>
          </div>
          <div className="item">
            <Link to='/products/1'>Women</Link>
          </div>
          <div className="item">
            <Link to='/products/2'>Men</Link>
          </div>
          <div className="item">
            <Link to='/products/3'>Children</Link>
          </div>
        </div>
        <div className="center">
          <Link to='/'> BATU-STORE</Link>
        </div>
        <div className="right">
        <div className="item">
          <Link to='/'>Homepage</Link>
        </div>
        <div className="item">
          <Link to='/'>About</Link>
        </div>
        <div className="item">
          <Link to='/'>Contact</Link>
        </div>
        <div className="item">
          <Link to='/'>Stores</Link>
        </div>
        <div className="icons">
          <SearchIcon/>
          <PersonOutlineOutlinedIcon/>
          <FavoriteBorderOutlinedIcon/>
          <div className="cartIcon">
          <ShoppingCartOutlinedIcon/>
          <span>0</span>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
