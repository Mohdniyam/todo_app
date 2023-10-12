import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
function Todolist({item, index, deleteItem}) {
  return (
    <li className="list-item">
      {item}
      <span className="icons">
        <DeleteIcon style={{cursor : "pointer"}}
          onClick={(e) => {
            deleteItem(index);
          }}
        />
      </span>
    </li>
  );
}

export default Todolist;
