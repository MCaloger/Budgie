import React from "react";
import { CategoryManager } from "../../../Contexts/CategoryManager/CategoryManager";
import CategoryList from "./CategoryList";

export default function CategoryViewer() {
  return (
    <div className="content-pane">
      <CategoryManager>
        <div className="transaction-viewer-container">
          <div className="header-text category-display">Categories</div>

          <CategoryList />
        </div>
      </CategoryManager>
    </div>
  );
}
