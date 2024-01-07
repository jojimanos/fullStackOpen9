import React, { SetStateAction } from "react";

interface VisibilityInputProps {
  visibility: string;
  setVisibility: React.Dispatch<SetStateAction<string>>;
}

const VisibilityInput = ({
  visibility,
  setVisibility,
}: VisibilityInputProps) => {
  const visibilityValues = ["great", "good", "ok", "poor"];

  return (
    <div>
      <label>Visibility: </label>
      <fieldset>
        {visibilityValues.map((v, i) => (
          <div key={i}>
            <input
              name="visibility"
              type="radio"
              value={v}
              onChange={(e) => {
                setVisibility(e.target.value);
              }}
              checked={visibility === v}
            />
            <label>{v}</label>
          </div>
        ))}
      </fieldset>
      <hr />
    </div>
  );
};

export default VisibilityInput;
