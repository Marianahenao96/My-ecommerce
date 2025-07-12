import { ScaleLoader } from "react-spinners";
import './loading.css';

const Loading = () => {
  return (
    <div className="loading" >
      <ScaleLoader   color= "#007BFF"/>
    </div>
  );
};

export default Loading;
