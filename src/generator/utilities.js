const generalMap = (root, callback, callbackIfFn) => {
  if (Array.isArray(root)) {
    return root.map((elem) => generalMap(elem, callback));
  }

  if (typeof root === "object") {
    const mappedObject = {};
    const keys = Object.keys(root);
    for (const key of keys) {
      mappedObject[key] = generalMap(root[key], callback);
    }

    return mappedObject;
  }

  if (typeof root === "function") {
    return root(callbackIfFn);
  }

  return callback(root);
};

export { generalMap };
