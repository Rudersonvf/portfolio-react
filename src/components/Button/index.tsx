import "./styles.css";

type Props = {
  text: string;
};

export default function Button({ text }: Props) {
  return (
    <a href="https://drive.google.com/file/d/1IWpexwljwkMzk0L0IGNA46V-oZ7RC-Ad/view" target="_blanck">
      <button>{text}</button>
    </a>
  );
}
