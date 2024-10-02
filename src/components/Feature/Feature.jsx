
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
const Feature = ({feature}) => {
    return (
        <div>
            <ul>
               <p className="flex items-center ml-2 gap-4"> <BsFillArrowUpRightCircleFill  className=""/>{feature}</p>
            </ul>
        </div>
    );
};

export default Feature;