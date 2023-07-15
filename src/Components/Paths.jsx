import { Link } from "react-router-dom";

const Paths = ({ paths }) => {
  return (
    <section className="route">
      {paths.map((path) => (
        <div key={path.title}>
          <Link
            to={path.link}
            className="route-label no-txt-decoration box-shadow"
          >
            {path.title}
          </Link>
          {path.title === paths[paths.length - 1].title ? "" : `\u00A0>\u00A0`}
        </div>
      ))}
    </section>
  );
};

export default Paths;
