import Konva from "konva";
import React, { useState } from "react";
import { Layer, Stage, Transformer, Image } from "react-konva";
import { setTransformNode } from "./storages/actions/transformAction";
import store from "./storages/store";

export default function Board() {
    const [shape, setShape] = useState<any>()
    const [imageHtmlElement, setImageHtmlElement] = useState<HTMLImageElement>();
    const [textNode, setTextNode] = useState<any>([]);
    const handleClick = (e: Konva.KonvaEventObject<MouseEvent>) => {
        store.dispatch(setTransformNode(e.target))
    }

    const handleDeselect = (e: Konva.KonvaEventObject<MouseEvent>) => {
        const clickedOnEmpty = e.target === e.target.getStage();
        if (clickedOnEmpty) {
            store.dispatch(setTransformNode({}));
            setShape(null)
          }
    }

    store.subscribe(() => {
        setImageHtmlElement(store.getState().imageReducer.image);
        setTextNode(store.getState().textReducer.nodes);
        if (Object.keys(store.getState().TransformReducer.node).length > 0) {
            setShape(store.getState().TransformReducer.node);
        }
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
                {
                    textNode && textNode.map((x: any) => (x))
                }
            </Layer>
        </Stage>
    )
}