export const addUser = ( user ) => {
    return { type: "ADD_DATA", payload: user }
  }
  export const removeUser = ({ id } = {}) => ({
    type: 'REMOVE_USER',
    id
  });