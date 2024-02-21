import React, { useContext } from "react";
import { ApplicantReviewContext } from "../../contexts/ApplicantReviewContext";
import Tab from "../Shared/Tab/Tab";
import CheckboxWithText from "../Shared/CheckboxText/CheckboxText";
import { randomId } from "../../utils";

const UserDetailsComponent = () => {
  const { checkedApplicant } = useContext(ApplicantReviewContext);
  return (
    <div className="md:col-span-4 lg:col-span-1 sm:col-span-4 col-span-8">
      <Tab tabLabel="User Details">
        {checkedApplicant ? (
          <div className="flex flex-col justify-center items-start p-4">
            <img src={checkedApplicant?.user_image} loading="lazy" />

            <p className="text-red-500 !my-4">User Information</p>

            <CheckboxWithText
              id={randomId}
              label={checkedApplicant?.name}
              preLabel="Full Name"
              isDisableCheckbox={true}
              classProps="px-2 py-2 border-b border-gray-300 w-full"
            />

            <CheckboxWithText
              id={randomId}
              label={checkedApplicant?.date_of_birth}
              preLabel="Date of Birth"
              isDisableCheckbox={true}
              classProps="px-2 py-2 border-b border-gray-300 w-full"
            />

            <CheckboxWithText
              id={randomId}
              label={checkedApplicant?.gender}
              preLabel="Gender"
              isDisableCheckbox={true}
              classProps="px-2 py-2 border-b border-gray-300 w-full"
            />

            <CheckboxWithText
              label={checkedApplicant?.blood_group}
              id={randomId}
              preLabel="Blood Group"
              isDisableCheckbox={true}
              classProps="px-2 py-2 border-b border-gray-300 w-full"
            />

            <CheckboxWithText
              label={checkedApplicant?.nationality}
              preLabel="Applicant's National"
              id={randomId}
              isDisableCheckbox={true}
              classProps="px-2 py-2 w-full"
            />
          </div>
        ) : (
          <p className="text-center py-4">No Data.!</p>
        )}
      </Tab>
    </div>
  );
};

export default UserDetailsComponent;
