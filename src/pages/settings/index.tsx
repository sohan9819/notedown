import { NextPage } from "next";
import { useEffect } from "react";
import { useTheme } from "~/store/themeStore";
import { AppTheme, appThemeOptions } from "~/utils/themeStore";

const Settings: NextPage = () => {
  const { appTheme, setAppTheme } = useTheme();

  useEffect(() => {
    document.documentElement.dataset.theme = appTheme;
  }, [appTheme]);

  return (
    <div className="container mx-auto flex min-h-[calc(100vh-65.5px-68px)] w-screen flex-wrap items-center justify-evenly gap-4 py-6">
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Pick your favourite theme</span>
          <span className="label-text-alt">App Theme</span>
        </label>
        <select
          className="select-bordered select"
          onChange={(e) => {
            const selectedTheme = e.target.value as AppTheme;
            if (appThemeOptions.includes(selectedTheme)) {
              setAppTheme(selectedTheme);
            } else {
              console.error("Invalid App Theme");
            }
          }}
        >
          {appThemeOptions.map((theme: AppTheme, index: number) =>
            appTheme === theme ? (
              <option key={index} value={theme} selected>
                {theme}
              </option>
            ) : (
              <option key={index} value={theme}>
                {theme}
              </option>
            )
          )}
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
