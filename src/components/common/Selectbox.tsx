/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

type OptionType = {
  title: string;
  value: string;
};

type SelectboxProps = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  selectList: Array<OptionType>;
};

export const Selectbox: React.FC<SelectboxProps> = React.memo((props) => {
  return (
    <div css={selectboxWrapper}>
      <select
        name="showTodoStatus"
        css={selectbox}
        value={props.value}
        onChange={props.onChange}
      >
        {props.selectList?.map((option: OptionType) => (
          <option value={option.value} key={option.value}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
});

const selectboxWrapper = css`
  position: relative;
  &::after {
    content: "▽";
    color: #1e90ff;
    display: block;
    width: 15px;
    height: 15px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 160px;
  }
`;

const selectbox = css`
  background-color: #ffffff;
  border-radius: 4px;
  width: 180px;
  height: 34px;
  padding-left: 10px;
`;
