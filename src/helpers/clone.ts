const clone = <Type>(object: Type): Type => {
  try {
    return structuredClone(object);
  } catch (error) {
    console.warn(
      "structuredClone() is not supported, falling back to JSON method"
    );
    return JSON.parse(JSON.stringify(object));
  }
};

export default clone;
