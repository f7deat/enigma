import { useState } from "react"
import { setImageStore } from "../storages/actions/imageAction"
import store from "../storages/store"

export default function ImagePanel() {

    const [image, setImage] = useState('')

    const handleUpload = (e: any) => {
        let url = e.currentTarget.files[0]
        setImage(URL.createObjectURL(url))
    }

    const handleClickImage = (e: any) => {
        store.dispatch(setImageStore(e.currentTarget))
    }

    return (
        <div>
            <div className="font-bold text-xl text-gray-700 mb-3">Photo</div>
            <label className="bg-blue-500 text-white block p-2 text-center font-bold cursor-pointer hover:bg-blue-600 shadow rounded" htmlFor="image">
                <input type="file" hidden accept="image/*" id="image" onChange={handleUpload} />
                <i className="fas fa-cloud-upload-alt mr-2"></i> Upload
            </label>
            <div className="mt-3">
                <img src={image} alt="" onClick={handleClickImage}/>
            </div>
        </div>
    )
}