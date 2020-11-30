import './styles.css';

const Chore = (props) => {
  const { isChoreDone, onChoreClick, choreName, iconClassName } = props;
  return (
    <label className="chore">
      <i className={iconClassName}></i>
      <span>{choreName}</span>
      <input
        type="checkbox"
        value={isChoreDone}
        onChange={onChoreClick}
      />
    </label>
  );
}

export default Chore;
