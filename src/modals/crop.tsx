export default function Crop(props: any) {
    return (
        <div className={`${props.isShowCrop ? 'flex justify-center items-center h-screen w-screen absolute top-0 left-0' : 'hidden'}`}>
            <div className="w-screen h-screen bg-gray-500 opacity-50 absolute z-10 top-0 left-0"></div>
            <div className="h-64 w-64 bg-white absolute z-20">
                <button className="px-3 py-2"><i className="fas fa-times" onClick={() => props.setIsShowCrop(false)}></i></button>
            </div>
        </div>
    )
}