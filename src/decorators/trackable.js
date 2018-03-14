export const trackable = (value) => {
  // value is the value passed to the decorator
  console.log(value);

  return (target, name, descriptor) => {

    // the target on which the decorator is placed
    // can be a function, a class... we can access the scope from here if needed
    console.log(target);

    // the name of the function/class which is annotated with the decorator
    console.log(name);

    // descriptor for the field
    // you can hijack the getter/setter from here
    console.log(descriptor);
  };
};
