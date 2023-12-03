export default function FilteredItem({ item, i, handleAddCart }) {
  return (
    <li className="item" key={item.id}>
      <h3>{item.title}</h3>
      <img src={item.image} alt={item.title} />
      <p>{item.description}</p>
      <p>
        Price: <span> ${item.price}</span>
      </p>
      <p>
        Rating⭐: <span>{`${item.rating.rate} (${item.rating.count})`}</span>
      </p>
      <button className="cartbtn" onClick={() => handleAddCart(item)}>
        Add to cart
      </button>
    </li>
  );
}
