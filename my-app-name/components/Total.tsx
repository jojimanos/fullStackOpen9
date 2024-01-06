import React from "react";

type TotalProps = {
  totalExercises: number;
};

const Total = (props: TotalProps): React.ReactElement => {
  return (
    <div>
      <strong>Total exercises:</strong> {props.totalExercises}
    </div>
  );
};

export default Total;
