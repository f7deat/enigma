import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BasicModal from "../components/modals/basic-modal";
import { setSize } from "../storages/actions/boardAction";
import store from "../storages/store";

export default function Header() {

  const dispatch = useDispatch()
  const board = useSelector((state: any) => state.boardReducer)

  const [visibleNewProject, setVisibleNewProject] = useState(false)
  const [width, setWidth] = useState(board.width)
  const [height, setHeight] = useState(board.height)

  const handlePreview = () => {
    console.log(store.getState());
  };

  const handleNew = () => {
    dispatch(setSize({width, height}))
    setVisibleNewProject(false)
  }

  return (
    <div>
      <div className="border-b bg-white flex items-center">
        <div className="px-4 py-3 flex-grow">
          <button type="button" className="px-2">
            <i className="fas fa-bars"></i>
          </button>
          <button
            type="button"
            className="px-2 font-medium hover:text-blue-700"
            onClick={() => setVisibleNewProject(true)}
          >
            New Design
          </button>
        </div>
        <div className="px-2">
          <button
            className="px-4 py-1 rounded bg-blue-500 hover:bg-blue-600 text-white font-bold"
            onClick={handlePreview}
          >
            <i className="fas fa-eye mr-2"></i>Preview
          </button>
        </div>
      </div>
      <BasicModal title="Start new design" visible={visibleNewProject} onCanel={() => setVisibleNewProject(false)}>
        <div className="md:flex md:h-full border-t">
          <div className="md:w-1/4 bg-gray-100 h-full rounded-bl">
            <div className="py-2 px-3 hover:bg-gray-200 font-medium cursor-pointer"><i className="fas fa-award mr-2"></i>Recommendation</div>
            <div className="py-2 px-3 hover:bg-blue-200 font-medium cursor-pointer"><i className="fab fa-facebook text-blue-600 mr-2"></i>Facebook</div>
            <div className="py-2 px-3 hover:bg-purple-200 font-medium cursor-pointer"><i className="fab fa-instagram text-purple-600 mr-2"></i>Instagram</div>
            <div className="py-2 px-3 hover:bg-red-200 font-medium cursor-pointer"><i className="fab fa-accusoft text-red-600 mr-2"></i>Custom</div>
          </div>
          <div className="md:w-3/4 h-full">
            <div className="p-4">
              <div className="mb-3 md:flex items-center justify-center">
                <input type="number" className="px-4 py-2 border rounded w-full" placeholder="Width" onChange={(e) => setWidth(e.target.value)} />
                <div className="px-2 text-center">x</div>
                <input type="number" className="px-4 py-2 border rounded w-full" placeholder="Height" onChange={(e) => setHeight(e.target.value)} />
              </div>
              <div></div>
              <div className="p-2 text-right">
                <button className="px-6 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600" onClick={() => handleNew()}><i className="fas fa-plus mr-2"></i>Create</button>
              </div>
            </div>
          </div>
        </div>
      </BasicModal>
    </div>
  );
}
