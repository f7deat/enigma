import { Title } from "../../components"

const ShapePanel: React.FC = () => {
    return (
        <div>
            <Title text="Shape" />
            <div className="flex gap-4">
                <button className="border w-10 h-10 hover:bg-slate-200"></button>
                <button className="rounded-full w-10 h-10 border hover:bg-slate-200"></button>
            </div>
        </div>
    )
}

export default ShapePanel