import ColorMenu from "./ColorMenu";
import Item from "./Item";
const webs = [
  {
    name: "Twitter",
    link: "https://twitter.com/3taelith/",
  },
  {
    name: "Facebook",
    link: "https://twitter.com/3taelith/",
  },
  {
    name: "Instagram",
    link: "https://twitter.com/3taelith/",
  },
  {
    name: "Paypal",
    link: "https://twitter.com/3taelith/",
  },
  {
    name: "Onlyfans",
    link: "https://twitter.com/3taelith/",
  },
  {
    name: "Amazon",
    link: "https://twitter.com/3taelith/",
  },
];
const Main = () => {
  return (
    <div className="text-white my-4 mx-4">
      <h1>Dashboard</h1>
      <div>
        <ColorMenu />
        <form className="pt-4">
          <input />
          <label htmlFor="">+ Add link</label>
        </form>
        <ul className="pt-4">
          {webs.map((item, index) => (
            <Item key={index} props={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Main;
