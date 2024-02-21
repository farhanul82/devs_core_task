import React, { useContext, useEffect } from "react";
import { dummy_data } from "../../Data"; // Importing dummy data
import CheckboxWithText from "../Shared/CheckboxText/CheckboxText"; // Importing checkbox component
import Tab from "../Shared/Tab/Tab"; // Importing tab component
import { ApplicantReviewContext } from "../../contexts/ApplicantReviewContext"; // Importing context
import { handleFindCheckedData } from "../../utils"; // Importing utility function

const ApplicantsList = () => {
  // Accessing context to manage checked applicants
  const { setCheckedApplicant, applicantsData, setApplicantsData } = useContext(ApplicantReviewContext);

  // Effect to update checked applicant when applicantsData changes
  useEffect(() => {
    const filterCheckedData = applicantsData?.find((item) => item?.isChecked);
    setCheckedApplicant(filterCheckedData);
  }, [applicantsData]);

  // Function to handle checked data
  const handleCheckedData = (checkedId) => {
    // Update checked status in the dummy data
    const changedCheckedData = applicantsData.map((item) => ({
      ...item,
      isChecked: item.id === checkedId,
    }));

    // Update applicantsData with the new checked status
    setApplicantsData(changedCheckedData);
    
    // Update checked applicant in the context
    setCheckedApplicant(handleFindCheckedData(checkedId));
  };

  return (
    <div className="col-span-8 lg:col-span-1 custom-scrollbar">
      {/* Tab with label "Applicants" */}
      <Tab tabLabel="Applicants">
        {/* Container for applicant list */}
        <div className="lg:block flex justify-start items-center lg:overflow-hidden overflow-x-scroll w-full">
          {/* Check if applicantsData exists */}
          {applicantsData?.length !== 0 ? (
            // If data exists, map through it
            applicantsData?.map((item, index) => (
              <div
                key={item?.id}
                className={`py-2 px-[5px] ${
                  applicantsData?.length - 1 === index ? "" : "border-r"
                }  border-slate-300`}
              >
                {/* Checkbox component for each applicant */}
                <CheckboxWithText
                  label={item?.name}
                  id={item?.id}
                  isChecked={item?.isChecked}
                  checkboxIconClass="mt-1"
                  onChecked={(checkedId) => handleCheckedData(checkedId)}
                />
              </div>
            ))
          ) : (
            // If no data, display a message
            <p className="text-center py-4">No Data.!</p>
          )}
        </div>
      </Tab>
    </div>
  );
};

export default ApplicantsList;
