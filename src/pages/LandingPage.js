import avatar from '../assets/icons/cat.png';
import { useNavigate } from 'react-router-dom';
function LandingPage () {
    const navigate = useNavigate();
    const handleToDetail = () => {
        navigate("/details");
    };
    return(
        <div className="text-center font-mono">
            <p className="text-2xl font-bold uppercase">About me</p>
            <div className="flex justify-center">
                <img
                    src={avatar}
                    alt="avater"
                    className="w-[20%] my-3 bg-white rounded-full p-6"
                />
            </div>
            <p className="text-md mt-2 font-bold text-white mx-36">
            The standard Lorem Ipsum passage, used since the 1500s{"\n"}
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/ >
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/ >
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/ >
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/ >
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <br/>
            <button className="text-xl text-[#c41411] underline" 
            onClick={() => handleToDetail() }>NEXT</button>
        </div>
    );
}

export default LandingPage;