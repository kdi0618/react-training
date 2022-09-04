/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

type ItemTitleProps = {
  name: string;
};

export const ItemTitle: React.FC<ItemTitleProps> = React.memo((props) => {
  return <div css={itemTitle}>{props.name}</div>;
});

const itemTitle = css`
  color: #333333;
  font-size: 14px;
  margin: 12px 0 4px;
  &:first-of-type {
    margin-top: 0;
  }
`;
