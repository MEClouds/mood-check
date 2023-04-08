import React, { useContext, useState } from "react";
import {
  Button,
  Radio,
  FormControlLabel,
  Card,
  CardContent,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
} from "@mui/material";
import { LanguageContext } from "../context/LanguageContext";

function BurnsChecklist() {
  const { questions, toggleLanguage, direction } = useContext(LanguageContext);
  const [score, setScore] = useState(0);
  const [isOpen, setOpen] = useState(false);
  // Handle the score calculation when the user submits the form
  const handleSubmit = (e) => {
    e.preventDefault();
    const newScore = updatedQuestions.reduce((acc, cur) => acc + cur.value, 0);
    setScore(newScore);
    setOpen(true);
  };

  const [updatedQuestions, setQuestions] = useState(
    questions.map((q) => ({ ...q, value: null }))
  );

  // Handle changes to a question's value
  const handleValueChange = (index, newValue) => {
    const newQuestions = [...updatedQuestions];
    newQuestions[index].value = newValue === null ? 0 : newValue;
    setQuestions(newQuestions);
  };

  // Check if there are unanswered questions
  const hasUnansweredQuestions = updatedQuestions.some((q) => q.value === null);

  // Calculate the level of depression based on the total score
  const getDepressionLevel = () => {
    if (score >= 0 && score <= 5) {
      return "no depression";
    } else if (score >= 6 && score <= 10) {
      return "normal but unhappy";
    } else if (score >= 11 && score <= 25) {
      return "mild depression";
    } else if (score >= 26 && score <= 50) {
      return "moderate depression";
    } else if (score >= 51 && score <= 75) {
      return "severe depression";
    } else {
      return "extreme depression";
    }
  };
  // Render the checklist form
  return (
    <div
      style={{
        padding: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        background: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(10px)",
      }}
    >
      <Card
        variant="outlined"
        style={{
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          borderRadius: "12px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <Button
            variant="contained"
            color="warning"
            onClick={toggleLanguage}
            style={{}}
          >
            {direction === "rtl" ? "English" : "اللغة العربية"}
          </Button>
        </div>
        <CardContent>
          <form onSubmit={handleSubmit} style={{ direction }}>
            {updatedQuestions.map((q, i) => (
              <Card key={i} style={{ marginBottom: "12px" }}>
                <CardContent>
                  <Typography>
                    {q[direction !== "rtl" ? "en" : "ar"]}
                  </Typography>
                  {[0, 1, 2, 3, 4].map((value) => (
                    <FormControlLabel
                      key={value}
                      value={value}
                      control={<Radio />}
                      label={
                        direction === "rtl"
                          ? [
                              "لا شيء على الإطلاق",
                              "إلى حد ما",
                              "متوسطة",
                              "كثيراً",
                              "بشكل كبير",
                            ][value]
                          : [
                              "Not at all",
                              "Somewhat",
                              "Moderately",
                              "A lot",
                              "Extremely",
                            ][value]
                      }
                      checked={q.value === value}
                      onChange={() => handleValueChange(i, value)}
                    />
                  ))}
                </CardContent>
              </Card>
            ))}
            <Button
              disabled={hasUnansweredQuestions}
              type="submit"
              variant="contained"
              color="primary"
            >
              Calculate
            </Button>

            <p>Your depression score is: {score}</p>
          </form>
        </CardContent>
      </Card>
      <Dialog open={isOpen} onClose={() => setOpen(false)}>
        <DialogTitle>Your depression score is: {score}</DialogTitle>
        <DialogContent>
          <Typography>
            Your level of depression is: {getDepressionLevel()}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default BurnsChecklist;
