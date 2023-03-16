import * as React from "react";
import SettingsCard from "../Cards/SettingsCard";
import "./Settings.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Settings = () => {
  const categories = ["Privacy policy", "Terms of Service"];
  const information = ["Sharing our privacy policy violates the privacy of the privacy policy.", "All users will be issued a marine bird they'll be expected to carry at all time.  Oh wait, those are our Terns of service."]
  const generateAccordions = () => {
    return categories.map((item, i) => {
      return (
        <Accordion key={i}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{item}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {information[i]}
            </Typography>
          </AccordionDetails>
        </Accordion>
      );
    });
  };
  return (
    <div className="settings-container">
      <h1 id="repo-left">Settings</h1>
      <SettingsCard />
      <div className="accordions">
      {generateAccordions()}
      </div>
    </div>
  );
};

export default Settings;
