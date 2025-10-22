function AppReducer(state, action) {
  switch (action.type) {
    case "delete":
      return state.filter((item) => item.id !== action.id);
    case "rate":
      return state.map((item) => {
        if (item.id !== action.id) return item;
        const current = typeof item.rating === "number" ? item.rating : 0;
        const next =
          typeof action.rating === "number"
            ? action.rating
            : current === 10
            ? 0
            : current + 1;
        return { ...item, rating: next };
      });
    case "check":
      return state.map((item) => {
        if (item.id !== action.id) return item;
        return { ...item, checked: !item.checked };
      });
    default:
      return state;
  }
}
export default AppReducer;
