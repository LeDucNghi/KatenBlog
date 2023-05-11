import "./CustomAccordion.scss";

import * as React from "react";

import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";

import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { KatenBlogItems } from "../BlogItems/KatenBlogItems";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { PostTopicWidget } from "../../../models";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

export interface ICustomAccordionProps {
  topic: PostTopicWidget[];
}

export function CustomAccordion({ topic }: ICustomAccordionProps) {
  const [expanded, setExpanded] = React.useState<number | false>(0);

  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      {topic.map((topic, key) => {
        return (
          <Accordion
            key={key}
            expanded={expanded === topic.id}
            onChange={handleChange(topic.id)}
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
                ({topic.topicContent.slice(0, 3).length})
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {topic.topicContent.slice(0, 3).map((topic, index) => {
                return (
                  <KatenBlogItems
                    key={index}
                    direction="horizontal"
                    items={topic}
                    showBadge={false}
                    shape="circle"
                  />
                );
              })}
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
