import React from "react";
import { Route, Routes, Link, useParams } from "react-router-dom";
import "./Brands.css";

const carData = {
  audi: [
    {
      model: "Audi Q3",
      price: "₹ 44.25 - 54.65 Lakh",
      image:
        "https://images.carandbike.com/car-images/colors/audi/a3/audi-a3-misano-red-pearl-effect.png?v=1",
      description:
        "A compact executive car that combines style and performance.",
    },
    {
      model: "Audi A4",
      price: "₹ 46.02 - 54.58 Lakh",
      image:
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/51909/a4-exterior-right-front-three-quarter-2.jpeg?q=80",
      description:
        "A luxury sedan with advanced features and a comfortable ride.",
    },
    {
      model: "Audi A6",
      price: "₹ 64.39 - 70.76 Lakh",
      image:
        "https://cdn.motor1.com/images/mgl/9mZ4Nv/s1/2023-audi-a6-sedan-unofficial-renderings.webp",
      description:
        "A full-size SUV offering premium features and spacious interior.",
    },
  ],
  mercedes: [
    {
      model: "Mercedes-Benz C-Class",
      image: "",
      description:
        "A stylish compact executive car with high-quality materials.",
    },
    {
      model: "Mercedes-Benz E-Class",
      image: "",
      description: "An elegant executive sedan with cutting-edge technology.",
    },
    {
      model: "Mercedes-Benz GLE",
      image: "",
      description: "A luxury SUV with a smooth ride and powerful performance.",
    },
  ],
  jaguar: [
    {
      model: "Jaguar XE",
      image: "",
      description: "A sporty sedan with dynamic handling and premium features.",
    },
    {
      model: "Jaguar F-Pace",
      image: "",
      description: "A sleek SUV offering a blend of performance and luxury.",
    },
    {
      model: "Jaguar XF",
      image: "",
      description:
        "A refined executive sedan with a comfortable interior and stylish design.",
    },
  ],
  bmw: [
    {
      model: "BMW 3 Series",
      image: "",
      description: "A compact executive car known for its driving dynamics.",
    },
    {
      model: "BMW 5 Series",
      image: "",
      description:
        "A mid-size luxury sedan with advanced technology and comfort.",
    },
    {
      model: "BMW X5",
      image: "",
      description: "A premium SUV offering a blend of performance and luxury.",
    },
  ],
  "mini-cooper": [
    {
      model: "Mini Cooper S",
      image: "",
      description: "A fun-to-drive compact car with a distinctive style.",
    },
    {
      model: "Mini Cooper Countryman",
      image: "",
      description: "A larger Mini with SUV-like features and more space.",
    },
    {
      model: "Mini Cooper Convertible",
      image: "",
      description:
        "A stylish convertible that offers open-top driving pleasure.",
    },
  ],
  skoda: [
    {
      model: "Skoda Octavia",
      image: "",
      description:
        "A practical sedan with a spacious interior and efficient performance.",
    },
    {
      model: "Skoda Superb",
      image: "",
      description: "A large sedan offering luxury features and ample space.",
    },
    {
      model: "Skoda Kodiaq",
      image: "",
      description:
        "A versatile SUV with a roomy interior and modern technology.",
    },
  ],
  kia: [
    {
      model: "Kia Seltos",
      image: "",
      description: "A compact SUV with a bold design and advanced features.",
    },
    {
      model: "Kia Carnival",
      image: "",
      description: "A spacious minivan perfect for family adventures.",
    },
    {
      model: "Kia Sportage",
      image: "",
      description:
        "A compact SUV offering a comfortable ride and modern amenities.",
    },
  ],
  hyundai: [
    {
      model: "Hyundai Elantra",
      image: "",
      description:
        "A compact sedan with a sleek design and efficient performance.",
    },
    {
      model: "Hyundai Tucson",
      image: "",
      description:
        "A stylish SUV with a comfortable interior and advanced safety features.",
    },
    {
      model: "Hyundai Creta",
      image: "",
      description: "A compact SUV with a spacious cabin and modern technology.",
    },
  ],
  ford: [
    {
      model: "Ford EcoSport",
      image: "",
      description:
        "A compact SUV with rugged styling and versatile capabilities.",
    },
    {
      model: "Ford Endeavour",
      image: "",
      description:
        "A full-size SUV offering robust performance and off-road capabilities.",
    },
    {
      model: "Ford Figo",
      image: "",
      description:
        "A practical hatchback with a sporty design and efficient performance.",
    },
  ],
  nissan: [
    {
      model: "Nissan Altima",
      image: "",
      description:
        "A mid-size sedan with a comfortable ride and advanced features.",
    },
    {
      model: "Nissan Rogue",
      image: "",
      description:
        "A compact SUV with a spacious interior and user-friendly technology.",
    },
    {
      model: "Nissan Sentra",
      image: "",
      description:
        "A compact sedan with a stylish design and efficient performance.",
    },
  ],
};

const CarList = ({ brand }) => {
  const cars = carData[brand] || [];
  return (
    <div className="car-list">
      <ul>
        {cars.map((car, index) => (
          <li key={index}>
            {car.image && <img src={car.image} alt={car.model} />}
            <div className="car-info">
              <div className="info-content">
                <h3>{car.model}</h3>
                <p>{car.price}</p>
                <p>{car.description}</p>
              </div>
              <button>CHECK ON ROAD PRICE</button>
              <div>
                <button>Reviews</button>
                <button>Images</button>
                <button>Mileage</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const BrandList = () => {
  return (
    <div className="container">
      <h1>Select a Car Brand</h1>
      <ul>
        {Object.keys(carData).map((brand) => (
          <li key={brand}>
            <Link to={`/brands/${brand}`}>
              {brand.charAt(0).toUpperCase() + brand.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const BrandPage = () => {
  const { brand } = useParams();
  return (
    <div className="container">
      <CarList brand={brand} />
    </div>
  );
};

export const Brands = () => {
  return (
    <Routes>
      <Route path="/" element={<BrandList />} />
      <Route path=":brand" element={<BrandPage />} />
    </Routes>
  );
};
