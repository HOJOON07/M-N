const initState = {
  // 더미 데이터 ~
  // workspaceList: [
  //   {
  //     id: 0,
  //     workspace_name: 'workspace1',
  //     workspace_category: 'web',
  //     workspace_startDate: '2023-04-01:0000',
  //     workspace_endDate: '2023-04-01:1111',
  //     githubRepository: 'https://github.com/0uizi0/test1',
  //     member: ['qkrtjdwo5662', 'psjj03'],
  //     bookmarked: false,
  //     workflow: {
  //       requestList: [
  //         {
  //           id: '001',
  //           content: '내용1',
  //           createDate: '2023-04-01:0001',
  //           startDate: '2023-04-11',
  //           endDate: '2023-04-12',
  //           importance: 'low',
  //         },
  //         {
  //           id: '002',
  //           content: '내용2',
  //           createDate: '2023-04-01:0001',
  //           startDate: '2023-04-11',
  //           endDate: '2023-04-12',
  //           importance: 'high',
  //         },
  //         {
  //           id: '003',
  //           content: '내용3',
  //           createDate: '2023-04-01:0001',
  //           startDate: '2023-04-11',
  //           endDate: '2023-04-12',
  //           importance: 'low',
  //         },
  //       ],
  //       inProgressList: [
  //         {
  //           id: '011',
  //           content: '내용2',
  //           createDate: '2023-04-01:0002',
  //           startDate: '2023-04-11',
  //           endDate: '2023-04-12',
  //           importance: 'medium',
  //         },
  //         {
  //           id: '012',
  //           content: '내용3',
  //           createDate: '2023-04-01:0002',
  //           startDate: '2023-04-11',
  //           endDate: '2023-04-12',
  //           importance: 'low',
  //         },
  //       ],
  //       inReviewList: [
  //         {
  //           id: '200',
  //           content: '3',
  //           createDate: '2023-04-01:0003',
  //           startDate: '2023-04-11',
  //           endDate: '2023-04-12',
  //           importance: 'low',
  //         },
  //       ],
  //       blockedList: [
  //         {
  //           id: '300',
  //           content: '666',
  //           createDate: '2023-04-01:0004',
  //           startDate: '2023-04-11',
  //           endDate: '2023-04-12',
  //           importance: 'low',
  //         },
  //       ],
  //       completedList: [
  //         {
  //           id: '040',
  //           content: '1',
  //           createDate: '2023-04-01:0005',
  //           startDate: '2023-04-11',
  //           endDate: '2023-04-12',
  //           importance: 'low',
  //         },
  //       ],
  //     },
  //   },
  // ],
  // ~더미 데이터
};

///// 전역 함수
// 프로그레스명으로 DB 데이터를 구분하는 함수
const findProgress = progress => {
  let list;
  switch (progress) {
    case 'Request':
      list = 'requestList';
      break;
    case 'In Progress':
      list = 'inProgressList';
      break;
    case 'In Review':
      list = 'inReviewList';
      break;
    case 'Blocked':
      list = 'blockedList';
      break;
    case 'Completed':
      list = 'completedList';
      break;
    default:
      break;
  }
  return list;
};

// 액션 타입 정의
const CREATE = 'workspace/CREATE';
const DELETE = 'workspace/DELETE';
const DONE = 'workspace/DONE';
const BOOKMARK = 'workspace/BOOKMARK';
// NEW TASK 액션 타입 정의
const INIT_LIST = 'workflow/INIT_LIST';

const NEWTASK_REQUEST = 'workflow/NEWTASK_REQUEST';
const NEWTASK_PROGRESS = 'workflow/NEWTASK_PROGRESS';
const NEWTASK_REVIEW = 'workflow/NEWTASK_REVIEW';
const NEWTASK_BLOCKED = 'workflow/NEWTASK_BLOCKED';
const NEWTASK_COMPLETED = 'workflow/NEWTASK_COMPLETED';
// const DELETE_TASK = 'worfkflow/DELETE_TASK';
const MODIFY_TASK = 'workflow/MODIFY_TASK';

