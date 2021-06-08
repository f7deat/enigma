import { useState } from "react"

const Zoom = () => {
    const [zoomPanelVisible, setZoomPanelVisible] = useState(true)
    const [zoomPercent, setZoomPercent] = useState(100)

    function setZoom(percent:number) {
        setZoomPercent(percent)
        setZoomPanelVisible(true)
    }

    function zoomIn(zoomType:boolean) {
        if (zoomType) {
            setZoomPercent(zoomPercent + 10)
        } else {
            setZoomPercent(zoomPercent - 10)
        }
    }

    return (
        <div className="flex text-sm">
            <div className="px-2 py-3 text-gray-400 cursor-pointer hover:text-blue-500" onClick={() => zoomIn(false)}>
                <i className="fas fa-search-minus"></i>
            </div>
            <div className="px-2 py-3 font-medium text-gray-700 cursor-pointer relative">
                <div onClick={() => setZoomPanelVisible(!zoomPanelVisible)}>{zoomPercent}%</div>
                <div className="absolute bg-white mt-1 rounded" style={{right: -10}} hidden={zoomPanelVisible}>
                    <div className="px-4 py-2 hover:text-blue-500" onClick={() => setZoom(50)}>50%</div>
                    <div className="px-4 py-2 hover:text-blue-500" onClick={() => setZoom(75)}>75%</div>
                    <div className="px-4 py-2 hover:text-blue-500" onClick={() => setZoom(100)}>100%</div>
                    <div className="px-4 py-2 hover:text-blue-500" onClick={() => setZoom(125)}>125%</div>
                    <div className="px-4 py-2 hover:text-blue-500" onClick={() => setZoom(150)}>150%</div>
                </div>
            </div>
            <div className="px-2 py-3 text-gray-400 cursor-pointer hover:text-blue-500" onClick={() => zoomIn(true)}>
                <i className="fas fa-search-plus"></i>
            </div>
        </div>
    )
}

export default Zoom