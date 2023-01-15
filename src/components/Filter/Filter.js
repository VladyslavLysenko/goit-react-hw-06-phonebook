import React from 'react';
import { Input, InnerWrap, SectionForm } from 'components/Form/Form.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'components/redux/filterSlice';
export const Filter = () => {
  const dispatch = useDispatch();
  const onChange = value => {
    dispatch(setFilter(value));
  };

  return (
    <InnerWrap>
      <SectionForm>
        <label>
          Find contacts by Name
          <Input
            // value={value}
            name="filter"
            onChange={evt => onChange(evt.currentTarget.value)}
            type="text"
            placeholder="Search contact..."
          />
        </label>
      </SectionForm>
    </InnerWrap>
  );
};

export default Filter;
