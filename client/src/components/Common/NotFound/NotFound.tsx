import { Box, Button, Container, Typography } from "@mui/material";

import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import { images } from "../../../constants/image";
import { styled } from "@mui/material/styles";

// NotFound.propTypes = {
//   title: PropTypes.string.isRequired,
//   content: PropTypes.string,
//   route: PropTypes.string,
//   buttonContent: PropTypes.string.isRequired,
// };

// NotFound.defaultProps = {
//   title: "Sorry, page not found!",
//   content:
//     "Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your spelling.",
//   route: "/",
//   buttonContent: "Go to Home",
// };

export interface INotFoundProps {
  title: string;
  content: string;
  route: string;
  buttonContent: string;
}

NotFound.defaultProps = {
  title: "Sorry, page not found!",
  content:
    "Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your spelling.",
  route: "/",
  buttonContent: "Go to Home",
};

// ----------------------------------------------------------------------

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function NotFound({
  title,
  content,
  route,
  buttonContent,
}: INotFoundProps) {
  return (
    <Container>
      <ContentStyle sx={{ textAlign: "center", alignItems: "center" }}>
        <Typography variant="h3" paragraph>
          {title}
        </Typography>

        <Typography sx={{ color: "text.secondary" }}>{content}</Typography>

        <Box
          component="img"
          src={images.notfound}
          sx={{ height: 260, mx: "auto", my: { xs: 5, sm: 10 } }}
        />

        <Button
          to={route}
          size="large"
          variant="contained"
          component={RouterLink}
        >
          {buttonContent}
        </Button>
      </ContentStyle>
    </Container>
  );
}
