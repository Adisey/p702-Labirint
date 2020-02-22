// Core
import * as React from "react";

type ListItemsProps = {
  list: Array<{ id: string; name: string }>;
};

export const ListItems: React.FC<ListItemsProps> = ({
  list
}: ListItemsProps) => {
  const renderList = list.map(item => {
    return <div key={item.id}>{item.name}</div>;
  });
  console.log(`--(RENDER ListItems)-  ->`);

  return <div>{renderList}</div>;
};
