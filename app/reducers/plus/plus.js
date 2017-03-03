import { INCREMENT, DECREMENT, ASKINGSERVER } from '../../actions/plus';

type actionType = {
  type: string
};

type statePlus = {
  id: number,
  previous: number,
  name: string,
  current: number
};

export default function counterPlus(
  state: statePlus = {
    id: 0,
    previous: 0,
    name: '1',
    current: 0,
  },
  action: actionType,
) {
  console.log(state, action.type, ASKINGSERVER);
  switch (action.type) {
    case ASKINGSERVER:
      console.log(action);
      console.log(state.current, 'ini');
      return action.state;
    default:
      return state;
  }
}
