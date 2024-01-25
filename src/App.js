import FoodList from './components/FoodList';

export default function App() {
  const fooditem = ["pizza", "burger", "cake", "ice-cream"];
  return (
    <div>
      <FoodList item={fooditem} />
    </div>
  );
}