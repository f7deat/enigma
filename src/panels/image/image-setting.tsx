import { useState } from "react"

export default function ImageSetting() {

    const [brightness, setBrightness] = useState(0)

    return (
        <div>
            <div className="font-bold mb-3 text-lg">Image</div>
            <div className="mb-2">Brightness</div>
            <div className="w-full flex items-center">
                <input type="range" min="-100" max="100" value={brightness} className="flex-grow mr-2" onChange={(e: any) => setBrightness(e.target.value)}/>
                <input type="text" className="p-1 w-12 bg-gray-100 rounded text-center" value={brightness}/>
            </div>
        </div>
    )
}