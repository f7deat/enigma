import { useEffect, useState } from "react"
import { useHistory } from "react-router"
import { setTextAction } from "../../storages/actions/textAction"
import store from "../../storages/store"

const PanelTextEdit = () => {

    const [text, setText] = useState('')
    const history = useHistory();

    useEffect(() => {
        setText(store.getState().textReducer.text);
    }, [])
    
    function handleChange(value:string) {
        store.dispatch(setTextAction(value))
    }

    function handleSave() {
        history.push(`/text`)
    }

    return (
        <div>
            <input type="text" className="px-4 py-2 bg-gray-100 w-full mb-2 rounded" defaultValue={text} onChange={(e: any) => handleChange(e.target.value)}/>
            <button className="px-6 py-2 bg-blue-500 text-white rounded font-medium"><i className="fas fa-save mr-2" onClick={() => handleSave()}></i>Save</button>
        </div>
    )
}

export default PanelTextEdit