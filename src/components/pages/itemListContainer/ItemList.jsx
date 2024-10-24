
import Card from "../../common/Card";

const ItemList = ({ items }) => {
  return (
    <>
      
      <div className="flex justify-center flex-wrap ">
        {items.map(({ id, title, price, stock, image, description, category }) => (
          <Card
            key={id}
            title={title}
            price={price}
            stock={stock}
            image={image}
            description={description}
            category={category}
            id={id}
          />
        ))}
      </div>
    </>
  );
};

export default ItemList;
