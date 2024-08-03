import Properties from "../components/mock/mockPropertiesData.json";

const useConstantsData = () => {
  const bedRoomsCount = ["Any", 1, 2, 3, 4, 5, 6, 7, 8];

  const locations = Properties.map((each) => each.location);

  const amenities = [
    "WiFi",
    "Air Conditioning",
    "Pool",
    "Garage",
    "Gym",
    "Pet Friendly",
    "Balcony",
    "Heating",
    "Kitchen",
    "Washer",
    "Dryer",
    "Elevator",
    "Free Parking",
    "Wheelchair Accessible",
    "Sauna",
    "Hot Tub",
    "Garden",
    "Fireplace",
    "Security System",
    "Home Office",
    "Smart Home",
  ];

  return [bedRoomsCount, locations, amenities ];
};

export default useConstantsData;
