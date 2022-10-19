import { addText } from "../storages/actions/textAction";
import { useDispatch } from "react-redux";
import { TextConfig } from "konva/types/shapes/Text";

const TextPanel: React.FC = () => {

    const dispatch = useDispatch();

    const handleTextClick = (e: any) => {
        let style = e.target.ownerDocument.defaultView.getComputedStyle(e.target, null);
        let text: TextConfig = {
            id: Math.random().toString(36).substring(7),
            text: e.target.innerText,
            fontFamily: style.fontFamily,
            fontSize: Number(style.fontSize.match(/\d+/)[0])
        }
        dispatch(addText(text))
    }

    return (
        <div>
            <div className="font-bold text-xl text-gray-700 mb-3">Text</div>
            <div className="p-2 text-xl">
                <div className="mb-2">
                    <button className="font-bold" onClick={handleTextClick}>Bold</button>
                </div>
                <div className="mb-2">
                    <button className="font-bold italic" onClick={handleTextClick}>Bold Italic</button>
                </div>
                <div className="mb-2">
                    <button onClick={handleTextClick}>Normal</button>
                </div>
                <div className="mb-2">
                    <button onClick={handleTextClick} className="italic">Normal Italic</button>
                </div>
            </div>
        </div>
    )
}

export default TextPanel