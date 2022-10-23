export interface HouseListInterface {
  town: string;
  country: string;
  lat: number;
  lng: number;
  rating: number;
  price: number;
  distance: string;
  dateRange: string;
  like: boolean;
  imageUrl: string;
}

export const houseList: [HouseListInterface] = [
  {
    town: "Charco del Palo",
    country: "Spain",
    lat: 28.5,
    lng: -16.25,
    rating: 4.5,
    price: 122,
    distance: "3,077",
    dateRange: "Feb 9 - 16",
    like: false,
    imageUrl:
      "https://a0.muscache.com/im/pictures/prohost-api/Ho…27d4c26-43d5-42da-ad84-d039515c0bad.jpeg?im_w=720",
  },
];
let house = {
  town: "Charco del Palo",
  country: "Spain",
  lat: 28.5,
  lng: -16.25,
  rating: 4.5,
  price: 122,
  distance: "3,077",
  dateRange: "Feb 9 - 16",
  like: false,
  imageUrl:
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
};

export const ListCopy: any = [];

for (let i = 0; i < 20; i++) {
  ListCopy.push(house);
}
