export interface ItemProps {
  name: string;
  manufacturer: string;
  seller: string;
}

const Item: React.FC<ItemProps> = (props) => {
  return (
    <div className="w-full">
      <div className="flex justify-between">
        <div>
          <div className="text-black font-bold text-left">{props.name}</div>
          <div className="flex gap-2 text-base">
            <div className="text-green-600">by {props.manufacturer}</div>
            <div className="text-gray-500">from {props.seller}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
