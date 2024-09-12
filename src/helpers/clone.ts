const clone = <Type>(object: Type): Type => {
  try {
    return structuredClone(object);
  } catch (error) {
    return JSON.parse(JSON.stringify(object));
  }
};

export default clone;
