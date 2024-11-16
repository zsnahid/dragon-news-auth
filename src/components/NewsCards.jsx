import { Button } from "@material-tailwind/react";
import { Rating } from "@smastrom/react-rating";
import { FaEye } from "react-icons/fa";
import { PiBookmarkSimple, PiShareNetwork } from "react-icons/pi";

export default function NewsCards( props = {} ) {
  const { news } = props || {};
  console.log(news);
  return (
    <div className="flex w-full p-4 flex-col rounded-lg bg-white shadow-sm border border-slate-200 mb-6">
      <div className="flex items-center gap-4 text-gray-800">
        <img
          src={news.author.img}
          alt={news.author.name}
          className="relative inline-block h-[58px] w-[58px] !rounded-full  object-cover object-center"
        />
        <div className="flex w-full flex-col">
          <div className="flex items-center justify-between">
            <h5 className="text-xl font-semibold text-slate-800">
              {news.author.name}
            </h5>
            <div className="flex items-center gap-3">
              <PiBookmarkSimple />
              <PiShareNetwork />
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-0.5">
            {news.author.published_date}
          </p>
        </div>
      </div>
      <div className="mt-6">
        <h5 className="font-semibold text-xl leading mb-5">{news.title}</h5>
        <img
          src={news.image_url}
          className="mb-5"
        />
        <p className="text-base text-slate-600 font-light leading-normal line-clamp-4">
          {news.details}
        </p>
        <Button
          variant="text"
          className="text-orange-600 p-0 mb-5"
        >
          Read More
        </Button>
        <hr className="mb-5" />
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Rating
              readOnly
              value={news.rating.number}
              style={{ maxWidth: 100 }}
            />
            <p className="text-sm text-gray-500"> {news.rating.badge} </p>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <span> {news.total_view} </span>
            <FaEye />
          </div>
        </div>
      </div>
    </div>
  );
}
