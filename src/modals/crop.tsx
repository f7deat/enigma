import { useState } from "react"
import store from "../storages/store"

export default function Crop(props: any) {

    const [image, setImage] = useState('')

    function handleUndo() {

    }

    store.subscribe(() => {
        setImage(store.getState().imageReducer.image.currentSrc)
    })

    return (
        <div className={`${props.isShowCrop ? 'flex justify-center items-center h-screen w-screen absolute top-0 left-0' : 'hidden'}`}>
            <div className="w-screen h-screen bg-gray-500 opacity-50 absolute z-10 top-0 left-0"></div>
            <div className="h-3/4 w-1/2 bg-white absolute z-20 rounded shadow-lg">
                <div className="flex justify-between items-center px-3 pt-2 text-gray-600">
                    <div className="font-bold">
                        CROP IMAGE
                    </div>
                    <button className="p-2 transition duration-300 ease-in-out transform hover:rotate-90" onClick={() => props.setIsShowCrop(false)}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                <div className="px-2 h-full">
                    <div className="border border-gray-200 rounded" style={{ height: 'calc(100% - 150px)' }}>
                        <div className="bg-gray-100 rounded p-2 text-sm text-gray-600">
                            <button onClick={() => handleUndo()}><i className="fas fa-undo px-2"></i></button>
                            <button><i className="fas fa-redo px-2"></i></button>
                        </div>
                        <div className="p-4 flex justify-center" style={{height: 'calc(100% - 36px)'}}>
                            { <img src={image} alt=""/> }
                        </div>
                    </div>
                    <div className="text-right mt-4">
                        <button className="text-gray-600 rounded font-medium px-6 py-2 mr-2 hover:text-gray-700" onClick={() => props.setIsShowCrop(false)}>Cancel</button>
                        <button className="bg-blue-500 text-white rounded font-medium px-6 py-2 hover:bg-blue-600"><i className="fas fa-crop"></i> Crop</button>
                    </div>
                </div>
            </div>
        </div>
    )
}