import { TextConfig } from "konva/types/shapes/Text"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import { updateText } from "../../storages/actions/textAction"

const PanelTextEdit = () => {

    const [textConfig, setTextConfig] = useState<TextConfig>()
    const history = useHistory()
    const dispatch = useDispatch()

    const textId = useSelector((state: any) => state.textReducer.textId)
    const listText = useSelector((state: any) => state.textReducer.listText)

    useEffect(() => {
        const textConfigStore = listText.find((x: TextConfig) => x.id === textId);
        if (textConfigStore) {
            setTextConfig(textConfigStore)
        } else {
            console.error('text config not found!!!')
        }
    }, [listText, textId])

    function handleChange(value: string) {
        let newTextConfig = {...textConfig}
        newTextConfig.text = value
        dispatch(updateText(newTextConfig))
    }

    function handleSave() {
        history.push(`/text`)
    }

    return (
        <div>
            <div className="mb-2 font-medium">Text</div>
            <input type="text" className="px-4 py-2 bg-gray-100 w-full mb-3 rounded" defaultValue={textConfig?.text} onChange={(e: any) => handleChange(e.target.value)} />
            <div className="mb-2 font-medium">Font style</div>
            <div className="mb-4 text-sm">
                <div className="flex justify-between items-center">
                <label className="mr-2 font-bold"><input type="checkbox" /> Bold</label>
                <label className="mr-2 italic"><input type="checkbox" /> Italic</label>
                <label className="mr-2 underline"><input type="checkbox" /> Underline</label>
                </div>
            </div>
            <button className="px-6 py-2 bg-blue-500 text-white rounded font-medium" onClick={() => handleSave()}><i className="fas fa-save mr-2"></i>Save</button>
        </div>
    )
}

export default PanelTextEdit