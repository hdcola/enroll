import React from "react";
import { CheckboxGroup, Checkbox } from "@nextui-org/checkbox";

interface SelectTimesProps {
  times: string[];
  isInvalid?: boolean;
  errorMessage?: string;
}

const SelectTimes: React.FC<SelectTimesProps> = ({
  times,
  isInvalid,
  errorMessage,
}) => {
  const [selected, setSelected] = React.useState<string[]>([]);

  return (
    <CheckboxGroup
      name="times"
      isInvalid={isInvalid}
      errorMessage={errorMessage}
      value={selected}
      label="选择时间"
      onChange={setSelected}
      orientation="vertical"
    >
      {times.map((time) => (
        <Checkbox key={time} value={time}>
          {time}
        </Checkbox>
      ))}
    </CheckboxGroup>
  );
};

export default SelectTimes;
