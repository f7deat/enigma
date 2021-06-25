import Konva from "konva";
import { TextConfig } from "konva/types/shapes/Text";
import React, { useEffect, useRef, useState } from "react";
import { Layer, Stage, Transformer, Text } from "react-konva";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setTextAction } from "./storages/actions/textAction";

export default function Board() {
    const history = useHistory()
    const shapeRef = useRef<any>(null)
    const [shapeId, setShapeId] = useState<any>()
    const trRef = useRef<any>();
    const listText = useSelector((state: any) => state.textReducer.listText)
    const dispatch = useDispatch();

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

    const handleTextDbClick = () => {
        history.push('/text/edit')
        dispatch(setTextAction(shapeId))
        console.log(shapeId)
    }

    return (
        <Stage width={500} height={500} className="bg-white border border-blue-500" onMouseDown={handleDeselect}>
            <Layer>
                {
                    listText && listText.map((text: TextConfig, index: number) => (
                        <React.Fragment key={index}>
                            <Text id={text.id} ref={shapeRef} text={text.text} draggable onClick={() => setShapeId(text.id)} onContextMenu={handleContextMenu} onDblClick={handleTextDbClick}/>
                            <Transformer ref={trRef} id={text.id} visible={text.id === shapeId}/>
                        </React.Fragment>
                    ))
                }
            </Layer>
        </Stage>
    )
}