const ADD_LIST = 'workflow/ADD_LIST';
const SUBTRACT_LIST = 'workflow/SUBTRACT_LIST';

export function initList(payload) {
  return {
    type: INIT_LIST,
    payload,
  };
}
export function subtractList(subListType, selectedDragItem, subList) {
  return {
    type: SUBTRACT_LIST,
    payload: { subListType, selectedDragItem, subList },
  };
}

export function addList(addListType, item, dropIndex, addLists) {
  return {
    type: ADD_LIST,
    payload: { addListType, item, dropIndex, addLists },
  };
}

// 액션 생성 함수 작성
export function create(payload) {
  return {
    type: CREATE,
    payload,
  };
}

export function deleteItem(payload) {
  const { workspaceId, selectedId } = payload;
  return {
    type: DELETE,
    payload: { workspaceId, selectedId },
  };
}

export function modifyItem(payload) {
  return {
    type: MODIFY_TASK,
    payload,
  };
}

export function done(id) {
  return {
    type: DONE,
    id,
  };
}

export function bookmark(id) {
  return {
    type: BOOKMARK,
    id,
  };
}

export function newRequest(payload) {
  const { workspaceId, newtask } = payload;
  return {
    type: NEWTASK_REQUEST,
    payload: {
      workspaceId,
      newtask,
    },
  };
}

export function newInProgress(payload) {
  const { workspaceId, newtask } = payload;
  return {
    type: NEWTASK_PROGRESS,
    payload: {
      workspaceId,
      newtask,
    },
  };
}

export function newInReview(payload) {
  const { workspaceId, newtask } = payload;
  return {
    type: NEWTASK_REVIEW,
    payload: {
      workspaceId,
      newtask,
    },
  };
}

export function newBlocked(payload) {
  const { workspaceId, newtask } = payload;
  return {
    type: NEWTASK_BLOCKED,
    payload: {
      workspaceId,
      newtask,
    },
  };
}

export function newCompleted(payload) {
  const { workspaceId, newtask } = payload;
  return {
    type: NEWTASK_COMPLETED,
    payload: {
      workspaceId,
      newtask,
    },
  };
}

