import React from "react"
import { Line } from "react-konva"

type DrawNodeProps = {
    isDrawing: boolean;
    lines: any;
}

const DrawNode: React.FC<DrawNodeProps> = (props) => {
    return (
        <React.Fragment>
            {props.lines.map((line: any, i: number) => (
            <Line
              key={i}
              points={line.points}
              stroke="#df4b26"
              strokeWidth={5}
              tension={0.5}
              lineCap="round"
              lineJoin="round"
              globalCompositeOperation={
                'source-over'
              }
            />
          ))}
        </React.Fragment>
    )
}

export default DrawNode