import axios from "axios";

export default async function loadCars() {
  // const { data } = await axios.get("http://localhost:3000/api/cars", { next: { revalidate: 3600 } });
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/cars`, { next: { revalidate: 3600 } });
  return data;
}

