import React from 'react';

export default function ProgressItem() {
  /** 버튼 클릭 시 특정 createDate에 해당하는 배열 찾기 함수 */
  const createDateClickHandler = (id, progress) => {
    buttonClickHandler(id, progress);
  };

  const buttonClickHandler = (id, progress) => {
    let payload = {};
    let selectedItem = null;
    let workspace = null;
    for (const ws of workspaceList) {
      let specificProgress;
      if (progress === 'Request') {
        specificProgress = ws.workflow.todoList;
      } else if (progress === 'In Progress') {
        specificProgress = ws.workflow.inprogressList;
      } else if (progress === 'In Review') {
        specificProgress = ws.workflow.inreviewList;
      } else if (progress === 'Blocked') {
        specificProgress = ws.workflow.blockedList;
      } else {
        specificProgress = ws.workflow.doneList;
      }
      selectedItem = specificProgress.find(item => item.id === id);
      if (selectedItem) {
        workspace = ws;
        break;
      }
    }
    if (workspace && selectedItem) {
      payload = {
        workspaceId: workspace.id,
        selectedId: selectedItem.id,
      };
      dispatch(deleteItem(payload));
    }
  };
  return (
    <div>
      {workflowList.map((el, idx) => {
        const startDate = el.createDate.split(':')[0];
        return (
          <MyTaskContainer progress={progress} draggable key={el.id}>
            <div>
              <MyContent>{el.content}</MyContent>
              <div>
                <span>✏️</span>
                <span
                  onClick={() => {
                    createDateClickHandler(el.id, progress);
                  }}
                >
                  ❌
                </span>
              </div>
            </div>
            <MyCreateData>
              {startDate} ~ {el.endDate}
            </MyCreateData>
            <div>
              <MyImportanceButton {...el}>{el.importance}</MyImportanceButton>
              <img src={defaultProfile} alt="기본 프로필 이미지" />
            </div>
          </MyTaskContainer>
        );
      })}
    </div>
  );
}
