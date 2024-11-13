import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore"; //addDoc
import { db } from "../../firebase";
// import { products } from "../../products";
import { useParams } from "react-router-dom";

export const useFetchFirebase = () => {
  const { name } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsCollection = collection(db, "products");
        let docsRef = productsCollection;
        if (name) {
          docsRef = query(productsCollection, where("category", "==", name));
        }
        const res = await getDocs(docsRef);
        const arrayEntendible = res.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setData(arrayEntendible);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [name]);

  return { data, isLoading };
};

