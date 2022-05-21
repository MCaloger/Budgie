import React, { useContext } from "react";
import { CategoryContext } from "../../../Contexts/CategoryManager/CategoryManager";
import { ReactComponent as TrashIcon } from "../../../img/trashicon.svg";
import Tooltip from "../../Tooltip/Tooltip";

export default function CategoryItem(props) {
  const categories = useContext(CategoryContext);

  const handleDelete = () => {
    categories.deleteCategory(props.id);
  };

  return (
    <div className="category-list-item">
      <div>{props.categoryName}</div>
      {props.categoryName !== "None" ? (
        <div>
          <Tooltip text="Delete">
            <button className="ui-icon" onClick={handleDelete}>
              <TrashIcon />
            </button>
          </Tooltip>
        </div>
      ) : null}
    </div>
  );
}
