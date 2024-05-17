import DesktopNav from "~/components/DesktopNav";
import MobileNav from "~/components/MobileNav";

export default function Nav() {
  return (
    <nav>
      <DesktopNav />
      <MobileNav />
    </nav>
  );
}
