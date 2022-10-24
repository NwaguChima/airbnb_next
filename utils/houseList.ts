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
  imageUrl: [string];
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
    imageUrl: [
      "https://a0.muscache.com/im/pictures/prohost-api/Ho…27d4c26-43d5-42da-ad84-d039515c0bad.jpeg?im_w=720",
    ],
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
  imageUrl: [
    "https://a0.muscache.com/im/pictures/f8f6ef8f-30ff-4df5-ba1a-b61326ff8f8a.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/a4550fcc-8aad-4f2a-a602-eabcca3cf3dd.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/3e37a3ee-6471-4356-b7ca-6856ab59b104.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/d9f4ff71-ae26-45bd-a1d9-8931b6d03119.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/a4550fcc-8aad-4f2a-a602-eabcca3cf3dd.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-597056829856000897/original/4d876698-f837-4dd6-9369-0db1b5acdb50.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/a4550fcc-8aad-4f2a-a602-eabcca3cf3dd.jpg?im_w=720",
  ],
};

export const ListCopy: any = [];

for (let i = 0; i < 20; i++) {
  ListCopy.push(house);
}
