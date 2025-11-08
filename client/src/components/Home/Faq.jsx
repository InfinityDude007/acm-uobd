import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  Link,
} from "@mui/material";
import { Add, Remove }from "@mui/icons-material";
import AOS from "aos";
import "aos/dist/aos.css";

const FAQSection = () => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqLinkStyle = {
    display: "inline-block",
    textAlign: "left",
    textDecoration: "none",
    color: theme.palette.primary.main,
    textTransform: "none",
    fontWeight: 500,
    transition: "color 0.3s ease, transform 0.3s ease",
    transform: "translateY(0)",
    cursor: "pointer",
    "&:hover": {
        transform: "translateY(-2px)"
    },
  };

  const faqData = [
    {
      question: "What is the ACM?",
      answer:
        "ACM (Association for Computing Machinery) is the world's largest educational and scientific computing society. It brings together computing educators, researchers, and professionals to inspire dialogue, share resources, and address the field's challenges.",
    },
    {
      question: "Who can join the ACM Student Chapter?",
      answer:
        "Any student at the University of Birmingham, Dubai can join the ACM Student Chapter, regardless of their major or technical background. We welcome students from all disciplines who are interested in computing and technology.",
    },
    {
      question: "What are the benefits of joining the ACM Student Chapter?",
      answer:
        "Members enjoy access to networking events, workshops, coding competitions, career development opportunities, mentorship programs, and exclusive resources from ACM International.",
    },
    {
      question: "How do I become a member?",
      answer:
        <>
          It’s as simple as attending one of our events, stay tuned to {" "}
          <Link
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("socials")?.scrollIntoView({ behavior: "smooth" });
            }}
            sx={faqLinkStyle}
          >
            our socials
          </Link>{" "}
            or the{" "}
          <Link href="/events" sx={faqLinkStyle}>
            Events
          </Link>{" "}
          page to see what’s coming up. If you want to become a member of ACM International,{" "}
          <Link
            href="https://www.acm.org/membership/join"
            target="_blank"
            rel="noopener noreferrer"
            sx={faqLinkStyle}
          >
            read this.
          </Link>
        </>,
    },
    {
      question: "What kind of events does the ACM Student Chapter host?",
      answer:
        "We host a variety of events including technical workshops, guest speaker sessions, hackathons, coding competitions, study groups, and social networking events throughout the academic year.",
    },
    {
      question: "Do I need prior programming or technical skills to participate?",
      answer:
        "No prior experience is required! We welcome students at all skill levels and offer beginner-friendly workshops and resources to help you get started with programming and computer science concepts.",
    },
  ];

  const half = Math.ceil(faqData.length / 2);
  const left = faqData.slice(0, half);
  const right = faqData.slice(half);

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6} data-aos="fade-down">
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "2.5rem" },
              color: theme.palette.text.secondary,
              mb: 2,
            }}
          >
            Frequently Asked Questions
          </Typography>
          <Typography
            variant="body1"
            mx="auto"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: 900,
              lineHeight: 1.7,
              fontSize: "1.05rem",
            }}
          >
            Everything you need to know about the ACM Student Chapter. Can’t
            find the answer you’re looking for?{" "}
            <Link
              href="mailto:acmuobd@gmail.com"
              sx={faqLinkStyle}
            >
              Email us.
            </Link>
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },
            gap: { xs: 2, md: 4 },
          }}
        >
          <Box>
            {left.map((item, index) => (
              <Box
                key={index}
                data-aos="fade-right"
                data-aos-delay={index * 100}
                sx={{ mb: 2 }}
              >
                <Accordion
                  expanded={expanded === index}
                  onChange={handleChange(index)}
                  sx={{
                    backgroundColor: "transparent",
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: "12px !important",
                    boxShadow: "none",
                    transition: "all 0.3s ease",
                    "&:before": { display: "none" },
                    "&:hover": {
                      borderColor: theme.palette.primary.main,
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                    },
                    "&.Mui-expanded": {
                      borderColor: theme.palette.primary.main,
                      boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === index ? (
                        <Remove
                          sx={{
                            color: theme.palette.primary.main,
                            transition: "all 0.3s ease",
                          }}
                        />
                      ) : (
                        <Add
                          sx={{
                            color: theme.palette.text.secondary,
                            transition: "all 0.3s ease",
                          }}
                        />
                      )
                    }
                    sx={{
                      px: 2.5,
                      "& .MuiAccordionSummary-content": { margin: 0 },
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: "1.05rem",
                        color: theme.palette.text.secondary,
                      }}
                    >
                      {item.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      px: 2.5,
                      py: 2.5,
                      borderRadius: "0 0 12px 12px",
                      backgroundColor:
                        theme.palette.mode === "light"
                          ? "rgba(0,0,0,0.03)"
                          : "rgba(255,255,255,0.05)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "1.05rem",
                        color: theme.palette.text.secondary,
                        lineHeight: 1.7,
                      }}
                    >
                      {item.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Box>
            ))}
          </Box>

          <Box>
            {right.map((item, index) => {
              const idx = index + half;
              return (
                <Box
                  key={idx}
                  data-aos="fade-left"
                  data-aos-delay={idx * 100}
                  sx={{ mb: 2 }}
                >
                  <Accordion
                    expanded={expanded === idx}
                    onChange={handleChange(idx)}
                    sx={{
                      backgroundColor: "transparent",
                      border: `1px solid ${theme.palette.divider}`,
                      borderRadius: "12px !important",
                      boxShadow: "none",
                      transition: "all 0.3s ease",
                      "&:before": { display: "none" },
                      "&:hover": {
                        borderColor: theme.palette.primary.main,
                        transform: "translateY(-2px)",
                        boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                      },
                      "&.Mui-expanded": {
                        borderColor: theme.palette.primary.main,
                        boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded === idx ? (
                          <Remove
                            sx={{
                              color: theme.palette.primary.main,
                              transition: "all 0.3s ease",
                            }}
                          />
                        ) : (
                          <Add
                            sx={{
                              color: theme.palette.text.secondary,
                              transition: "all 0.3s ease",
                            }}
                          />
                        )
                      }
                      sx={{
                        px: 2.5,
                        "& .MuiAccordionSummary-content": { margin: 0 },
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 600,
                          fontSize: "1.05rem",
                          color: theme.palette.text.secondary,
                        }}
                      >
                        {item.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        px: 2.5,
                        py: 2.5,
                        borderRadius: "0 0 12px 12px",
                        backgroundColor:
                          theme.palette.mode === "light"
                            ? "rgba(0,0,0,0.03)"
                            : "rgba(255,255,255,0.05)",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "10.5rem",
                          color: theme.palette.text.secondary,
                          lineHeight: 1.7,
                        }}
                      >
                        {item.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FAQSection;
