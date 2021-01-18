export default function Header() {
    return (
        <div className="border-b bg-white flex items-center">
            <div className="px-4 py-3 flex-grow"><i className="fas fa-bars"></i></div>
            <div className="px-2">
                <button className="px-4 py-1 rounded bg-blue-500 hover:bg-blue-600 text-white font-bold"><i className="fas fa-eye mr-2"></i>Preview</button>
            </div>
        </div>
    )
}