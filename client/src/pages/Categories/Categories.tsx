import "./Categories.scss";

import * as React from "react";

import { Images, ProfileNavbarWidget } from "../../constants";
import { useNavigate, useParams } from "react-router-dom";

import { CategoriesBanner } from "../../components/Common/Banners/CategoriesBanner";
import { CategoriesList } from "../../features/filter/components/CategoriesList";
import { InnerWrapper } from "../../widgets/InnerWrapper/InnerWrapper";
import { ProfileHeader } from "../../components/Common/Header/ProfileHeader";
import { fetchPostByCategory } from "../../features/addEditBlog/addEditThunk";
import { useAppDispatch } from "../../app/hooks";

export interface ICategoriesProps {}

export default function Categories(props: ICategoriesProps) {
  const { name } = useParams<string>();
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
        navbarList={ProfileNavbarWidget.slice(0, 5)}
      />{" "}
      <div className="categories_wrapper">
        <CategoriesBanner categoriesName={name!} />

        <div className="categories_content">
          <CategoriesList name={name!} />

          <div className="categories_right">
            <InnerWrapper />
          </div>
        </div>
      </div>
    </>
  );
}
