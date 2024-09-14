import { Bars } from "react-loader-spinner";
const Loader = () => {
  return (
    <div className="relative flex w-full items-center justify-center ">
      <Bars
        height={21}
        width={24}
        color="white"
        ariaLabel="bars-loading"
        //
        visible={true}
      />
    </div>
  );
};

export default Loader;
