import React from "react";

type EntryProps = {
  id: number;
  date: string;
  weather: string;
  visibility: string;
};

const Entry = ({
  id,
  date,
  weather,
  visibility,
}: EntryProps): React.ReactElement => {
  return (
    <div>
      {id} {date} {weather} {visibility}
    </div>
  );
};

export default Entry;
