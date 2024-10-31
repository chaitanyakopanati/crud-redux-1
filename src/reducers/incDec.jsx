//Reducers for an Actions

const initialDataValue = [];

const addDataHandler = (action) => {
  return {
    id: new Date().getTime().toString(),
    name: action.name,
    lastName: action.lastName,
    email: action.email,
  };
};

const deleteDataHandler = (state = initialDataValue, id) => {
  const updatedList = state.filter((user) => {
    return user.id !== id;
  });
  return updatedList;
};

const updateDataHandler = (state = initialDataValue, id) => {
  const editdetail = state.find((name) => {
    return name.id === id;
  });
  return editdetail;
};

const dataHandler = (state = initialDataValue, action) => {
  let userDetails = null;
  switch (action.type) {
    case "ADD":
      userDetails = [...state, addDataHandler(action)];
      return userDetails;
    case "DELETE":
      userDetails = deleteDataHandler(state, action.id);
      return userDetails;
    case "UPDATE":
      userDetails = updateDataHandler(state, action.id);
      return userDetails;
    default:
      return state;
  }
};

export { dataHandler };
