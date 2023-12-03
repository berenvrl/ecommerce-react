export default function MainPart({ children }) {
  return (
    <div className="mainpart">
      <h1>Your Favorite store with trend brands in one place</h1>
      <h2>Find what you look for faster</h2>
      {children}
    </div>
  );
}
