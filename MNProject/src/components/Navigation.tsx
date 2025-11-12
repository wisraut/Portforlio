import { Link, useLocation } from "react-router-dom";
import { Flex, Button, Text, IconButton } from "@radix-ui/themes";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

// simple inline icon (no extra deps)
function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M4 6h16M4 12h16M4 18h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

const links = [
  { to: "/", label: "Home" },
  { to: "/profile", label: "Profile" },
];

export default function Navigation() {
  const { pathname } = useLocation();
  const isActive = (p: string) => pathname === p;

  return (
    <header className="sticky top-0 z-50 bg-slate-950/70 backdrop-blur border-b border-slate-800">
      <div className="mx-auto max-w-6xl px-4">
        <Flex align="center" justify="between" py="3">
          {/* Brand */}
          <Link to="/" className="no-underline">
            <Text weight="bold" size="5" color="gray">
              Folk<span className="text-violet-400">.dev</span>
            </Text>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-2">
            {links.map((l) => (
              <Button
                key={l.to}
                asChild
                size="2"
                variant={isActive(l.to) ? "solid" : "soft"}
                color={isActive(l.to) ? "violet" : undefined}
              >
                <Link to={l.to}>{l.label}</Link>
              </Button>
            ))}
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <IconButton variant="soft" radius="full" aria-label="Menu">
                  <MenuIcon />
                </IconButton>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content
                side="bottom"
                align="end"
                className="min-w-[160px]"
              >
                {links.map((l) => (
                  <DropdownMenu.Item key={l.to} asChild>
                    <Link
                      to={l.to}
                      className="block px-2 py-1.5 rounded text-sm"
                    >
                      {l.label}
                    </Link>
                  </DropdownMenu.Item>
                ))}
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </div>
        </Flex>
      </div>
    </header>
  );
}
