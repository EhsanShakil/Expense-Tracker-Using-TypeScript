export default (state: any, action: any) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transaction: [...state.transactions, action.payload],
      };
  }
};
