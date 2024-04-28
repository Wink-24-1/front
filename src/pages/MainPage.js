import DetailComponent from "../components/Detail";
import Map from "../components/Map";
import Weather from "../components/Weather";


function MainPage() {
  return (
    <div className="HomePage">
      <Weather />
      <div className="px-3">
        <Map />
        <DetailComponent />
      </div>
    </div>
  );
}
export default MainPage;
