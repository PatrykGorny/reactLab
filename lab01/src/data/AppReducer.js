export default function AppReducer(state = [], action) {
  switch (action.type) {
    case "check":
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, check: !item.check };
        }
        return item;
      });

    case "rate":
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, rating: action.value, rate: action.value };
        }
        return item;
      });

    case "delete":
      return state.filter((item) => item.id !== action.id);

    case "add":
      return [...state, action.item];

    case "edit":
      return state.map((item) =>
        item.id === action.item.id ? { ...item, ...action.item } : item
      );

    default:
      return state;
  }
}
