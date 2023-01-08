
import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

const options = [
    {label:'Basketball', value: 'Basketball'}, {label:'Soccer', value: 'Soccer'},
     {label:'Football', value: 'Football'}, {label:'Swimming', value: 'Swimming'}
  ]

const Dropdown = () => {
  const [selected, setSelected] = useState([]);


  return (
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        hasSelectAll={false}
        ClearSelectedIcon={null}
      />
  );
};

export default Dropdown;