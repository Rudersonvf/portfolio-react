import "./styles.css";

type Props ={
    text:string
}

export default function Tittle({text}: Props){
    return(
        <div className="pf-tittle-container">
            <hr />
            <h2>{text}</h2>
        </div>
    );
}