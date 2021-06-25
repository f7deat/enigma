import { ImageConfig } from "konva/types/shapes/Image"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addImage } from "../storages/actions/imageAction"

export default function ImagePanel() {

    const [images, setImages] = useState<string[]>([])
    const dispatch = useDispatch()

    const handleUpload = (e: any) => {
        let url = e.currentTarget.files[0]
        let list = [...images, URL.createObjectURL(url)]
        setImages(list)
    }

    const handleClickImage = (value: any, id: string) => {
        var img = document.createElement('img');
        img.src = value;
        let imageConfig: ImageConfig = {
            image: img,
            id: id
        }
        dispatch(addImage(imageConfig))
    }

    return (
        <div>
            <div className="font-bold text-xl text-gray-700 mb-3">Photo</div>
            <label className="bg-blue-500 text-white block p-2 text-center font-bold cursor-pointer hover:bg-blue-600 shadow rounded" htmlFor="image">
                <input type="file" hidden accept="image/*" id="image" onChange={handleUpload} />
                <i className="fas fa-cloud-upload-alt mr-2"></i> Upload
            </label>
            <div className="overflow-auto mt-1" style={{ height: 'calc(100vh - 150px)' }}>
                {
                    images?.map((value, index) => (
                        <button className="mb-2 bg-gray-900" key={index}>
                            <img src={value} alt="img" onClick={() => handleClickImage(value, index.toString())} className="transition duration-700 hover:opacity-75"/>
                        </button>
                    ))
                }
            </div>
        </div>
    )
}