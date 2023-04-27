import type { FC } from "react";

const Cardreact: FC<ICardreact> = ({ name, url }) => {
  const handleClick = () => {
    window.location.href = `detail/${name}`;
  }
  return (
    <>
      <div className="shadow-lg rounded p-4 cursor-pointer mb-2" onClick={handleClick}>
        <h5>{name}</h5>
      </div>
    </>
  );
};

interface ICardreact {
  name: string;
  url: string;
}

export default Cardreact;
