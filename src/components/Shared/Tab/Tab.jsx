import React from "react";
import CheckboxWithText from "../CheckboxText/CheckboxText";

const Tab = ({ tabLabel = "Applicants", children }) => {
  return (
    <div className="border border-slate-300 rounded-md">
      <div className="bg-neutral-300">
        <p className="text-neutral-500 ml-2">
          <CheckboxWithText
            label={tabLabel}
            id="tabLabel"
            isDisableCheckbox={true}
          />
        </p>
      </div>

      <div className="">{children}</div>
    </div>
  );
};

export default Tab;
