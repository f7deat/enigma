import Konva from "konva";
import { ImageConfig } from "konva/types/shapes/Image";
import { TextConfig } from "konva/types/shapes/Text";
import React, { useEffect, useRef, useState } from "react";
import { Layer, Stage, Transformer, Text, Image } from "react-konva";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setImageAction } from "./storages/actions/imageAction";
import { setTextAction } from "./storages/actions/textAction";

export default function Board() {
    const history = useHistory()
    const shapeRef = useRef<any>(null)
    const [shapeId, setShapeId] = useState<any>()
    const trRef = useRef<any>();

    const listText = useSelector((state: any) => state.textReducer.listText)
    const listImage = useSelector((state: any) => state.imageReducer.listImage)
    const boardConfig = useSelector((state: any) => state.boardReducer)

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
    }

    const handleTextDbClick = () => {
        dispatch(setTextAction(shapeId))
        history.push('/text/edit')
    }

    function handleImageClick(id: string = '') {
        setShapeId(id)
    }

    const handleImageDbClick = () => {
        dispatch(setImageAction(shapeId))
        history.push('/image/setting')
    }

    return (
        <Stage width={boardConfig.width} height={boardConfig.height} className="bg-white border border-blue-500" onMouseDown={handleDeselect}>
            <Layer>
                {
                    listText?.map((text: TextConfig, index: number) => (
                        <React.Fragment key={index}>
                            <Text id={text.id} ref={shapeRef} text={text.text} draggable onClick={() => setShapeId(text.id)} onContextMenu={handleContextMenu} onDblClick={handleTextDbClick} />
                            <Transformer ref={trRef} id={text.id} visible={text.id === shapeId} />
                        </React.Fragment>
                    ))
                }
                {
                    listImage?.map((image: ImageConfig, index: number) => (
                        <React.Fragment key={index}>
                            <Image image={image.image} ref={shapeRef} draggable onClick={() => handleImageClick(image.id)} onContextMenu={handleContextMenu} onDblClick={handleImageDbClick} />
                            <Transformer visible={image.id === shapeId} ref={trRef}/>
                        </React.Fragment>
                    ))
                }
            </Layer>
        </Stage>
    )
}