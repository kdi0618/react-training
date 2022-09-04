/** @jsxImportSource @emotion/react */
import React from "react";
import { css, keyframes, SerializedStyles } from "@emotion/react";

type LoadingProps = {
  emotionStyles: SerializedStyles;
};

export const Loading: React.FC<LoadingProps> = React.memo((props) => {
  return (
    <div css={props.emotionStyles}>
      <i css={loadingIcon}></i>
    </div>
  );
});

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const loadingIcon = css`
  box-sizing: border-box;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  box-shadow: 0 -30px 0 #eee, /*  上  */ 21px -21px 0 #ddd,
    /* 右上 */ 30px 0 0 #ccc, /*  右  */ 21px 21px 0 #bbb,
    /* 右下 */ 0 30px 0 #aaa, /*  下  */ -21px 21px 0 #999,
    /* 左下 */ -30px 0 0 #666, /*  左  */ -21px -21px 0 #000; /* 左上 */
  animation: ${rotate} 1s steps(8);
`;
