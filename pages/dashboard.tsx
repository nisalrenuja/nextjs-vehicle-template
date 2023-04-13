import type { NextPage } from "next";
import { faker } from "@faker-js/faker";
import Item, { ItemProps } from "../components/item";
import { useEffect, useState } from "react";
import Link from "next/link";

const Dashboard: NextPage = () => {
  const [itemData, setItemData] = useState<ItemProps[]>([]);
  const userName: string = "Nisal";

  // Generate some fake items.
  useEffect(() => {
    const items: ItemProps[] = [];
    for (let i = 0; i < 3; i++) {
      items.push({
        name: faker.vehicle.vehicle(),
        manufacturer: faker.vehicle.manufacturer(),
        seller: faker.name.findName(),
      });
    }
    setItemData(items);
  }, []);

  const itemElements = [];
  for (let i = 0; i < itemData.length; i++) {
    const item = <Item key={i} {...itemData[i]} />;
    itemElements.push(item);
  }

  return (
    <div>
      <div className="text-center flex flex-col gap-6 items-center">
        {itemElements}
      </div>
      <div className="text-left mt-6 text-sm bg-sky-100 p-3">
        <div className="mt-1 text-blue-500">Signed in as: {userName}</div>
        <Link href="/" className="hover:underline ">
          Sign Out
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
