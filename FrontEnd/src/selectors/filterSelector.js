
// Get visible expenses

export default (data, { text, sortBy, startDate, endDate }) => {
  if(text!==''){
  return data.filter((data) => {
    const textMatch = data.name.toLowerCase().includes(text.trim().toLowerCase());
    return textMatch;
  }).sort();}
  else{
    return [];
  }
};
