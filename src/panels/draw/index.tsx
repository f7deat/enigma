import React from "react"
import Title from "../../components/title"

const DrawPanel: React.FC = () => {
    return (
        <div>
            <Title text="Draw" />
            <div>
                <button className="h-10 w-10 shadow bg-gray-500"></button>
            </div>
        </div>
    )
}

export default DrawPanel