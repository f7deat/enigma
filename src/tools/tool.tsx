export default function Tool() {
    return (
        <div className="flex text-gray-700">
            <div className="flex text-sm flex-grow">
                <div className="pl-4 py-3 text-gray-400">
                    <i className="fas fa-undo"></i>
                </div>
                <div className="pl-4 py-3 text-gray-400">
                    <i className="fas fa-redo"></i>
                </div>
            </div>
            <div className="flex text-sm">
                <div className="pr-4 py-3 text-gray-400">
                    <i className="fas fa-search-plus"></i>
                </div>
                <div className="pr-4 py-3 text-gray-400">
                    <i className="fas fa-search-minus"></i>
                </div>
            </div>
        </div>
    )
}