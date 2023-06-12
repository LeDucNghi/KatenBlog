import "./Categories.scss";

import * as React from "react";

import { CategoriesBanner } from "../../components/Common/Banners/CategoriesBanner";
import { CategoriesList } from "../../features/filter/components/CategoriesList";
import { Images } from "../../constants";
import { InnerWrapper } from "../../widgets/InnerWrapper/InnerWrapper";
import { ProfileHeader } from "../../components/Common/Header/ProfileHeader";
import { fetchPostByCategory } from "../../features/addEditBlog/addEditThunk";
import { useAppDispatch } from "../../app/hooks";
import { useParams } from "react-router-dom";

export interface ICategoriesProps {}

export default function Categories(props: ICategoriesProps) {
  const { name } = useParams();
  const dispatch = useAppDispatch();

  const [type, setType] = React.useState("");

  React.useEffect(() => {
    dispatch(fetchPostByCategory(type, { page: 1, limit: 2 }));
  }, [dispatch, type]);

  return (
    <>
      <ProfileHeader
        handleTypeChange={setType}
        title="Katen."
        image={Images.logoBrand}
        color="#203656"
      />{" "}
      <div className="categories_wrapper">
        <CategoriesBanner categoriesName={type} />

        <div className="categories_content">
          <CategoriesList name={type} />

          <div className="categories_right">
            <InnerWrapper />
          </div>
        </div>
      </div>
    </>
  );
}
