const initState = {
  workspaceList: [
    {
      id: 0,
      workspace_name: 'workspace1',
      workspace_category: 'web',
      workspace_startDate: '2023-04-01:0000',
      workspace_endDate: '2023-04-01:1111',
      githubRepository: 'https://github.com/0uizi0/test1',
      member: ['qkrtjdwo5662', 'psjj03'],
      bookmarked: false,
      workflow: {
        todoList: [
          {
            id: '001',
            content: '내용1',
            createDate: '2023-04-01:0001',
            endDate: '2023-04-12',
            importance: 'low',
          },
          {
            id: '002',
            content: '내용2',
            createDate: '2023-04-01:0001',
            endDate: '2023-04-12',
            importance: 'low',
          },
          {
            id: '003',
            content: '내용3',
            createDate: '2023-04-01:0001',
            endDate: '2023-04-12',
            importance: 'low',
          },
        ],
        inprogressList: [
          {
            id: '011',
            content: '내용2',
            createDate: '2023-04-01:0002',
            endDate: '2023-04-12',
            importance: 'low',
          },
          {
            id: '012',
            content: '내용3',
            createDate: '2023-04-01:0002',
            endDate: '2023-04-12',
            importance: 'low',
          },
        ],
        inreviewList: [
          {
            id: '200',
            content: '3',
            createDate: '2023-04-01:0003',
            endDate: '2023-04-12',
            importance: 'low',
          },
        ],
        blockedList: [
          {
            id: '300',
            content: '666',
            createDate: '2023-04-01:0004',
            endDate: '2023-04-12',
            importance: 'low',
          },
        ],
        doneList: [
          {
            id: '040',
            content: '1',
            createDate: '2023-04-01:0005',
            endDate: '2023-04-12',
            importance: 'low',
          },
        ],
      },
    },
  ],
};

// 액션 타입 정의
const CREATE = 'workspace/CREATE';
const DELETE = 'workspace/DELETE';
const DONE = 'workspace/DONE';
const BOOKMARK = 'workspace/BOOKMARK';
// NEW TASK 액션 타입 정의
const NEWTASK_TODO = 'workflow/NEWTASK_TODO';
const NEWTASK_PROGRESS = 'workflow/NEWTASK_PROGRESS';
const NEWTASK_REVIEW = 'workflow/NEWTASK_REVIEW';
const NEWTASK_BLOCKED = 'workflow/NEWTASK_BLOCKED';
const NEWTASK_DONE = 'workflow/NEWTASK_DONE';
// const DELETE_TASK = 'worfkflow/DELETE_TASK';

const ADD_LIST = 'workflow/ADD_LIST';
const SUBTRACT_LIST = 'workflow/SUBTRACT_LIST';

export function subtractList(subListType, selectedDragItem, subList) {
  return {
    type: SUBTRACT_LIST,
    payload: { subListType, selectedDragItem, subList },
  };
}

