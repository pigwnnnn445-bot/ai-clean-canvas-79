import LanguageSwitcher from "@/components/LanguageSwitcher";
import ThemeToggle from "@/components/ThemeToggle";

const MobileBottomBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/80 backdrop-blur-md border-t border-border">
      <div className="flex items-center justify-center gap-2 py-2">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </div>
  );
};

export default MobileBottomBar;
