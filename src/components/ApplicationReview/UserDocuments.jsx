import React, { useContext } from "react";
import Tab from "../Shared/Tab/Tab";
import { ApplicantReviewContext } from "../../contexts/ApplicantReviewContext";
import CheckboxWithText from "../Shared/CheckboxText/CheckboxText";
import { randomId } from "../../utils";
import { dummy_data } from "../../Data";

const UserDocuments = () => {
  const { checkedApplicant, setApplicantDocument,setCheckedApplicant  } = useContext(
    ApplicantReviewContext
  );

  const handleCheckedDocument = (type) => {
    // Create a new array by mapping over the data array
    const changed_data = [...dummy_data].map((person) => {
      // Check if the current object's id matches the specified id
      if (person.id === checkedApplicant?.id) {
        // Create a new object with the same properties as the current person object
        return {
          ...person,
          // Map over the documents array of the current object
          documents: person.documents.map((document) => {
            // Check if the current document's type matches the specified type
            if (document.type === type) {
              // Return a new document object with isChecked set to true
              return { ...document, isChecked: true };
            }
            // Return the original document object if it doesn't match the specified type
            return document;
          }),
        };
      }
      // Return the original person object if its id doesn't match the specified id
      return person;
    });

    setCheckedApplicant(changed_data.find(item=>item.id === checkedApplicant?.id ));
  };
  return (
    <div className="md:col-span-4 lg:col-span-2 sm:col-span-4 col-span-8">
      <Tab tabLabel="Documents">
        {checkedApplicant ? (
          <div className="flex flex-col">
            {checkedApplicant?.documents?.map((document, index) => (
              <CheckboxWithText
                id={document?.type}
                key={randomId}
                isChecked = {document?.isChecked}
                onChecked={(val) => handleCheckedDocument(val)}
                label={document?.type}
                classProps={`px-2 py-2 px-2 py-2 ${
                  index === checkedApplicant?.documents?.length - 1
                    ? ""
                    : "border-b border-gray-300"
                }  w-full`}
              />
            ))}
          </div>
        ) : (
          <p className="text-center py-4">No Data.!</p>
        )}
      </Tab>
    </div>
  );
};

export default UserDocuments;
