import carsFromServer from './api/cars';
import colorsFromServer from './api/colors';

export const getColorById = (colorId: number) => (
  colorsFromServer.find(color => color.id === colorId)
);

export const getFullCar = () => {
  return carsFromServer.map(car => ({
    ...car,
    color: getColorById(car.colorId),
  }));
};
