

const collection=[];

export default (state = collection, action) => {
  switch (action.type) {
    case 'SET_USERS':
      console.log("got data on store",[...action.payload])
    return [
        ...action.payload
      ];
    
      default:
      return state;
    }
  };
  
  // case 'REMOVE_DATA':
  //   return state.filter(({ id }) => id !== action.id);
  // case 'WITHDRAW':
  //   return state.map((data) => {
  //     if (data.id === Number(action.id)) {
  //       return {
  //         ...data,
  //         ...action.updates
  //       }
  //     }
  //     else
  //     { return data;}
  //     });
  // case 'DEPOSITE':
  //   return state.map((data) => {
  //     if (data.id === Number(action.id)) {
  //       return {
  //         ...data,
  //         ...action.updates
  //       }
  //     }
  //     else
  //     { return data;}
  //     });