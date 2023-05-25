import { Option, Select } from '@material-tailwind/react';
import React from 'react';

const SelectOption = () => {
  return (
    <div className="flex flex-col w-72 gap-6">
      <Select size="md" label="Select Version">
        <Option>Material Tailwind HTML</Option>
        <Option>Material Tailwind React</Option>
        <Option>Material Tailwind Vue</Option>
        <Option>Material Tailwind Angular</Option>
        <Option>Material Tailwind Svelte</Option>
      </Select>
    </div>
  );
};

export default SelectOption;
