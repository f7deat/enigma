import Konva from "konva";
import { TextConfig } from "konva/types/shapes/Text";
import React, { useEffect, useRef, useState } from "react";
import { Layer, Stage, Transformer, Text } from "react-konva";
import { useSelector } from "react-redux";

export default function Board() {
    const shapeRef = useRef<any>(null)
    const [shapeId, setShapeId] = useState<any>()
    const trRef = useRef<any>();
    const listText = useSelector((state: any) => state.textReducer.listText)

    useEffect(() => {
        if (shapeId) {
          // we need to attach transformer manually
          trRef.current.nodes([shapeRef.current]);
          trRef.current.getLayer().batchDraw();
        }
      }, [shapeId]);

    const handleDeselect = (e: Konva.KonvaEventObject<MouseEvent>) => {
        const clickedOnEmpty = e.target === e.target.getStage();
        if (clickedOnEmpty) {
            setShapeId(null)
          }
    }

    const handleContextMenu = (e: any) => {
        e.evt.preventDefault();
        // Destroy Shape
        //e.target.destroy()
    }

    return (
        <Stage width={500} height={500} className="bg-white border border-blue-500" onMouseDown={handleDeselect}>
            <Layer>
                {
                    listText && listText.map((text: TextConfig, index: number) => (
                        <React.Fragment key={index}>
                            <Text id={text.id} ref={shapeRef} text={text.text} draggable onClick={() => setShapeId(text.id)} onContextMenu={handleContextMenu}/>
                            <Transformer ref={trRef} id={text.id} visible={text.id === shapeId}/>
                        </React.Fragment>
                    ))
                }
            </Layer>
        </Stage>
    )
}