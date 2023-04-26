import React from "react";
import "./List.scss";
import Card from "../../../../components/Card/Card";
import useFetch from "../../../../hooks/useFetch";

const List = ({ subCats, maxPrice, sort, catId }) => {
  const { data } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );

  return (
    <div className="list">
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
