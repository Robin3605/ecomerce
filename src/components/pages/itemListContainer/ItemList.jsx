import { useFetchFirebase } from "../../../utils/hooks/usefirebase";
// import Banner from "../../common/Banner";
import Card from "../../common/Card";
import Loader from "../../common/Loader";


const ItemList = () => {
  const { data, isLoading } = useFetchFirebase();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section>
      {/* <Banner /> */}
      <div className="flex justify-center flex-wrap ">
        {data.map(
          ({ id, title, price, stock, image, description, category }) => (
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
          )
        )}
      </div>
    </section>
  );
};

export default ItemList;

