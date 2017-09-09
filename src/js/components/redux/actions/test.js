//reducer action, use redux dispatch.

export default function test(state = {
  isTest: true
}, action) {
  switch(action.type) {
    case 'HELLO':
      return {
        ...state,
        isTest: false
      }
  }
  return state;
}