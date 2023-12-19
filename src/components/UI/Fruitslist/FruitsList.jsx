import styles from "./FruitsList.module.css";

const FruitsList = (props) => {
  return (
    <ul className={styles.list}>
      {props?.fruits?.map((f) => {
        return (
          <li key={f.id}>
            <span>{f.name}</span>
            <span>{f.price}</span>
            <button
              className={styles.btn}
              onClick={props.deleteHandler.bind(null, f.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default FruitsList;
