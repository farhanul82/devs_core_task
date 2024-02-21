import React, { useContext, useState } from "react";
import Input from "../Shared/Input";
import Button from "../Shared/Button";
import { MdFilterList } from "react-icons/md";
import CheckboxText from "../Shared/CheckboxText/CheckboxText";
import { ApplicantReviewContext } from "../../contexts/ApplicantReviewContext";
import { dummy_data } from "../../Data";
import FilterModal from "../Shared/Modal/FilterModal";
import Select from "../Shared/Selelct/Select";
import { Nationality_options } from "../../constants";
import { AiOutlineClose } from "react-icons/ai";

const ApplicationReviewHeader = () => {
  const { applicantsData } = useContext(ApplicantReviewContext);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { setApplicantsData } = useContext(ApplicantReviewContext);
  const [isFilteredByModal, setIsFilteredByModal] = useState(false);

  const handleInputSearch = (val) => {
    const filterData = [...applicantsData].filter((item) =>
      item.name.toLowerCase().includes(val)
    );
    setApplicantsData(val ? filterData : [...dummy_data]);
  };

  const handleModalBtnClick = () => {
    if (isFilteredByModal) {
      setApplicantsData([...dummy_data]);
      setIsFilteredByModal(false);
      setIsOpenModal(false);
      return;
    }
    setIsOpenModal(true);
  };

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

      <div className="flex items-center md:my-0 my-2">
        <p className="text-lg text-gray-500">
          Info: <span className="text-2xl text-black font-bold">12/22</span>{" "}
        </p>
        <p className="text-lg text-gray-500 ml-4">
          Docs: <span className="text-2xl text-black font-bold"> 2/7</span>
        </p>
      </div>

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
