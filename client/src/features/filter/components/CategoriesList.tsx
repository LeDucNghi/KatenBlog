import "../../../pages/Categories/Categories.scss";

import {
  selectCategoryList,
  selectPaginate,
} from "../../addEditBlog/addEditSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";

import { BlogItems } from "../../../components/Common/BlogItems/BlogItems";
import { CustomPagination } from "../../../components/Common/Pagination/Pagination";
import { fetchPostByCategory } from "../../addEditBlog/addEditThunk";
import { useNavigate } from "react-router-dom";

export interface ICategoriesListProps {
  name: string;
}

export function CategoriesList({ name }: ICategoriesListProps) {
  const categoriesPaginate = useAppSelector(selectPaginate);
  const dispatch = useAppDispatch();
  const categoryList = useAppSelector(selectCategoryList);
  const navigate = useNavigate();

  const handlePageChange = (value: number) => {
    dispatch(
      fetchPostByCategory(name, {
        page: value,
        limit: categoriesPaginate.limit,
      })
    );
  };

  return (
    <div className="categories_left">
      <div className="categories_list">
        {categoryList.map((blogs, key) => {
          return (
            <BlogItems
              key={key}
              items={blogs}
              direction="vertical"
              isThumbedNail={false}
              showBadge={false}
              style={{
                width: "45%",
              }}
              id={`${blogs.id}`}
            />
          );
        })}
      </div>

      <div className="categories_paginate">
        <CustomPagination
          handlePageChange={handlePageChange}
          paginate={categoriesPaginate}
        />
      </div>
    </div>
  );
}
