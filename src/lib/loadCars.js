import axios from "axios";

export default async function loadCars() {
  const { data } = await axios.get("http://localhost:3000/api/cars", { next: { revalidate: 3600 } });
  return data;
}

