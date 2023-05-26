import "./Categories.scss";

import * as React from "react";

import { Breadcrumbs, Link } from "@mui/material";

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

  React.useEffect(() => {
    dispatch(fetchPostByCategory("Lifestyle", { page: 1, limit: 2 }));
  }, [dispatch]);

  return (
    <>
      <ProfileHeader title="Katen." image={Images.logoBrand} color="#203656" />{" "}
      <div className="categories_wrapper">
        <div className="categories_head">
          <h1 className="header_title">{name}</h1>

          <Breadcrumbs className="post_breadcrumb" aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
            >
              {name}
            </Link>
          </Breadcrumbs>
        </div>

        <div className="categories_content">
          <CategoriesList name={`${name}`} />

          <div className="categories_right">
            <InnerWrapper />
          </div>
        </div>
      </div>
    </>
  );
}
