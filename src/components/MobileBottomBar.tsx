import LanguageSwitcher from "@/components/LanguageSwitcher";
import ThemeToggle from "@/components/ThemeToggle";

const MobileBottomBar = () => {
  return (
    <div className="md:hidden flex items-center justify-center gap-2 py-4">
      <LanguageSwitcher />
      <ThemeToggle />
    </div>
  );
};

export default MobileBottomBar;
