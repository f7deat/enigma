import NavbarItem from "./components/navbar-item";

export default function Sidebar() {

    const data = [
        {
            icon: 'fas fa-image',
            url: '/'
        },
        {
            icon: 'fas fa-disease',
            url: '/draw'
        },
        {
            icon: 'fas fa-paragraph',
            url: '/shape'
        },
        {
            icon: 'fab fa-autoprefixer',
            url: '/text'
        }
    ]

    return (
        <div className="bg-gray-800 w-16 h-full flex-col">
            {
                data.map(x => <NavbarItem key={x.url} icon={x.icon} url={x.url} />)
            }
        </div>
    )
}