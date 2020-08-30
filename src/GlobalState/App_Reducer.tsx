export default (state: any, action: any) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transaction: [action.payload, ...state.transactions],
      };
  }
};
