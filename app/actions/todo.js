// @flow
export const ADDTODO = 'ADDTODO';
export const HIDETODO = 'HIDETODO';

let counter = 0;
export function addTodo(text: string) {
  return (dispatch: () => void) => {
    counter += 1;
    dispatch({
      type: ADDTODO,
      todo: {
        id: counter,
        name: text,
        completed: false,
      },
    });
  };
}
