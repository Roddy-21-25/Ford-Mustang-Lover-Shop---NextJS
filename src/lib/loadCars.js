import axios from "axios";

// export default async function loadCars() {
//   const { data } = await axios.get("http://localhost:3000/api/cars", { next: { revalidate: 3600 } });
//   const { data } = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/cars`, {
//     next: { revalidate: 3600 },
//   });
//   return data;
// }

export default async function loadCars() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/cars`);
  const data = await response.json();

  return data;
}

// export async function getServerSideProps() {
//   const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/users`);
//   const data = await response.json();

//   return {
//     props: {
//       users: data,
//     },
//   };
// }
