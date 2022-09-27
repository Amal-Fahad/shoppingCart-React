import { useSelector } from "react-redux";

function Footer() {
  const { siteName } = useSelector((state) => state.Products);
  return (
    <div className="appFooter">
      <p> {siteName} developed with ReactJS </p>
    </div>
  );
}

export default Footer;
