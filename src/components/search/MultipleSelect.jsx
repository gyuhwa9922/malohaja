import { React, useCallback } from "react";
import { skillInfo } from "../../constants/skillinfo";
import { Select, Space } from "antd";
const MultipleSelect = () => {
  const handleChange = useCallback((value) => {
    console.log(`selected ${value}`);
  }, []);
  return (
    <Select
      mode="multiple"
      style={{
        width: "100%",
      }}
      placeholder="언어"
      onChange={handleChange}
      // optionLabelProp="label"
      options={skillInfo}
    />
  );
};

export default MultipleSelect;
