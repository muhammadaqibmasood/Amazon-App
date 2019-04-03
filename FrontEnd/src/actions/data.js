
export const setUsers = (products) => {
  return { type: "SET_USERS", payload:  products
 }
}
// ADD_DATA
export const addData = (
  {
    name = '',
    account = '',
    amount = 0,
    id='',
    date=''
  } = {}
) => ({
  type: 'ADD_DATA',
  data: {
    id,
    name,
    account,
    amount,
    date
  }
});
export const Withdraw = (id,updates) => ({
  type: 'WITHDRAW',
  id,
  updates
});
export const Deposite = (id,updates) => ({
  type: 'DEPOSITE',
  id,
  updates
});


// REMOVE_DATA

