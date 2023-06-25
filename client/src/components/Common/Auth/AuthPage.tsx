import "./AuthPage.scss";

import * as React from "react";

import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { Images } from "../../../constants/image";

export interface IAuthPageProps {
  brandTitle: string;
  formTitle: string;
  formSubtitle?: string;
  children: any;
}

export default function AuthPage({
  brandTitle,
  formTitle,
  formSubtitle,
  children,
}: IAuthPageProps) {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  React.useEffect(() => {
    if (token) {
      navigate(`/`);
    }
  }, [token, navigate]);

  return (
    <Box className="auth_container">
      <Box className="auth_brand">
        <Paper elevation={4} className="auth_brand_paper">
          <Typography variant="h4" className="auth_brand_title">
            {brandTitle}
          </Typography>

          <div className="auth_brand_logo">
            <img src={Images.logoBrand} alt="" />
          </div>
        </Paper>
      </Box>

      <Box className="auth_form">
        <Box className="auth_form_title">
          <Typography className="title" variant="h2">
            {formTitle}
          </Typography>

          {formSubtitle && (
            <Typography className="subtitle" variant="h4">
              {formSubtitle}
            </Typography>
          )}
        </Box>

        <Box className="auth_field">
          <Box className="auth_social">
            <Button className="auth_social_button" variant="outlined">
              <GoogleIcon />
            </Button>
            <Button className="auth_social_button" variant="outlined">
              <FacebookIcon />
            </Button>
          </Box>
          <Divider>Or</Divider>

          {children}
        </Box>
      </Box>
    </Box>
  );
}
