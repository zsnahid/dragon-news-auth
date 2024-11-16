import { NavLink, useLoaderData } from "react-router-dom";

export default function LeftNavbar() {
  const { data } = useLoaderData();
  return (
    <div>
      <ul>
        {data.news_category?.map((category) => (
          <li
            key={category.category_id}
            className="py-1 px-10 text-gray-600 font-medium hover:bg-gray-200 mb-3"
          >
            <NavLink to={`/category/${category.category_id}`}>
              {category.category_name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
