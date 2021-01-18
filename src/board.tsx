import React, { useState } from "react";
import { Circle, Layer, Rect, Stage, Transformer } from "react-konva";

export default function Board() {
    const [shape, setShape] = useState<any>(null)
    const handleClick = (e: any) => {
        setShape(e.currentTarget)
    }
    return (
        <Stage width={500} height={500} className="bg-white border border-blue-500">
            <Layer>
                <Rect width={50} height={50} x={50} y={50} fill="#009fdc" draggable onClick={handleClick} />
                <Circle x={200} y={200} stroke="black" radius={50} draggable onClick={handleClick} />
                {
                    shape && (
                        <Transformer node={shape}/>
                    )
                }
            </Layer>
        </Stage>
    )
}