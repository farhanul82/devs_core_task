import React, { useContext, useState } from "react";
import Input from "../Shared/Input"; // Importing input component
import Button from "../Shared/Button"; // Importing button component
import { MdFilterList } from "react-icons/md"; // Importing filter list icon
import CheckboxText from "../Shared/CheckboxText/CheckboxText"; // Importing checkbox component
import { ApplicantReviewContext } from "../../contexts/ApplicantReviewContext"; // Importing context
import { dummy_data } from "../../Data"; // Importing dummy data
import FilterModal from "../Shared/Modal/FilterModal"; // Importing filter modal
import Select from "../Shared/Selelct/Select"; // Importing select component
import { Nationality_options } from "../../constants"; // Importing nationality options
import { AiOutlineClose } from "react-icons/ai"; // Importing close icon

const ApplicationReviewHeader = () => {
  const { applicantsData } = useContext(ApplicantReviewContext); // Accessing context
  const [isOpenModal, setIsOpenModal] = useState(false); // State for modal open/close
  const { setApplicantsData } = useContext(ApplicantReviewContext); // Accessing context to set applicants data
  const [isFilteredByModal, setIsFilteredByModal] = useState(false); // State to track if filtered by modal

  // Function to handle search input
  const handleInputSearch = (val) => {
    const filterData = [...applicantsData].filter((item) =>
      item.name.toLowerCase().includes(val.toLowerCase())
    );
    setApplicantsData(val ? filterData : [...dummy_data]);
  };

  // Function to handle modal button click
  const handleModalBtnClick = () => {
    if (isFilteredByModal) {
      setApplicantsData([...dummy_data]);
      setIsFilteredByModal(false);
      setIsOpenModal(false);
      return;
    }
    setIsOpenModal(true);
  };

  // Function to handle nationality select value
  const handleNationalitySelectValue = (e) => {
    const filterData = [...dummy_data].filter((item) =>
      item.nationality.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setApplicantsData(filterData);
    setIsFilteredByModal(true);
    setIsOpenModal(false);
  };

  return (
    <div className="flex md:flex-row flex-col justify-center md:justify-between items-center">
      {/* Search input and filter button */}
      <div className="flex items-center">
        <Input onChange={(e) => handleInputSearch(e.target.value)} />
        <Button
          text={isFilteredByModal ? <AiOutlineClose /> : <MdFilterList />}
          classProps="ml-2"
          borderColor="border-slate-300"
          color="black"
          onClick={handleModalBtnClick}
        />
      </div>

      {/* Filter modal */}
      <FilterModal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <div>
          <Select
            id="select-nationality"
            options={Nationality_options}
            label="Select Nationality"
            onChange={handleNationalitySelectValue}
            placeholder="Select Nationality"
          />
        </div>
      </FilterModal>

      {/* Info and docs counts */}
      <div className="flex items-center md:my-0 my-2">
        <p className="text-lg text-gray-500">
          Info: <span className="text-2xl text-black font-bold">12/22</span>{" "}
        </p>
        <p className="text-lg text-gray-500 ml-4">
          Docs: <span className="text-2xl text-black font-bold"> 2/7</span>
        </p>
      </div>

      {/* Denied and approved buttons */}
      <div className="flex items-center">
        <Button
          text="Denied"
          bgColor="bg-red-500"
          borderColor="border-none"
          color="text-white"
          classProps="mr-2"
        />
        <Button
          text="Approved"
          bgColor="bg-green-600"
          borderColor="border-none"
          color="text-white"
        />
      </div>
    </div>
  );
};

export default ApplicationReviewHeader;
