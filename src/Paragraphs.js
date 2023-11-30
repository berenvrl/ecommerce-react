function Paragraphs() {
  return (
    <div className="paragraphs">
      <Paragraph>
        <h3>Time saving</h3>
        <p>
          We want to make serach easier for you and save your time on doing your
          best shopping online. Search our collection online and get what you
          need, easy 💖
        </p>
      </Paragraph>
      <Paragraph>
        <h3>Generating positive impacts</h3>
        <p>
          We have identified sustainability goals that allow us to continue
          advancing the transformation of our model, reducing the environment
          footprint of the manufacturing of our products and our own activity ☘️
        </p>
      </Paragraph>
      <Paragraph>
        <h3>Always search of new ways</h3>
        <p>
          We are aware of the challenges the fashion industry faces and we are
          working on finding new technologies and processes to create our
          fashion with a maximum innovation and limited impact 🎯
        </p>
      </Paragraph>
    </div>
  );
}
function Paragraph({ children }) {
  return <div className="para">{children}</div>;
}
export default Paragraphs;
