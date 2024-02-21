import React from "react";
import Students from "../../features/Students";
import Associates from "../../features/Associates";
import EightYear from "../../features/EightYear";
import Fellow from "../../features/Fellow";
import { createBrowserRouter } from "react-router-dom";
import Members from "../../features/Members/Members";
import Applicants from "../../features/Members/Applicants";
import ApplicationReview from "../../features/Members/ApplicationReview";
import EligibleForMembership from "../../features/Members/EligibleForMembership";
import Exam from "../../features/Members/Exam";
import Paid from "../../features/Members/Paid";
import Interview from "../../features/Members/Interview";
import App from "../../App";

export const Routes2 = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Members /> },
      { path: "/students", element: <Students /> },
      { path: "/associates", element: <Associates /> },
      { path: "/8-year", element: <EightYear /> },
      { path: "/fellow", element: <Fellow /> },
      {
        path: "/members",
        element: <Members />,

        children: [
          { path: "applicants", element: <Applicants /> },
          { path: "application-review", element: <ApplicationReview /> },
          { path: "paid", element: <Paid /> },
          { path: "exam", element: <Exam /> },
          { path: "interview", element: <Interview /> },
          {
            path: "Eligible-for-membership",
            element: <EligibleForMembership />,
          },
        ],
      },
    ],
  },
]);

export default Routes2;
