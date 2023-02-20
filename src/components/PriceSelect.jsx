import React, { useState } from 'react';
import Select from 'react-select';

const options1 = [
  { value: 1000, label: 'Option 1' },
  { value: 2000, label: 'Option 2' },
  { value: 3000, label: 'Option 3' },
];

const options2 = [
  { value: 6000, label: 'Option A' },
  { value: 7000, label: 'Option B' },
  { value: 8000, label: 'Option C' },
];

const PriceSelect = () => {
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [rangeValue, setRangeValue] = useState(50);

  const handleSelect1Change = (selectedOption) => {
    setSelectedOption1(selectedOption);
  };

  const handleSelect2Change = (selectedOption) => {
    setSelectedOption2(selectedOption);
  };

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };

  return (
    <div>
        <div className='flex items-center justify-between'>
            <Select
                value={selectedOption1}
                onChange={handleSelect1Change}
                options={options1}
                placeholder="1000$"
            />
            <Select
                value={selectedOption2}
                onChange={handleSelect2Change}
                options={options2}
                placeholder="1000$"
            />
        </div>
      <input
        type="range"
        min={0}
        className='w-full mt-2'
        max="100"
        value={rangeValue}
        onChange={handleRangeChange}
      />
    </div>
  );
};

export default PriceSelect;
