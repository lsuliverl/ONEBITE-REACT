import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";
import useDiary from "../hooks/useDiary";
import usePageTitle from "../hooks/usePageTitle";

const Edit = () => {
    const params = useParams();
    const nav = useNavigate();
    const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
    usePageTitle(`${params.id}번 일기 수정하기`);

    const curDiaryItem = useDiary(params.id);

    const onClickDelete = () => {
        if (window.confirm("일기를 정말 삭제할까요? 다시 복구하지 못 합니다.")) {
            onDelete(params.id);
            nav("/", { replace: true });
        }
    };

    const onSubmit = (input) => {
        if (window.confirm("일기를 정말 수정할까요?")) {
            onUpdate(params.id, input.createdDate.getTime(), input.emotionId, input.content);
            nav("/", { replace: true });
        }
    };

    return (
        <div>
            <Header
                title={"일기 수정하기"}
                leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로가기"} />}
                rightChild={<Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"} />}
            />
            <Editor initData={curDiaryItem} onSubmit={onSubmit} />
        </div>
    );
};

export default Edit;
