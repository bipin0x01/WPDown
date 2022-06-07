import { ToastContainer } from "react-toastify";

export default function Header() {
  return (
    <div className="main-top cointainer h-halfscreen ">
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="flex flex-col justify-center h-full ">
        <h1 className="font-bold text-center font-im-fell m-auto">
          <span className="sm:text-8xl text-5xl">WPDOWN</span>
          <br />
          <span className="sm:text-4xl text-2xl">Watcha Theme!</span>
        </h1>
      </div>
    </div>
  );
}
