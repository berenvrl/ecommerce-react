export default function AddedItem({ added, handleDeleteAddedItem }) {
  return (
    <li>
      <img src={added.image} alt={added.title} />
      <p>{added.title}</p>
      <p>${added.price}</p>
      <button onClick={() => handleDeleteAddedItem(added)}>❌</button>
    </li>
  );
}
