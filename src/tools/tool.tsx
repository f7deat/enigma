import { useState } from "react"
import Crop from "../modals/crop"

export default function Tool() {

    const [isShowCrop, setIsShowCrop] = useState(false)

    const handleCropClick = () => {
        setIsShowCrop(true)
    }

    return (
        <div>
            <Crop isShowCrop={isShowCrop} setIsShowCrop={setIsShowCrop}/>
            <div className="flex text-gray-700">
                <div className="flex text-sm flex-grow">
                    <Item icon="fas fa-undo" />
                    <Item icon="fas fa-redo" />
                    <div className="pl-4 py-3 text-gray-600 hover:text-gray-700 cursor-pointer" onClick={handleCropClick}>
                        <i className="fas fa-crop"></i>
                    </div>
                    <Item icon="fas fa-fill-drip" />
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
        </div>
    )
}

const Item = (props: any) => {
    return (
        <div className="pl-4 py-3 text-gray-400">
            <i className={props.icon}></i>
        </div>
    )
}