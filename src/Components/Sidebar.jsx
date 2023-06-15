/* eslint-disable react/prop-types */
const Sidebar = ({ products, categories, sideBarOpen }) => {
  return (
    <section className={`sidebar ${sideBarOpen ? "open" : ""}`}>
      <div>
        <div>Sidebar</div>
      </div>
    </section>
  );
};

export default Sidebar;
