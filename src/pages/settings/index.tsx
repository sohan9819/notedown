import { NextPage } from "next";

const Settings: NextPage = () => {
  return (
    <div className="container mx-auto flex min-h-[calc(100vh-6rem)]  w-screen flex-wrap items-center justify-evenly gap-4 py-6">
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Pick your favourite theme</span>
          <span className="label-text-alt">App Theme</span>
        </label>
        <select className="select-bordered select">
          <option disabled selected>
            Pick one
          </option>
          <option>Star Wars</option>
          <option>Harry Potter</option>
          <option>Lord of the Rings</option>
          <option>Planet of the Apes</option>
          <option>Star Trek</option>
        </select>
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Pick your favourite theme</span>
          <span className="label-text-alt">Markdown Theme</span>
        </label>
        <select className="select-bordered select">
          <option disabled selected>
            Pick one
          </option>
          <option>Star Wars</option>
          <option>Harry Potter</option>
          <option>Lord of the Rings</option>
          <option>Planet of the Apes</option>
          <option>Star Trek</option>
        </select>
      </div>
    </div>
  );
};

export default Settings;
