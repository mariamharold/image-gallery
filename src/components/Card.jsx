import data from "../helper/data";

const Card = () => {
  return (
    <div className="container">
      {data.map((item) => {
        return (
          <div className="card">
            <div className="picture">
              <img src={item.src.large} alt="" />
            </div>
            <p>{item.photographer}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
