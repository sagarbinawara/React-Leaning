import React, { useContext } from "react";
import UseApiCall from "./UseApiCall";
import dataContext from "./ContextApi/createContextFile";
const List = React.memo(() => {
  const listData = useContext(dataContext);

  const containerStyle = {
    display: "grid",
    gap: "20px",
    padding: "20px",
    gridTemplateColumns: `repeat(3, 1fr)`, // Dynamically set columns
  };

  return (
    <div style={containerStyle}>
      {listData.map((item) => {
        return (
          <div style={{ border: "1px solid grey", padding: "20px" }}>
            {item?.name}
          </div>
        );
      })}
    </div>
  );
});

export default List;
