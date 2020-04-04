export function classNames(classesObject: { [key: string]: boolean }) {
  let classes: string[] = [];
  Object.entries(classesObject).forEach(([className, isApplied]) => {
    if (isApplied) {
      classes.push(className);
    }
  });
  return classes.join(" ");
}
