import './styles.css';

const Chore = (props) => {
  const { isChoreDone, onChoreChange, choreName, iconClassName } = props;
  return (
    <label className="chore">
      <i className={iconClassName}></i>
      <span>{choreName}</span>
      <input
        type="checkbox"
        value={isChoreDone}
        onChange={onChoreChange}
      />
    </label>
  );
}

export default Chore;
