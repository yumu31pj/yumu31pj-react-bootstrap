
const removedDashes = (stringWithDashes: string) => {
  const stringRemovedDashes = stringWithDashes.replace(/-/g, "");
  return stringRemovedDashes;
}

export default removedDashes;