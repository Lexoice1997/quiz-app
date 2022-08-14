import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { FC } from 'react';
import { IMainArrays } from '../../constants';

interface MySelectProps {
  labelId: string;
  selectId: string;
  labelName: string;
  selectVariant: 'standard' | 'outlined' | 'filled' | undefined;
  items: IMainArrays[];
  value: string | undefined;
  setValue: (e: string) => void;
}

const MySelect: FC<MySelectProps> = ({
  labelId,
  selectId,
  labelName,
  selectVariant,
  items,
  value,
  setValue,
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };
  return (
    <FormControl variant={selectVariant} sx={{ minWidth: 120, width: 200 }}>
      <InputLabel id={labelId}>{labelName}</InputLabel>
      <Select
        labelId={labelId}
        id={selectId}
        value={value}
        onChange={handleChange}
        label={labelName}
      >
        {items.map((item: any) => {
          return (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default MySelect;
