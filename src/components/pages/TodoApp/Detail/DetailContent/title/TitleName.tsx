/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

export type TitleNameProps = {
  name: string;
};

export const TitleName: React.FC<TitleNameProps> = React.memo((props) => {
  return <div css={itemName}>{props.name}</div>;
});

const itemName = css`
  color: #333333;
  font-size: 14px;
  margin: 12px 0 4px;
  &:first-of-type {
    margin-top: 0;
  }
`;
