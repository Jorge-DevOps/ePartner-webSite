import React from "react";
import { TableProducts} from "../components";
import { dataProducts } from "../data/dataProducts";
const data = dataProducts;
const titles = ["Product ID", "Name", "Category", "Brand"];

const Products = () => {
  return (
      <div className="products">
        <div className="products-search">
          <input type="text" className="products-search-input" />
        </div>
        <table className="table-data">
          <TableProducts data={data} />
        </table>
      </div>
  );
};

export { Products };