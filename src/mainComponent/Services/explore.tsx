import { file } from "./data";
import "../../index.css";

export default function Explore() {
  return (
    <>
      <div className="grid grid-cols-2">
        <a href="/HandPicked">
          <div className="flex h-full items-center justify-center p-1">
            <img src={file.image1} alt="image" />
          </div>
        </a>

        <div className="flex">
          <div className="pt-1">
            <a href="/AllGigs">
              <div className="flex items-center justify-center pr-0.5 pt-0.5 sm:p-1">
                <img src={file.image2} alt="image" />
              </div>
            </a>

            <a href="/WebDevelopment">
              <div className="flex items-center justify-center pt-0.5 sm:p-1">
                <img src={file.image3} alt="image" />
              </div>
            </a>
          </div>

          <div className="pt-1">
            <a href="/BestSellingGigs">
              <div className="flex items-center justify-center pr-0.5 pt-0.5 sm:pt-1">
                <img src={file.image4} alt="image" />
              </div>
            </a>

            <a href="/AllServices">
              <div className="flex items-center justify-center p-0.5 pt-1 sm:pt-1">
                <img src={file.image5} alt="image" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
