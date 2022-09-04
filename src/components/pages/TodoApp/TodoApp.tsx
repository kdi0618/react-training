/** @jsxImportSource @emotion/react */
import { Suspense } from "react";
import { css } from "@emotion/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Top } from "./Top/Top";
import { Detail } from "./Detail/Detail";
import { Loading } from "../../common/Loading";
import { NotFound } from "./NotFound/NotFound";
import { PAGE_URL } from "../../../const/pageUrl";

export const TodoApp: React.FC = () => {
  return (
    <div className="todoApp">
      <Suspense fallback={<Loading emotionStyles={loadingIconContainer} />}>
        <BrowserRouter>
          <Routes>
            <Route path={PAGE_URL.TOP} element={<Top />} />
            <Route path={`${PAGE_URL.DETAIL}/:todoId`} element={<Detail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

const loadingIconContainer = css`
  display: flex;
  justify-content: center;
  margin-top: 200px;
`;
