import { useLoaderData } from "react-router-dom";
import NewsCards from "./NewsCards";

export default function Center() {
  const { data } = useLoaderData();
  console.log(data);
  return (
    <div>
      {data?.map((news) => (
        <NewsCards
          key={news["_id"]}
          news={news}
        />
      ))}
    </div>
  );
}
