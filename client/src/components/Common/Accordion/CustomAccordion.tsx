import "./CustomAccordion.scss";

import * as React from "react";

import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import { Post, PostTopicWidget } from "../../../models";

import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { BlogItems } from "../BlogItems/BlogItems";
import { BlogsSample } from "../../../mock";
import { Empty } from "../NotFound/Empty";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { selectPostList } from "../../../features/addEditBlog/addEditSlice";
import { styled } from "@mui/material/styles";
import { useAppSelector } from "../../../app/hooks";

export interface ICustomAccordionProps {
  topic: PostTopicWidget[];
}

export function CustomAccordion({ topic }: ICustomAccordionProps) {
  const postList = useAppSelector(selectPostList);

  const [expanded, setExpanded] = React.useState<number | false>(0);
  const [categoryPostList, setCategoryPostList] = React.useState<Post[]>([]);

  const handleChange =
    (panel: number, categories: string) =>
    (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);

      const filterPostList =
        postList.length > 0
          ? postList.filter((post) => post.categories === categories)
          : BlogsSample.filter((blog) => blog.categories === categories);

      setCategoryPostList(filterPostList);
    };

  const handleCalculateLength = (category: string) => {
    const calculateLength =
      postList.length > 0
        ? postList.filter((post) => post.categories === category)
        : BlogsSample.filter((blog) => blog.categories === category);

    return calculateLength.length;
  };

  return (
    <div>
      {topic.map((topic, key) => {
        return (
          <Accordion
            key={key}
            expanded={expanded === topic.id}
            onChange={handleChange(topic.id, topic.topicTitle)}
            className="accordion"
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              className="accordion_summary"
            >
              <Typography className="accordion_title">
                {topic.topicTitle}{" "}
              </Typography>
              <Typography className="accordion_count">
                ({handleCalculateLength(topic.topicTitle)})
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {categoryPostList.length === 0 ? (
                <Empty content="No one has posted anything in this category yet" />
              ) : (
                categoryPostList.map((topic, index) => {
                  return (
                    <BlogItems
                      id={`${topic.id}`}
                      key={index}
                      direction="horizontal"
                      items={topic}
                      showBadge={false}
                      shape="circle"
                      fontSize="13px"
                      style={{
                        margin: "1em 0",
                      }}
                    />
                  );
                })
              )}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));
