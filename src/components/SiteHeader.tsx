import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Menu, X, LogOut } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "@/i18n";

const mockUser = {
  name: "Alex Chen",
  email: "alex@example.com",
  avatar: "https://i.pravatar.cc/150?u=alex",
};

const SiteHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { t } = useTranslation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <nav className="container flex h-16 items-center justify-between" aria-label="Main navigation">
        <a href="#" aria-label="Home">
          <img src="https://static.onlinecdn.org/gamsai_frontend/images/logo.webp" alt="Rita" className="h-8" />
        </a>

        <div className="hidden md:flex items-center gap-2">
          <a
            href="https://www.rita.ai/pricing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-body-secondary transition-colors hover:text-primary cursor-pointer"
          >
            {t.nav.pricing}
          </a>
          <LanguageSwitcher />
          <ThemeToggle />
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="cursor-pointer rounded-full ring-2 ring-primary/20 hover:ring-primary/50 transition-all">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={mockUser.avatar} alt={mockUser.name} />
                    <AvatarFallback>{mockUser.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <div className="px-2 py-1.5">
                  <p className="text-sm font-medium">{mockUser.name}</p>
                  <p className="text-xs text-muted-foreground">{mockUser.email}</p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setIsLoggedIn(false)} className="cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" />
                  {t.nav.signOut}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button size="sm" className="bg-gradient-brand text-primary-foreground hover:opacity-90" onClick={() => setIsLoggedIn(true)}>{t.nav.signIn}</Button>
          )}
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="https://www.rita.ai/pricing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-body-secondary transition-colors hover:text-primary cursor-pointer"
          >
            {t.nav.pricing}
          </a>
          {isLoggedIn ? (
            <Avatar className="h-7 w-7 cursor-pointer" onClick={() => setIsLoggedIn(false)}>
              <AvatarImage src={mockUser.avatar} alt={mockUser.name} />
              <AvatarFallback>{mockUser.name.charAt(0)}</AvatarFallback>
            </Avatar>
          ) : (
            <Button size="sm" className="bg-gradient-brand text-primary-foreground hover:opacity-90" onClick={() => setIsLoggedIn(true)}>{t.nav.signIn}</Button>
          )}
          <button
            className="text-foreground cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4">
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
