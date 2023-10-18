import { twMerge } from 'tailwind-merge';

type ClassNameValues = ClassNameValue[];
// eslint-disable-next-line no-magic-numbers
type ClassNameValue = string | false | 0 | ClassNameValues | null | undefined;

export const tw = (...classList: ClassNameValues) => {
  return twMerge(classList);
};

export default tw;
