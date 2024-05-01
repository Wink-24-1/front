import { useEffect } from "react";
import DetailComponent from "../components/Detail";
import Map from "../components/Map";
import Weather from "../components/Weather";
import { useDispatch } from "react-redux";
import { changeMenuToHome } from "../store/store";

function MainPage() {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeMenuToHome());
  }, []);

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
