import { navItems } from "@/nav-items";
import { Outlet } from "react-router-dom";
import { DesktopNavbar } from "./_components/DesktopNavbar";
import { MobileSheet } from "./_components/MobileSheet";
import { Button } from "@/components/ui/button";
import { UserMenu } from "./_components/UserMenu";

const Layout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 justify-between">
        <DesktopNavbar navItems={navItems} />
        <MobileSheet navItems={navItems} />
        <div className="flex items-center gap-4">
          <Button variant="outline">Sign In</Button>
          <UserMenu />
        </div>
      </header>
      <main className="flex-grow overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
