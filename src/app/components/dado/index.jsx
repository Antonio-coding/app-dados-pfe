import { Styles } from "@/app/(pages)/game-page/style";

const dados = [
  "https://cdn.glitch.global/d06ef131-6a92-4c03-9b83-0c7f07ea77eb/dado1.png?v=1709855087643",
  "https://cdn.glitch.global/d06ef131-6a92-4c03-9b83-0c7f07ea77eb/dado2.png?v=1709855088164",
  "https://cdn.glitch.global/d06ef131-6a92-4c03-9b83-0c7f07ea77eb/dado3.png?v=1709855088659",
  "https://cdn.glitch.global/d06ef131-6a92-4c03-9b83-0c7f07ea77eb/dado4.png?v=1709855089180",
  "https://cdn.glitch.global/d06ef131-6a92-4c03-9b83-0c7f07ea77eb/dado5.png?v=1709855089711",
  "https://cdn.glitch.global/d06ef131-6a92-4c03-9b83-0c7f07ea77eb/dado6.png?v=1709855090308",
];

export const Dado = ({ valor }) => {
  // return <h2>{valor}</h2>;
  return (
    <div>
      <img className="w-[15rem]" src={dados[valor - 1]} alt="Dado" />
      <h2 className={Styles.text}>Dado = {valor}</h2>
    </div>
  );
};
