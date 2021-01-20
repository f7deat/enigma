import { useState } from "react"
import { setImageStore } from "../storages/actions/imageAction"
import store from "../storages/store"

export default function ImagePanel() {

    const [images, setImages] = useState<string[]>([])

    const handleUpload = (e: any) => {
        let url = e.currentTarget.files[0]
        let list = [...images, URL.createObjectURL(url)]
        setImages(list)
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
            <div className="overflow-auto mt-1" style={{height: 'calc(100vh - 150px)'}}>
            {
                images && (
                    images.map((value) => (
                        <div className="mb-2" key={Math.floor(Math.random() * 100)}>
                            <img src={value} alt="" onClick={handleClickImage}/>
                        </div>
                    ))
                )
            }
            </div>
        </div>
    )
}