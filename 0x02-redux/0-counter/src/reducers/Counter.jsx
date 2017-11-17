
const Increment = 'INCREMENT';

export default function CounterApp(state = 0, action) {
  switch(action.type) {
    case types.INCREMENT:
      return state = state + 1;
  }
  return state;
}

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default Counter;
