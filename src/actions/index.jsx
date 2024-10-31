// Action_Creator_functions

export const addData = (name, lastName, email) => {
  return {
    type: "ADD",
    name,
    lastName,
    email,
  };
};

export const deleteData = (id) => {
  return {
    type: "DELETE",
    id,
  };
};

export const updateData = (id) => {
  return {
    type: "UPDATE",
    id,
  };
};
