/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
import { TitleName } from "./title/TitleName";
import { Selectbox } from "../../../../common/Selectbox";
import { ActionBtn } from "../../../../common/ActionBtn";
import { Breadcrumb } from "../../../../common/Breadcrumb";
import { InputText } from "../../../../common/InputText";
import { PAGE_URL } from "../../../../../const/pageUrl";
import { BREADCRUMBS_OF_DETAIL } from "../../../../../const/breadcrumb";
import { VIEW_STATUS_OF_TODO } from "../../../../../const/status";
import { Todo } from "../../../../../types/todo";

export type DetailContentProps = {
  onUpdateTodo: (upDateTodoData: Todo) => void;
  detailTodo: Todo;
};

export const DetailContent: React.FC<DetailContentProps> = React.memo(
  (props) => {
    const { detailTodo } = props;
    const [editName, setName] = useState<string>(detailTodo.name);
    const [editStatus, setStatus] = useState<string>(detailTodo.status);
    const [editDetail, setDetail] = useState<string>(detailTodo.detail);
    const [isUpdating, setUpdatingTodo] = useState<boolean>(false);
    const navigate = useNavigate();

    const changeInputName = (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    };

    const changeStatus = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setStatus(event.target.value);
    };

    const changeDetail = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setDetail(event.target.value);
    };

    // Todoの更新内容を、親のコンポーネントへ渡す
    const onClickSaveBtn = () => {
      // 更新中はボタン非活性
      setUpdatingTodo(true);
      navigate(PAGE_URL.TOP);
      props.onUpdateTodo({
        id: detailTodo.id,
        name: editName,
        status: editStatus,
        detail: editDetail,
      });
    };

    return (
      <div css={detailContent}>
        <Breadcrumb breadcrumbsList={BREADCRUMBS_OF_DETAIL} />
        <div css={editArea}>
          <TitleName name="todo名" />
          <InputText
            placeholder="edit todo name"
            value={editName}
            onChange={changeInputName}
          />
          <TitleName name="ステータス変更" />
          <Selectbox
            selectList={VIEW_STATUS_OF_TODO}
            value={editStatus}
            onChange={changeStatus}
          />
          <TitleName name="詳細記入欄" />
          <textarea
            id=""
            cols={30}
            rows={3}
            css={editDetailText}
            value={editDetail}
            onChange={changeDetail}
          />
          <ActionBtn
            isDisabled={isUpdating}
            text="保存"
            onClick={onClickSaveBtn}
          />
        </div>
      </div>
    );
  }
);

const detailContent = css`
  margin: 80px auto 0;
  width: 800px;
`;

const editArea = css`
  margin: 10px 0 0 45px;
`;

const editDetailText = css`
  background-color: #ffffff;
  border-radius: 4px;
  display: block;
  margin-bottom: 12px;
`;
