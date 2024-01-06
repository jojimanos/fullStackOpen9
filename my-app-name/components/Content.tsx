import React from "react";
import Part from "./Part"
import { CoursePart } from "../types/types";

type ContentProps = {
  courseParts: CoursePart[];
};

const Content = ({ courseParts }: ContentProps): React.ReactElement => {
  return (
    <div>
      {courseParts.map((c, i) => <Part key={i} coursePart={c}/>)}
    </div>
  );
};

export default Content;
