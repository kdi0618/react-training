/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

type InputTextProps = {
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export const InputText: React.FC<InputTextProps> = React.memo((props) => {
  return (
    <input
      type="text"
      css={inputText}
      placeholder={props.placeholder}
      value={props.value}
      defaultValue={props.defaultValue}
      onChange={props.onChange}
    />
  );
});

const inputText = css`
  background-color: #ffffff;
  border-radius: 4px;
  padding-left: 10px;
  height: 32px;
  margin-right: 10px;
`;