// 리듀서 설정
export default function workspace(state = initState, action) {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        workspaceList: [
          ...state.workspaceList,
          {
            id: action.payload.id,
            name: action.payload.name,
            member: [],
            workflow: [],
            bookmarked: false,
          },
        ],
      };

    case DELETE:
      // console.log(action.payload);
      return { ...state, ...action.payload };

    case MODIFY_TASK:
      let {
        // workspaceId,
        selectedItem,
        content,
        startDate,
        endDate,
        importance,
        progress,
      } = action.payload;

      progress = findProgress(progress);

      // switch (progress) {
      //   case 'Request':
      //     progress = 'todoList';
      //     break;
      //   case 'In Progress':
      //     progress = 'inprogressList';
      //     break;
      //   case 'In Review':
      //     progress = 'inreviewList';
      //     break;
      //   case 'Blocked':
      //     progress = 'blockedList';
      //     break;
      //   case 'Completed':
      //     progress = 'doneList';
      //     break;
      //   default:
      //     break;
      // }

      // const copyList = [...state.workspaceList[workspaceId].workflow.progress];
      // 백엔드
      const copyList = [...state.workspaceList.workflow[progress]];

      const findIndex = copyList.findIndex(el => el.id === selectedItem.id); //첫번째 인덱스를 반환
      const newTask = {
        content,
        startDate,
        endDate,
        importance,
        id: copyList[findIndex].id,
        createDate: copyList[findIndex].createDate,
      };

      copyList.splice(findIndex, 1, newTask);

      // 백엔드
      return {
        ...state,
        workspaceList: [
          {
            ...state.workspaceList,
            workflow: {
              ...state.workspaceList[0].workflow,
              [progress]: copyList,
            },
          },
        ],
      };

    // 프론트
    // return {
    //   ...state,
    //   workspaceList: [
    //     {
    //       ...state.workspaceList[workspaceId],
    //       workflow: {
    //         ...state.workspaceList[workspaceId].workflow,
    //         [progress]: copyList,
    //       },
    //     },
    //   ],
    // };

    case BOOKMARK:
      return {
        ...state,
        workspace: state.workspace.map(el => {
          if (el.id === action.id) {
            return {
              ...el,
              bookmarked: true,
            };
          } else {
            return el;
          }
        }),
      };

    case INIT_LIST:
      // console.log('초기화', action.payload);
      // 받아온 정보를 초기화
      return {
        ...action.payload,
      };

    case NEWTASK_REQUEST:
      const newtask_request = action.payload.newtask;
      const updatedRequestList = [
        ...state.workflow.requestList,
        newtask_request,
      ];
      const updatedWf_request = {
        ...state.workflow,
        requestList: updatedRequestList,
      };
      return {
        ...workspace,
        workflow: updatedWf_request,
      };
    case NEWTASK_PROGRESS:
      const newtask_progress = action.payload.newtask;
      const updatedProgressList = [
        ...state.workflow.inProgressList,
        newtask_progress,
      ];
      const updatedWf_progress = {
        ...state.workflow,
        inProgressList: updatedProgressList,
      };
      return {
        ...workspace,
        workflow: updatedWf_progress,
      };
    case NEWTASK_REVIEW:
      const newtask_review = action.payload.newtask;
      const updatedReviewList = [
        ...state.workflow.inReviewList,
        newtask_review,
      ];
      const updatedWf_review = {
        ...state.workflow,
        inReviewList: updatedReviewList,
      };
      return {
        ...workspace,
        workflow: updatedWf_review,
      };
    case NEWTASK_BLOCKED:
      const newtask_blocked = action.payload.newtask;
      const updatedBlockedList = [
        ...state.workflow.blockedList,
        newtask_blocked,
      ];
      const updatedWf_blocked = {
        ...state.workflow,
        blockedList: updatedBlockedList,
      };
      return {
        ...workspace,
        workflow: updatedWf_blocked,
      };

    case NEWTASK_COMPLETED:
      const newtask_completed = action.payload.newtask;
      const updatedCompletedList = [
        ...state.workflow.completedList,
        newtask_completed,
      ];
      const updatedWf_completed = {
        ...state.workflow,
        completedList: updatedCompletedList,
      };
      return {
        ...workspace,
        workflow: updatedWf_completed,
      };

    case SUBTRACT_LIST:
      let { subListType, selectedDragItem, subList } = action.payload;
      subListType = findProgress(subListType);

      const updatedList = state.workflow[subListType].filter(item => {
        return item.id !== selectedDragItem.id;
      });
      return {
        ...state,
        workflow: {
          ...state.workflow,
          [subListType]: updatedList ? updatedList : null,
        },
      };

    case ADD_LIST:
      let { addListType, item, dropIndex, addLists } = action.payload;

      addListType = findProgress(addListType);
      let updateAddList = [...state.workflow[addListType]];

      // dropIndex 가 null 이 아니면 특정 task 위에 드롭이 되었다는 것이므로, 해당 위치에 가져온 item 을 추가
      if (dropIndex !== null) {
        updateAddList.splice(dropIndex, 0, item);
      } else {
        // dropIndex 가 null 이면 바닥에 드롭한 것이므로 task 의 마지막에 추가
        updateAddList.splice(updateAddList.length, 0, item);
      }

      return {
        ...state,
        workflow: {
          ...state.workflow,
          [addListType]: [...updateAddList],
        },
      };

    default:
      return { ...state };
  }
}
