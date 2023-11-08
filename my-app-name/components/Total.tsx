import React from "react";

type TotalProps = {
  totalExercises: number;
};

const Total = (props: TotalProps): React.ReactElement => {
  return (
    <div>
        {props.totalExercises}
    </div>
  );
};

export default Total;
