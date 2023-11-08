import React from "react";

type courseParts = {
  name: string;
  exerciseCount: number;
};

type ContentProps = {
  courseParts: courseParts[];
};

const Content = ({ courseParts }: ContentProps): React.ReactElement => {
  return (
    <div>
      <p>
        {courseParts[0].name} {courseParts[0].exerciseCount}
      </p>
      <p>
        {courseParts[1].name} {courseParts[1].exerciseCount}
      </p>
      <p>
        {courseParts[2].name} {courseParts[2].exerciseCount}
      </p>
    </div>
  );
};

export default Content;
