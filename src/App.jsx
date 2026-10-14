import Header from "./sections/Header";
import Hero from "./sections/Hero";
import QuickFacts from "./sections/QuickFacts";
import PrivateLabel from "./sections/PrivateLabel";
import Company from "./sections/Company";
import Products, { OtherProducts } from "./sections/Products";
import Moments from "./sections/Moments";
import Quality from "./sections/Quality";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import WhatsAppFloat from "./sections/WhatsAppFloat";

export default function App() {
  return <><Header /><main id="inicio"><Hero /><QuickFacts /><Products /><OtherProducts /><PrivateLabel /><Moments /><Company /><Quality /><Contact /></main><Footer /><WhatsAppFloat /></>;
}