export function addList(addListType, item, addList, dropItem) {
  return { type: ADD_LIST, payload: { addListType, item, addList, dropItem } };
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

export function newTodo(payload) {
  const { workspaceId, newtask } = payload;
  return {
    type: NEWTASK_TODO,
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

export function newDone(payload) {
  const { workspaceId, newtask } = payload;
  return {
    type: NEWTASK_DONE,
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
      console.log(action.payload);
      return { ...state, ...action.payload };
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
    case NEWTASK_TODO:
      const workspaceId_todo = action.payload.workspaceId;
      const newtask_todo = action.payload.newtask;
      const updatedTodoList = [
        ...state.workspaceList[workspaceId_todo].workflow.todoList,
        newtask_todo,
      ];
      const updatedWsList_todo = state.workspaceList.map((workspace, idx) => {
        if (idx === workspaceId_todo) {
          const updatedWf_todo = {
            ...workspace.workflow,
            todoList: updatedTodoList,
          };
          return {
            ...workspace,
            workflow: updatedWf_todo,
          };
        }
        return workspace;
      });
      return {
        ...state,
        workspaceList: updatedWsList_todo,
      };
    case NEWTASK_PROGRESS:
      const workspaceId_progress = action.payload.workspaceId;
      const newtask_progress = action.payload.newtask;
      const updatedProgressList = [
        ...state.workspaceList[workspaceId_progress].workflow.inprogressList,
        newtask_progress,
      ];
      const updatedWsList_progress = state.workspaceList.map(
        (workspace, idx) => {
          if (idx === workspaceId_progress) {
            const updatedWf_progress = {
              ...workspace.workflow,
              inprogressList: updatedProgressList,
            };
            return {
              ...workspace,
              workflow: updatedWf_progress,
            };
          }
          return workspace;
        }
      );
      return {
        ...state,
        workspaceList: updatedWsList_progress,
      };
    case NEWTASK_REVIEW:
      const workspaceId_review = action.payload.workspaceId;
      const newtask_review = action.payload.newtask;
      const updatedReviewList = [
        ...state.workspaceList[workspaceId_review].workflow.inreviewList,
        newtask_review,
      ];
      const updatedWsList_review = state.workspaceList.map((workspace, idx) => {
        if (idx === workspaceId_review) {
          const updatedWf_review = {
            ...workspace.workflow,
            inreviewList: updatedReviewList,
          };
          return {
            ...workspace,
            workflow: updatedWf_review,
          };
        }
        return workspace;
      });
      return {
        ...state,
        workspaceList: updatedWsList_review,
      };
    case NEWTASK_BLOCKED:
      const workspaceId_blocked = action.payload.workspaceId;
      const newtask_blocked = action.payload.newtask;
      const updatedBlockedList = [
        ...state.workspaceList[workspaceId_blocked].workflow.blockedList,
        newtask_blocked,
      ];
      const updatedWsList_blocked = state.workspaceList.map(
        (workspace, idx) => {
          if (idx === workspaceId_blocked) {
            const updatedWf_blocked = {
              ...workspace.workflow,
              blockedList: updatedBlockedList,
            };
            return {
              ...workspace,
              workflow: updatedWf_blocked,
            };
          }
          return workspace;
        }
      );
      return {
        ...state,
        workspaceList: updatedWsList_blocked,
      };
    case NEWTASK_DONE:
      const workspaceId_done = action.payload.workspaceId;
      const newtask_done = action.payload.newtask;
      const updatedDoneList = [
        ...state.workspaceList[workspaceId_done].workflow.doneList,
        newtask_done,
      ];
      const updatedWsList_done = state.workspaceList.map((workspace, idx) => {
        if (idx === workspaceId_done) {
          const updatedWf_done = {
            ...workspace.workflow,
            doneList: updatedDoneList,
          };
          return {
            ...workspace,
            workflow: updatedWf_done,
          };
        }
        return workspace;
      });
      return {
        ...state,
        workspaceList: updatedWsList_done,
      };

    case SUBTRACT_LIST:
      let { subListType, selectedDragItem, subList } = action.payload;
      switch (subListType) {
        case 'Request':
          subListType = 'todoList';
          break;
        case 'In Progress':
          subListType = 'inprogressList';
          break;
        case 'In Review':
          subListType = 'inreviewList';
          break;
        case 'Blocked':
          subListType = 'blockedList';
          break;
        case 'Completed':
          subListType = 'doneList';
          break;
        default:
          break;
      }

      const updatedList = state.workspaceList[0].workflow[subListType].filter(
        item => item.id !== selectedDragItem.id
      );
      return {
        ...state,
        workspaceList: [
          {
            ...state.workspaceList[0],
            workflow: {
              ...state.workspaceList[0].workflow,
              [subListType]: updatedList ? updatedList : null,
            },
          },
        ],
      };

    case ADD_LIST:
      console.log('ADDLIST');
      let { addListType, item, addList, dropItem } = action.payload;

      switch (addListType) {
        case 'Request':
          addListType = 'todoList';
          break;
        case 'In Progress':
          addListType = 'inprogressList';
          break;
        case 'In Review':
          addListType = 'inreviewList';
          break;
        case 'Blocked':
          addListType = 'blockedList';
          break;
        case 'Completed':
          addListType = 'doneList';
          break;
        default:
      }

      console.log('dsdasfafsfasfasfsa', dropItem);
      const updateAddList = [
        ...state.workspaceList[0].workflow[addListType].filter(
          i => i.id !== item.id
        ),
        item,
      ];

      return {
        ...state,
        workspaceList: [
          {
            ...state.workspaceList[0],
            workflow: {
              ...state.workspaceList[0].workflow,
              [addListType]: [...updateAddList],
            },
          },
        ],
      };

    default:
      return { ...state };
  }
}
