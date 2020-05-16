export type ClassNameOption = { [key: string]: boolean } | string;

export function classNames(...cssClasses: ClassNameOption[]): string {
  let classes: string[] = [];

  cssClasses.forEach((option: ClassNameOption) => {
    if (typeof option === "string") {
      classes.push(option);
    } else {
      Object.entries(option).forEach(([className, isApplied]) => {
        if (isApplied) {
          classes.push(className);
        }
      });
    }
  });

  return classes.join(" ");
}
