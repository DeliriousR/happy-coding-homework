import todoListReducer, {
  addTodo,
  deleteTodo,
  editTodo,
  toggleTodo,
} from './todoListSlice';

describe('todo list reducer', () => {
  const initialState = {
    items: [
      {
        id: '001',
        info: 'hello world',
        completed: false,
      },
    ]
  };
  it('should handle initial state', () => {
    expect(todoListReducer(undefined, { type: 'unknown' })).toEqual({
      items: [],
    });
  });

  it('should handle addTodo', () => {
    const actual = todoListReducer(initialState, addTodo({
      id: '002',
      info: 'hello world 2',
      completed: false,
    }));
    expect(actual.items).toEqual(
      [
        {
          id: '001',
          info: 'hello world',
          completed: false,
        },
        {
          id: '002',
          info: 'hello world 2',
          completed: false,
        }
      ]
    );
  });

  it('should handle deleteTodo', () => {
    const actual = todoListReducer(initialState, deleteTodo('001'));
    expect(actual.items).toEqual([]);
  });

  it('should handle editTodo', () => {
    const actual = todoListReducer(initialState, editTodo({
      editId: '001',
      title: 'hello world edited',
    }));
    expect(actual.items).toEqual(
      [
        {
          id: '001',
          info: 'hello world edited',
          completed: false,
        },
      ]
    );
  });

  it('should handle toggleTodo', () => {
    const actual = todoListReducer(initialState, toggleTodo('001'));
    expect(actual.items).toEqual(
      [
        {
          id: '001',
          info: 'hello world',
          completed: true,
        },
      ]
    )
  });
})
