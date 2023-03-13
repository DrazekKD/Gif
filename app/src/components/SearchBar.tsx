import { ChangeEvent, SyntheticEvent, useState } from "react";
import { Button } from "./ui/Button";
import GifsListWrapper from "./GifsListWrapper";

const SearchBar = () => {
  const [name, setName] = useState("");
  const [active, setActive] = useState(false);

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setActive(true);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setActive(false);
  };

  return (
    <div className="min-h-screenflex justify-center items-center">
      <div className="container mx-auto rounded-lg p-14 bg-accent">
        <form onSubmit={handleSubmit}>
          <h1 className="text-center font-bold text-white text-4xl mb-10">
            Find the perfect GIF
          </h1>
          <div className="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
            <input
              className="text-base text-gray-400 flex-grow outline-none px-2 "
              type="text"
              placeholder="Search your domain name"
              onChange={handleChange}
            />
            <div className="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
              <Button type="submit">Search</Button>
            </div>
          </div>
        </form>
      </div>
      {!!name && active && <GifsListWrapper searchName={name} />}
    </div>
  );
};

export default SearchBar;
