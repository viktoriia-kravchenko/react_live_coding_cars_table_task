import React, { useState } from 'react';
import { getFullCar } from './helpers';
// import carsFromServer from './api/cars';
// import colorsFromServer from './api/colors';

// 1. Render car with color
// 2. Add ability to filter car by brand name
// 3. Add ability to filter car by color

export const App: React.FC = () => {
  const [cars] = useState(getFullCar);
  const [brandName, setBrandName] = useState('');

  // const visibleCars

  return (
    <div>
      <input
        type="search"
        placeholder="Find by car brand"
        value={brandName}
        onChange={(event) => setBrandName(event.target.value)}
      />

      <select>
        <option>Chose a color</option>
      </select>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Brand</th>
            <th>Color</th>
            <th>Rent price</th>
          </tr>
        </thead>
        <tbody>
          {cars.map(car => (
            <tr>
              <td>{car.id}</td>
              <td>{car.brand}</td>
              <td style={{ color: 'red' }}>{car.color?.name}</td>
              <td>{car.rentPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
