import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";

const resList = [
  {
    info: {
      id: "588619",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/4398bfb2-6948-484a-9613-2d7628a2457a_588619.JPG",
      locality: "Brigade Road",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/377e9327-3ca7-48ac-b36c-96f5bf6e186a_671928.JPG",
      areaName: "Central Bangalore",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.4,
      parentId: "547",
      avgRatingString: "4.4",
      totalRatingsString: "2.2K+",
      deliveryTime: "30",
    },
  },
  {
    info: {
      id: "43836",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/5e7991d9-6a0d-4034-82a9-59bd2bbdc0b3_43836.jpg",
      locality: "MG Road",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/edc568f6-6813-4f2d-a670-911788f1f04f_23678.jpg",
      areaName: "Ashok Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.4,
      parentId: "630",
      avgRatingString: "4.4",
      totalRatingsString: "25K+",
      deliveryTime: "40",
    },
  },
  {
    info: {
      id: "69876",
      name: "Subway",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/0f27fbff-1e49-4161-a0a5-848062423b76_69876.JPG",
      locality: "UB City",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/028cd410-8376-4db2-aae3-0a34de711943_656392.JPG",
      areaName: "Vittal Mallya Road",
      costForTwo: "₹350 for two",
      cuisines: ["Sandwich", "Salads", "Wrap", "Healthy Food"],
      avgRating: 4.4,
      parentId: "2",
      avgRatingString: "4.4",
      totalRatingsString: "3.7K+",
      deliveryTime: "45",
    },
  },
  {
    info: {
      id: "51835",
      name: "Omm Nom Nomm",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/18/c5ae8daa-d5ca-40e6-a6da-04acf7ae26e1_51835.jpg",
      locality: "Shivaji Nagar",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/0b6ccedf0af57a82ecea2910397bb947",
      areaName: "Shivaji Nagar",
      costForTwo: "₹700 for two",
      cuisines: ["Desserts", "Bakery"],
      avgRating: 4.7,
      parentId: "3807",
      avgRatingString: "4.7",
      totalRatingsString: "1.9K+",
      deliveryTime: "30",
    },
  },
  {
    info: {
      id: "281469",
      name: "Third wave Cafe",
      cloudinaryImageId: "emlehbuwgsmryxhwzhvq",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d96267738c19ec62acb5390e52faba41",
      locality: "St. Marks Road",
      areaName: "St. Marks Road",
      costForTwo: "₹750 for two",
      cuisines: ["Bakery", "Desserts"],
      avgRating: 4.6,
      parentId: "10530",
      avgRatingString: "4.6",
      totalRatingsString: "4.9K+",
      deliveryTime: "40",
    },
  },
  {
    info: {
      id: "426730",
      name: "Theobroma",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/2/d9cf35fc-2891-47bc-b5e8-f7d5cef27b18_426730.jpg",
      locality: "Lavelle Road",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/2/d512978b-3dde-48b9-a974-ca7be403eef1_426776.jpg",
      areaName: "Ashok Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Desserts", "Bakery", "Beverages"],
      avgRating: 4.7,
      parentId: "1040",
      avgRatingString: "4.7",
      totalRatingsString: "5.1K+",
      deliveryTime: "35",
    },
  },
  {
    info: {
      id: "3434",
      name: "Nandhini Palace",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/3/7f19aaac-7299-4b54-a22d-69fd67f8fb65_3434.jpg",
      locality: "St. Marks Road",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/21/c16228db-0f86-484e-b3b4-2fb707f22b76_18973.jpg",
      areaName: "St Marks Road",
      costForTwo: "₹500 for two",
      cuisines: ["Andhra", "Biryani", "Chinese", "North Indian"],
      avgRating: 4.3,
      parentId: "2451",
      avgRatingString: "4.3",
      totalRatingsString: "18K+",
      deliveryTime: "30",
    },
  },
  {
    info: {
      id: "176071",
      name: "Brahmins' Thatte Idli",
      cloudinaryImageId: "pe1savupw5miak1g0ylt",
      locality: "Vyalikaval",
      img: "https://content3.jdmagicbox.com/comp/def_content_category/brahmins-thatte-idli/screenshot-3-brahmins-thatte-idli-2-jxx8v.jpg",
      areaName: "Malleshwaram",
      costForTwo: "₹150 for two",
      cuisines: ["South Indian"],
      avgRating: 4.5,
      veg: true,
      parentId: "1312",
      avgRatingString: "4.5",
      totalRatingsString: "7.8K+",
      deliveryTime: "40",
    },
  },
  {
    info: {
      id: "53503",
      name: "Vadakkan Cafe",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/21/1999d787-3984-4db9-b817-55ffc0c3b0e8_53503.jpg",
      locality: "Church Street",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mfyjcr4b3ntto55lslpp",
      areaName: "Church Street",
      costForTwo: "₹700 for two",
      cuisines: ["Italian", "Pizzas", "Desserts", "Beverages"],
      avgRating: 4.4,
      parentId: "488952",
      avgRatingString: "4.4",
      totalRatingsString: "11K+",
      deliveryTime: "35",
    },
  },
  {
    info: {
      id: "395202",
      name: "Candice's Gourmet",
      cloudinaryImageId: "rqdtdkc3iqzxodv6vtyf",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d1331113564b015c9d55c48ff48a2553",
      locality: "MG Road",
      areaName: "Central Bangalore",
      costForTwo: "₹600 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.6,
      parentId: "10761",
      avgRatingString: "4.6",
      totalRatingsString: "145",
      deliveryTime: "15",
    },
  },
  {
    info: {
      id: "4046",
      name: "Go Native",
      cloudinaryImageId: "tfbnpd65irvhp9iwhbtk",
      locality: "Residency Road",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/459ac48ea894c6322f64b58cfcf5d3e8",
      areaName: "Central Bangalore",
      costForTwo: "₹200 for two",
      cuisines: [
        "North Indian",
        "South Indian",
        "Chinese",
        "Chaat",
        "Beverages",
      ],
      avgRating: 4.6,
      parentId: "4284",
      avgRatingString: "4.6",
      totalRatingsString: "37K+",
      deliveryTime: "20",
    },
  },
  {
    info: {
      id: "17376",
      name: "Sour House",
      cloudinaryImageId: "m6jahioyu7zrodei5pcq",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cihuy7nxa3lhf0qj1eom",
      locality: "Lavelle Road",
      areaName: "Ashok Nagar",
      costForTwo: "₹500 for two",
      cuisines: ["Desserts", "Bakery", "Beverages", "Continental", "Italian"],
      avgRating: 4.7,
      parentId: "3220",
      avgRatingString: "4.7",
      totalRatingsString: "25K+",
      deliveryTime: "12",
    },
  },
  {
    info: {
      id: "187384",
      name: "Kink Coffee",
      cloudinaryImageId: "1a0521375f07155eda2f1ed263206831",
      locality: "Infantry Road",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/45d360c8676d0dbf7b5c5e8f19847a61",
      areaName: "Central Bangalore",
      costForTwo: "₹600 for two",
      cuisines: ["Cafe", "Coffee", "Beverages"],
      avgRating: 4.6,
      parentId: "2682",
      avgRatingString: "4.6",
      totalRatingsString: "1.1K+",
      deliveryTime: "10",
    },
  },
];

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);

//https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
