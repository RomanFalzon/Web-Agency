const myFunction = (message) => {
  console.log(`Function from external file: ${message}`);
};

const anotherFunction = (value) => {
  console.log(`Another function from external file: ${value}`);
};

export { anotherFunction };
export default myFunction;
