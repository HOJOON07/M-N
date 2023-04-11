const initState = {
  workspaceList: [
    {
      id: 0,
      workspace_name: 'workspace1',
      workspace_category: 'web',
      workspace_startDate: '2023-04-01:xxxx',
      workspace_endDate: '2023-04-01:xxxx',
      githubRepository: 'https://github.com/0uizi0/test1',
      member: ['qkrtjdwo5662', 'psjj03'],
      workflow: {
        todoList: [
          {
            content: '내용1',
            createDatte: '2023-04-01:xxxx',
            endDate: '2023-04-12',
            importance: 'low',
          },
        ],
        inprogressList: [
          {
            content: '내용1',
            createDatte: '2023-04-01:xxxx',
            endDate: '2023-04-12',
            importance: 'low',
          },
        ],
        inreviewList: [
          {
            content: '내용1',
            createDatte: '2023-04-01:xxxx',
            endDate: '2023-04-12',
            importance: 'low',
          },
        ],
        blockedList: [
          {
            content: '내용1',
            createDatte: '2023-04-01:xxxx',
            endDate: '2023-04-12',
            importance: 'low',
          },
        ],
        doneList: [
          {
            content: '내용1',
            createDatte: '2023-04-01:xxxx',
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
const DONE = 'workspace/DONE';
const BOOKMARK = 'workspace/BOOKMARK';
const NEWTASK_TODO = 'workflow/NEWTASK_TODO';

// 액션 생성 함수 작성
export function create(payload) {
  return {
    type: CREATE,
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

// export function newtask(payload) {
//   return {
//     type: NEWTASK,
//     payload,
//   };
// }

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
    // case DONE:
    //   return {};
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
    // case NEWTASK_TODO:
    //   state.workspaceList[action.payload.workspaceId].workflow.todoList = [
    //     ...state.workspaceList[action.payload.workspaceId].workflow.todoList,
    //     action.payload.newtask,
    //   ];
    //   return {
    //     ...state,
    //   };
    default:
      return state;
  }
}
