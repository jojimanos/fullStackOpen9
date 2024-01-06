import React from "react";
import { CoursePart } from "../types/types";
import { assertNever } from "../utils/exhaustiveTypeChecking";

interface PartProps {
  coursePart: CoursePart;
}

const Part = ({ coursePart }: PartProps): React.ReactElement => {
  const parsedCoursePart = (coursePart: CoursePart) => {
    switch (coursePart.kind) {
      case "basic":
        return {
          name: coursePart.name,
          exerciseCount: coursePart.exerciseCount,
          description: coursePart.description,
        };
      case "group":
        return {
          name: coursePart.name,
          exerciseCount: coursePart.exerciseCount,
          groupProjectCount: coursePart.groupProjectCount,
        };
      case "background":
        return {
          name: coursePart.name,
          exerciseCount: coursePart.exerciseCount,
          description: coursePart.description,
          backgroundMaterial: coursePart.backgroundMaterial,
        };
      case "special":
        return {
          name: coursePart.name,
          exerciseCount: coursePart.exerciseCount,
          description: coursePart.description,
          requirements: coursePart.requirements,
        };
      default:
        return assertNever(coursePart);
    }
  };

  const displayData = parsedCoursePart(coursePart);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>
              <h3>{displayData.name}</h3>
            </td>
          </tr>
        </thead>
        <tbody>
          {displayData.description && (
            <tr>
              <td>Description: {displayData?.description}</td>
            </tr>
          )}
          <tr>
            <td>Exercise Count: {displayData.exerciseCount}</td>
          </tr>
          {displayData.groupProjectCount && (
            <tr>
              <td>Group Project Count: {displayData?.groupProjectCount}</td>
            </tr>
          )}
          {displayData.backgroundMaterial && (
            <tr>
              <td>Background Material: {displayData?.backgroundMaterial}</td>
            </tr>
          )}
        </tbody>
      </table>
      <hr />
    </div>
  );
};

export default Part;
