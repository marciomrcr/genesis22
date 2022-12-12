import { RecoilRoot } from "recoil";
import Header from "../components/header/Header";
import LeftPart from "../components/leftPart/LeftPart";
import NavBar from "../components/navbar/NavBar";
import RightPart from "../components/rightPart/RightPart";

export default function Home() {
  return (
    <div>
      <RecoilRoot>
        <div className="App overflow-y-hidden ">
          <Header />
          <div className="w-full min-h-[90vh] grid grid-cols-12">
            <NavBar />
            <div className="grid grid-cols-1 xl:grid-cols-5 col-span-10 w-full">
              <LeftPart />
              <RightPart />
            </div>
          </div>
        </div>
      </RecoilRoot>{" "}
    </div>
  );
}
