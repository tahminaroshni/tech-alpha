import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-5 justify-center items-center py-20">
      <h2 className="headline text-2xl text-rose-500 font-medium">This page is not available!</h2>
      <div className="flex gap-5">
        <button onClick={() => navigate(-1)} className="bg-cyan-500 p-3 px-5 rounded-md text-cyan-50 font-medium hover:bg-slate-500 hover:text-slate-50 duration-300">Go Back</button>
        <button onClick={() => navigate('/')} className="hover:bg-cyan-500 p-3 px-5 rounded-md hover:text-cyan-50 font-medium bg-slate-500 text-slate-50 duration-300">Go Home</button>
      </div>
    </div>
  );
};

export default NotFound;