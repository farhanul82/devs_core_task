import React, { useContext, useEffect, useState } from "react";
import { ApplicantReviewContext } from "../../contexts/ApplicantReviewContext";
import Tab from "../Shared/Tab/Tab";

const ApplicantDocument = () => {
  const { checkedApplicant, applicantDocument } = useContext(
    ApplicantReviewContext
  );

  const [documentFile, setDocumentFile] = useState("");

  useEffect(() => {
    if (checkedApplicant) {

      setDocumentFile(
        checkedApplicant?.documents?.find((item) => item?.isChecked)
      );
    }
  }, [checkedApplicant]);

  return (
    <div className=" lg:col-span-4 col-span-8">
      <Tab tabLabel="Document Preview">
        {documentFile?.preview_image ? (
          <div className="w-full h-[30rem] overflow-hidden">
            <img
              src={documentFile?.preview_image}
              alt={documentFile?.type}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <>
            <p className="text-center py-4">Please Select Document.!</p>
          </>
        )}
      </Tab>
    </div>
  );
};

export default ApplicantDocument;
