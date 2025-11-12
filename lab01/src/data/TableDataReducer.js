function TableDataReducer(state, action) {
  switch (action.type) {
    case "SORT_ASC":
      return sortData(state, action.column, "asc");

    case "SORT_DESC":
      return sortData(state, action.column, "desc");

    case "RESET":
      return action.originalData;

    default:
      return state;
  }
}

function sortData(data, column, direction) {
  const sorted = [...data].sort((a, b) => {
    let valueA, valueB;

    switch (column) {
      case "user":
        valueA = a.user?.name || "";
        valueB = b.user?.name || "";
        break;

      case "post":
        valueA = a.post.title || "";
        valueB = b.post.title || "";
        break;

      case "comments":
        valueA = a.comments.length;
        valueB = b.comments.length;
        break;

      default:
        return 0;
    }

    if (typeof valueA === "string") {
      if (direction === "asc") {
        return valueA.localeCompare(valueB);
      } else {
        return valueB.localeCompare(valueA);
      }
    } else {
      if (direction === "asc") {
        return valueA - valueB;
      } else {
        return valueB - valueA;
      }
    }
  });

  return sorted;
}

export default TableDataReducer;
