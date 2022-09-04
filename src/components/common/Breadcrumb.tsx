/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

type BreadcrumbItemType = {
  name: string;
  path?: string;
};

type BreadcrumbProps = {
  breadcrumbsList: Array<BreadcrumbItemType>;
};

export const Breadcrumb: React.FC<BreadcrumbProps> = React.memo((props) => {
  return (
    <div css={breadcrumbWrapper}>
      <div className="breadcrumbItem">&gt;</div>
      {props.breadcrumbsList.map((item: BreadcrumbItemType, index: number) => {
        return (
          <div key={item.name} css={breadcrumb}>
            {item.path ? (
              <div css={breadcrumbItem}>
                <Link to={item.path} css={breadcrumbItemLink}>
                  {item.name}
                </Link>
              </div>
            ) : (
              <div css={breadcrumbItem}>{item.name}</div>
            )}
            {/* 最後の要素でなければ、矢印を描画する */}
            {index !== props.breadcrumbsList.length - 1 && (
              <div css={breadcrumbItem}>&gt;</div>
            )}
          </div>
        );
      })}
    </div>
  );
});

const breadcrumbWrapper = css`
  display: flex;
  align-items: center;
  font-size: 12px;
`;

const breadcrumb = css`
  display: flex;
  align-items: center;
`;

const breadcrumbItem = css`
  margin-right: 4px;
`;

const breadcrumbItemLink = css`
  color: #1e90ff;
  &hover {
    text-decoration: underline;
  }
`;
