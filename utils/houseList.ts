interface HouseListInterface {
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
