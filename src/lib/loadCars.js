import axios from "axios";

export default async function loadCars() {
  // const { data } = await axios.get("http://localhost:3000/api/cars", { next: { revalidate: 3600 } });
  const { data } = await axios.get("ford-mustang-lover-shop-next-8jgjq81r6-roddy-21-25.vercel.app/api/cars", { next: { revalidate: 3600 } });
  return data;
}

