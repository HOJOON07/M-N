const initState = {
  workspaceList: [
    {
      id: 0,
      name: 'workspace1',
      member: ['qkrtjdwo5662', 'psjj03'],
      workflow: [
        {
          description: '설명',
          writer: 'qkrtjdwo5662',
          createDate: '2023-04-01:xxxx',
          list: {
            todo: [
              {
                id: 0,
                content: '내용1',
                writer: 'qkrtjdwo5662',
                createData: '2023-04-01:xxxx',
                importance: 'high',
                profile: '',
              },
              {
                id: 1,
                content: '내용2',
                writer: '0l0jjo',
                createData: '2023-04-10:xxxx',
                importance: 'low',
                profile: '',
              },
              {
                id: 2,
                content: '내용3',
                writer: '0l0jjo',
                createData: '2023-04-10:xxxx',
                importance: 'low',
                profile: '',
              },
              {
                id: 3,
                content: '내용4',
                writer: '0l0jjo',
                createData: '2023-04-10:xxxx',
                importance: 'low',
                profile: '',
              },
            ],
            inprogress: [
              {
                id: 0,
                content: '내용5',
                writer: 'qkrtjdwo5662',
                createData: '2023-04-01:xxxx',
                importance: 'medium',
                profile: '',
              },
              {
                id: 1,
                content: '내용6',
                writer: '0l0jjo',
                createData: '2023-04-10:xxxx',
                importance: 'high',
                profile: '',
              },
            ],
            inreview: [
              {
                id: 0,
                content: '내용7',
                writer: 'qkrtjdwo5662',
                createData: '2023-04-01:xxxx',
                importance: 'high',
                profile: '',
              },
              {
                id: 1,
                content: '내용8',
                writer: '0l0jjo',
                createData: '2023-04-10:xxxx',
                importance: 'low',
                profile: '',
              },
            ],
            blocked: [
              {
                id: 0,
                content: '내용9',
                writer: 'qkrtjdwo5662',
                createData: '2023-04-01:xxxx',
                importance: 'low',
                profile: '',
              },
            ],
            done: [
              {
                id: 0,
                content: '내용10',
                writer: 'qkrtjdwo5662',
                createData: '2023-04-01:xxxx',
                importance: 'medium',
                profile: '',
              },
              {
                id: 2,
                content: '내용11',
                writer: '0l0jjo',
                createData: '2023-04-10:xxxx',
                importance: 'high',
                profile: '',
              },
            ],
          },
        },
      ],
      bookmarked: false,
    },
    {
      id: 1,
      name: 'workspace2',
      member: ['0l0jjo', 'qkrtjdwo5662'],
      workflow: [
        {
          description: '설명',
          writer: '0l0jjo',
          createDate: '2023-04-07:xxxx',
          list: {
            todo: {
              content: '내용',
              writer: '0l0jjo',
              createData: '2023-04-07:xxxx',
            },
            inprogress: {
              content: '내용',
              writer: '0l0jjo',
              createData: '2023-04-07:xxxx',
            },
            done: {
              content: '내용',
              writer: '0l0jjo',
              createData: '2023-04-07:xxxx',
            },
          },
        },
      ],
      bookmarked: true,
    },
    {
      id: 2,
      name: 'workspace3',
      member: ['qkrtjdwo5662', 'psjj03'],
      workflow: [
        {
          description: '설명',
          writer: 'qkrtjdwo5662',
          createDate: '2023-04-01:xxxx',
          list: {
            todo: {
              content: '내용',
              writer: 'qkrtjdwo5662',
              createData: '2023-04-01:xxxx',
            },
            inprogress: {
              content: '내용',
              writer: 'qkrtjdwo5662',
              createData: '2023-04-01:xxxx',
            },
            done: {
              content: '내용',
              writer: 'qkrtjdwo5662',
              createData: '2023-04-01:xxxx',
            },
          },
        },
      ],
      bookmarked: false,
    },
    {
      id: 3,
      name: 'workspace4',
      member: ['0l0jjo', 'qkrtjdwo5662'],
      workflow: [
        {
          description: '설명',
          writer: '0l0jjo',
          createDate: '2023-04-07:xxxx',
          list: {
            todo: {
              content: '내용',
              writer: '0l0jjo',
              createData: '2023-04-07:xxxx',
            },
            inprogress: {
              content: '내용',
              writer: '0l0jjo',
              createData: '2023-04-07:xxxx',
            },
            done: {
              content: '내용',
              writer: '0l0jjo',
              createData: '2023-04-07:xxxx',
            },
          },
        },
      ],
      bookmarked: true,
    },
    {
      id: 4,
      name: 'workspace5',
      member: ['qkrtjdwo5662', 'psjj03'],
      workflow: [
        {
          description: '설명',
          writer: 'qkrtjdwo5662',
          createDate: '2023-04-01:xxxx',
          list: {
            todo: {
              content: '내용',
              writer: 'qkrtjdwo5662',
              createData: '2023-04-01:xxxx',
            },
            inprogress: {
              content: '내용',
              writer: 'qkrtjdwo5662',
              createData: '2023-04-01:xxxx',
            },
            done: {
              content: '내용',
              writer: 'qkrtjdwo5662',
              createData: '2023-04-01:xxxx',
            },
          },
        },
      ],
      bookmarked: false,
    },
    {
      id: 5,
      name: 'workspace6',
      member: ['0l0jjo', 'qkrtjdwo5662'],
      workflow: [
        {
          description: '설명',
          writer: '0l0jjo',
          createDate: '2023-04-07:xxxx',
          list: {
            todo: {
              content: '내용',
              writer: '0l0jjo',
              createData: '2023-04-07:xxxx',
            },
            inprogress: {
              content: '내용',
              writer: '0l0jjo',
              createData: '2023-04-07:xxxx',
            },
            done: {
              content: '내용',
              writer: '0l0jjo',
              createData: '2023-04-07:xxxx',
            },
          },
        },
      ],
      bookmarked: true,
    },
  ],
};

// 액션 타입 정의
const CREATE = 'workspace/CREATE';
const DONE = 'workspace/DONE';
const BOOKMARK = 'workspace/BOOKMARK';

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

// 리듀서 설정
export default function workspace(state = initState, action) {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        workspace: [
          ...state.workspace,
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
    default:
      return state;
  }
}
