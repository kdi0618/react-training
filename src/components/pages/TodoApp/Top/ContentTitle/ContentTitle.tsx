/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

type ContentTitleProps = {
  title: string;
};

export const ContentTitle: React.FC<ContentTitleProps> = React.memo((props) => {
  return <div css={contentTitle}>{props.title}</div>;
});

const contentTitle = css`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;
