import "../../../pages/Categories/Categories.scss";

import {
  selectCategoryList,
  selectIsFetchingPostList,
  selectPaginate,
} from "../../addEditBlog/addEditSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";

import { BlogItems } from "../../../components/Common/BlogItems/BlogItems";
import { CustomPagination } from "../../../components/Common/Pagination/Pagination";
import { Empty } from "../../../components/Common/NotFound/Empty";
import { Loading } from "../../../components/Common/Loading/Loading";
import { fetchPostByCategory } from "../../addEditBlog/addEditThunk";

export interface ICategoriesListProps {
  name: string;
}

export function CategoriesList({ name }: ICategoriesListProps) {
  const categoriesPaginate = useAppSelector(selectPaginate);
  const dispatch = useAppDispatch();
  const categoryList = useAppSelector(selectCategoryList);

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
        {categoryList.length === 0 ? (
          <Empty content="There have not had any post in this category 😢 Please try another one 🤔" />
        ) : (
          categoryList.map((blogs, key) => {
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
          })
        )}
      </div>

      {categoryList.length !== 0 && (
        <div className="categories_paginate">
          <CustomPagination
            handlePageChange={handlePageChange}
            paginate={categoriesPaginate}
          />
        </div>
      )}
    </div>
  );
}
