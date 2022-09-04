/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

type ActionBtnProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
  isDisabled: boolean;
};

export const ActionBtn: React.FC<ActionBtnProps> = React.memo((props) => {
  return (
    <button
      className={props.isDisabled ? "is-disabled" : ""}
      css={actionBtn}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
});

const actionBtn = css`
  border: #1e90ff solid 1px;
  border-radius: 4px;
  color: #1e90ff;
  &:hover {
    opacity: 0.7;
  }
  &.is-disabled {
    pointer-events: none;
    border: #aaaaaa solid 1px;
    color: #aaaaaa;
  }
`;
