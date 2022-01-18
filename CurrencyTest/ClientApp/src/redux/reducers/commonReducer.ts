const initialState = {
    loading: false
  };
  
  const commonReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case "SHOW_LOADER":
        return { ...state, loading: true };
  
      case "HIDE_LOADER":
        return { ...state, loading: false };
  
      default:
        return state;
    }
  }
  
  export default commonReducer;