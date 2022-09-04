/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { PAGE_URL } from "../../../../const/pageUrl";

export const NotFound: React.FC = () => {
  return (
    <div css={content}>
      <div css={title}>Error: Not Found!</div>
      <Link to={PAGE_URL.TOP} css={backToTopLink}>
        トップへ戻る
      </Link>
    </div>
  );
};

const content = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  margin-top: 100px;
`;

const title = css`
  font-size: 24px;
`;

const backToTopLink = css`
  color: #1e90ff;
  display: block;
  font-size: 14px;
  margin-top: 20px;
  &hover {
    text-decoration: underline;
  }
`;
