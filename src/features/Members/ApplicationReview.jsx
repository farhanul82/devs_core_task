import React, { createContext, useEffect, useState } from "react";
import ApplicationReviewHeader from "../../components/ApplicationReview/ApplicationReviewHeader";

import { ApplicantReviewContext } from "../../contexts/ApplicantReviewContext";
import UserDetailsComponent from "../../components/ApplicationReview/UserDetailsComponent";
import UserDocuments from "../../components/ApplicationReview/UserDocuments";
import ApplicantDocument from "../../components/ApplicationReview/Document";
import ApplicantsList from "../../components/ApplicationReview/ApplicantsList";
import { dummy_data } from "../../Data";

const ApplicationReview = () => {
  const [applicantsData, setApplicantsData] = useState([]);
  const [checkedApplicant, setCheckedApplicant] = useState();
  const [applicantDocument, setApplicantDocument] = useState("");

  useEffect(() => {
    setApplicantsData([...dummy_data]);
  }, []);

  return (
    <ApplicantReviewContext.Provider
      value={{
        applicantsData,
        setApplicantsData,
        checkedApplicant,
        setCheckedApplicant,
        applicantDocument,
        setApplicantDocument,
      }}
    >
      <ApplicationReviewHeader />
      <div className="grid grid-cols-8 gap-4 my-4">
        <ApplicantsList />

        <UserDetailsComponent />

        <UserDocuments />

        <ApplicantDocument />
      </div>
    </ApplicantReviewContext.Provider>
  );
};

export default ApplicationReview;
