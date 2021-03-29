import "./Forks.styles.scss";

const Forks = ({ forksList = [] }) => {
  return (
    <div className="Forks">
      <p>Last 3 forks: </p>
      <div className="Forks__content">
        {forksList.length
          ? forksList.slice(0, 3).map((item, index) => (
              <div key={index} className="Forks__item">
                <img
                  className="Forks__img"
                  src={item.owner.avatar_url}
                  alt=""
                />
                <a href={item.html_url} target="_blank" rel="noreferrer">
                  {item.owner.login}
                </a>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Forks;
