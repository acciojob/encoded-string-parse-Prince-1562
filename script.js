function parseCode(encodedString) {
 
  const parts = encodedString.split(/0+/);
  

  const [firstName, lastName, id] = parts;
  
 
  return {
    firstName,
    lastName,
    id
  };
}
