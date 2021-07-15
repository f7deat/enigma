interface IModalProps {
  visible: boolean;
  onCanel: any;
  title: string;
}

const BasicModal: React.FunctionComponent<IModalProps> = (props) => {
  return (
    <div
      className={`${
        props.visible
          ? "flex justify-center items-center h-screen w-screen absolute top-0 left-0"
          : "hidden"
      }`}
    >
      <div className="w-screen h-screen bg-gray-500 opacity-50 absolute z-10 top-0 left-0"></div>
      <div className="h-full md:h-3/4 w-full md:w-1/2 bg-white absolute z-20 rounded shadow-lg">
        <div className="flex justify-between items-center px-3 py-1 text-gray-800">
          <div className="font-bold">{props.title}</div>
          <button
            className="p-2 transition duration-300 ease-in-out transform hover:rotate-90"
            onClick={props.onCanel}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="h-full" style={{height: 'calc(100% - 48px)'}}>{props.children}</div>
      </div>
    </div>
  );
};

export default BasicModal;
