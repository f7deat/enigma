import { Link } from "react-router-dom";

type NavbarItemProps = {
    icon: string;
    url: string;
}

const NavbarItem: React.FC<NavbarItemProps> = (props) => {
    const { icon, url } = props
    return (
        <div className="text-white w-full h-16 flex justify-center items-center hover:bg-gray-900 cursor-pointer">
            <Link to={url}><i className={`${icon} text-2xl`}></i></Link>
        </div>
    )
}

export default NavbarItem