import ItemCard from './ItemCard'

function Card() {
  return (
    <ul className="ListaDeCards">
      <ItemCard title={"Café da Manhã"}/>
      <ItemCard title={"Almoço"}/>
      <ItemCard title={"Lanches"}/>
      <ItemCard title={"Janta"}/>
    </ul>
  );
}
export default Card;