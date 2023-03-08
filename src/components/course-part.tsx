import type { CoursePart } from "../courses";
import { assertNever } from "../utils";

export function CourseParts(props: { courseParts: CoursePart[] }) {
  const { courseParts } = props;

  return (
    <div>
      {courseParts.map((part) => {
        switch (part.kind) {
          case "basic": {
            console.log(part.name, part.description, part.exerciseCount);
            return null;
          }
          case "group": {
            console.log(part.name, part.exerciseCount, part.groupProjectCount);
            return null;
          }
          case "backround": {
            console.log(
              part.name,
              part.description,
              part.exerciseCount,
              part.backroundMaterial
            );
            return null;
          }
          default: {
            return assertNever(part);
          }
        }
      })}
    </div>
  );
}
