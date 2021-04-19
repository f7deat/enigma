import { useState } from "react";
import BasicModal from "../components/modals/basic-modal";
import store from "../storages/store";

export default function Header() {
    const [visibleNewProject, setVisibleNewProject] = useState(false)
    const handlePreview = () => {
    console.log(store.getState());
    };
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
          <div className="flex h-full border-t">
              <div className="w-1/4 bg-gray-100 h-full">
                  <div className="py-2 px-3 hover:bg-gray-200 font-medium cursor-pointer"><i className="fas fa-award mr-2"></i>Recommendation</div>
                  <div className="py-2 px-3 hover:bg-blue-200 font-medium cursor-pointer"><i className="fab fa-facebook text-blue-600 mr-2"></i>Facebook</div>
                  <div className="py-2 px-3 hover:bg-purple-200 font-medium cursor-pointer"><i className="fab fa-instagram text-purple-600 mr-2"></i>Instagram</div>
                  <div className="py-2 px-3 hover:bg-red-200 font-medium cursor-pointer"><i className="fab fa-accusoft text-red-600 mr-2"></i>Custom</div>
              </div>
              <div className="w-3/4 h-full"></div>
          </div>
      </BasicModal>
    </div>
  );
}
