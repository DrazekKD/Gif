import "./index.css";
import { Button } from "./components/ui/Button";

function App() {
  return (
    <div className="min-h-screenflex justify-center items-center bg-accent">
      <div className="container mx-auto rounded-lg p-14">
        <form>
          <h1 className="text-center font-bold text-white text-4xl mb-10">
            Find the perfect GIF
          </h1>
          <div className="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
            <input
              className="text-base text-gray-400 flex-grow outline-none px-2 "
              type="text"
              placeholder="Search your domain name"
            />
            <div className="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
              <Button type="button"> Search</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
