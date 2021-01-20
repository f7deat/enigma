import Konva from "konva";
import React, { useState } from "react";
import { Layer, Stage, Transformer, Image } from "react-konva";
import store from "./storages/store";

export default function Board() {
    const [shape, setShape] = useState<any>(null)
    const [imageHtmlElement, setImageHtmlElement] = useState<HTMLImageElement>()
    const handleClick = (e: Konva.KonvaEventObject<MouseEvent>) => {
        setShape(e.target)
    }

    const handleDeselect = (e: Konva.KonvaEventObject<MouseEvent>) => {
        const clickedOnEmpty = e.target === e.target.getStage();
        if (clickedOnEmpty) {
            setShape(null);
          }
    }

    store.subscribe(() => {
        setImageHtmlElement(store.getState().imageReducer.image)
    })

    return (
        <Stage width={500} height={500} className="bg-white border border-blue-500" onMouseDown={handleDeselect}>
            <Layer>
                {
                    imageHtmlElement && <Image image={imageHtmlElement} x={100} y={100} draggable onClick={handleClick} />
                }
                {
                    shape && <Transformer node={shape} />
                }
            </Layer>
        </Stage>
    )
}