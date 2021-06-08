import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div>
            <div className="bg-gray-800 w-16 h-full flex-col">
                <div className="text-white w-full h-16 flex justify-center items-center hover:bg-gray-900 cursor-pointer">
                    <Link to="/"><i className="fas fa-image text-2xl"></i></Link>
                </div>
                <div className="text-white w-full h-16 flex justify-center items-center hover:bg-gray-900 cursor-pointer">
                    <i className="fas fa-disease text-2xl"></i>
                </div>
                <div className="text-white w-full h-16 flex justify-center items-center hover:bg-gray-900 cursor-pointer">
                    <i className="fas fa-paragraph text-2xl"></i>
                </div>
                <div className="text-white w-full h-16 flex justify-center items-center hover:bg-gray-900 cursor-pointer">
                    <Link to="/text"><i className="fab fa-autoprefixer text-2xl"></i></Link>
                </div>
            </div>
        </div>
    )
}