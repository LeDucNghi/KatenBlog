import "./AddEdtiBody.scss";

import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { Post, UserType } from "../../../../models";

import FacebookIcon from "@mui/icons-material/Facebook";
import { LoadingButton } from "@mui/lab";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";

export interface IAddEditBodyProps {
  values: Post;
  handleChange: any;
  handleBlur: any;
  touched: any;
  errors: any;
  userType: UserType;
  blogData: Post;
  isLoading: boolean;
}

export function AddEditBody({
  values,
  handleBlur,
  handleChange,
  touched,
  errors,
  userType,
  blogData,
  isLoading,
}: IAddEditBodyProps) {
  return (
    <Box className="addeditblog_body">
      <Box className="addeditblog_share_social">
        <Typography>Share</Typography>
        <Button className="social_button" variant="outlined">
          <FacebookIcon />
        </Button>
        <Button className="social_button" variant="outlined">
          <TwitterIcon />
        </Button>
        <Button className="social_button" variant="outlined">
          <PinterestIcon />
        </Button>
      </Box>

      <Box className="addedit_form">
        {userType.isGuest ? (
          <Typography className="addedit_input_field">
            {blogData?.content}
          </Typography>
        ) : (
          <>
            <TextField
              className="addedit_input_field"
              label="Content"
              variant="outlined"
              name="content"
              value={values.content}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.content && Boolean(errors.content)}
              helperText={touched.content && errors.content}
              multiline
              rows={10}
            />

            <LoadingButton
              // loading={isLoading}
              className="addedit_form_button"
              variant="contained"
              type="submit"
            >
              Create new post
            </LoadingButton>
          </>
        )}
      </Box>

      <Box className="addeditblog_advertise">
        <Paper elevation={5} className="advertise_container">
          <div className="advertise_img">
            <img
              src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
              alt=""
            />
          </div>

          <Typography className="advertise_title" variant="h3">
            Subscribe to Newsletter
          </Typography>

          <Typography className="advertise_subtitle" variant="h4">
            Far far away behind the word mountains far from.
          </Typography>

          <TextField
            id="outlined-basic"
            label="Enter email"
            variant="outlined"
          />

          <Button className="advertise_button" type="button">
            Subscribe
          </Button>
        </Paper>
      </Box>
    </Box>
  );
}
