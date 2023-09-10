import logo from "../assets/icons/user.png";
import facebook from "../assets/icons/facebook.png";
import twitter from "../assets/icons/twitter.png";
import line from "../assets/icons/line.png";

const Navbar =() => {
    return(
        <div className="flex justify-between items-center">
        <img src = {logo} alt="logo" width ={50} className="cursor-pointer" />
        <ul className="hidden md:flex">
            <li className="px-2">
                <a href="https://www.google.co.th/?hl=th" target="_blank"></a>
                    <img src={facebook} alt="facebook"width={30} className="cursor-pointer" /> {" "}
            </li>

            <li className = "px-2">
            <a href="https://twitter.com/?lang=th" target="_blank"></a>
                <img src={twitter} alt="twitter"width={30} className="cursor-pointer" /> {" "}
            </li>

            <li className = "px-2">
            <a href="https://line.me/th/" target="_blank"></a>
                <img src={line} alt="line"width={30} className="cursor-pointer" /> {" "}
            </li>
        </ul>
        </div>
    );
};

export default Navbar;