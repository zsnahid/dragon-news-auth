import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

export default function LatestNews() {
  return (
    <div className="bg-gray-200 p-3 flex items-center gap-3 mb-3">
      <p className="bg-red-700 text-white py-2 px-5">Latest</p>
      <Marquee
        pauseOnHover={true}
        className="space-x-5 font-medium"
      >
        <Link to="/news">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis,
          natus.
        </Link>
        <Link to="/news">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis,
          natus.
        </Link>
        <Link to="/news">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis,
          natus.
        </Link>
      </Marquee>
    </div>
  );
}
