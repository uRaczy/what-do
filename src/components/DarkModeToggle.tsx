import clsx from "clsx";

type Props = {
  isDarkMode: boolean;
  darkModeHandle: () => void;
};

export const DarkModeToggle = ({ isDarkMode, darkModeHandle }: Props) => {
  return (
    <div className="flex w-40 bg-gray-700" onClick={darkModeHandle}>
      <div className="text-[#bfcc0b]">Sun</div>
      <div
        className={clsx(
          `w-10 text-center ${isDarkMode ? "text-black" : "text-yellow-400"}`,
        )}
      >
        O
      </div>
      <div>Moon</div>
    </div>
  );
};
