"use client";
import { useEffect, useRef, useState, Children, cloneElement, isValidElement } from "react";
import Link from "next/link";
import Image from "next/image";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu as MenuIcon,
  X,
  ChevronDown,
  Home as HomeIcon,
  Gauge,
  Workflow,
  Boxes,
  BarChart3,
  PhoneCall,
  BadgeCheck,
  Tag,
  Info,
  BookOpen,
  HelpCircle,
  Briefcase,
  CalendarDays,
  Mail,
  MessageCircle,
  Headphones,
  LogIn,
  UserPlus,
} from "lucide-react";

const navbarConfig = [
  { label: "Home", href: "/" },
  {
    label: "Features",
    items: [
      { label: "Dashboard", href: "/features/dashboard" },
      { label: "Leads & Deals", href: "/features/leads-deals" },
      { label: "Inventory & Vendor Management", href: "/features/inventory" },
      { label: "Reports & Analytics", href: "/features/reports-analytics" },
      { label: "Call Center", href: "/features/call-center" },
      { label: "Google Integration", href: "/features/google-integration" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "About Us", href: "/about" },
  // {
  //   label: "Resources",
  //   items: [
  //     { label: "Blog", href: "/blog" },
  //     { label: "FAQs", href: "/faqs" },
  //     { label: "Case Studies", href: "/case-studies" },
  //     { label: "Request a Demo", href: "/demo" },
  //   ],
  // },
  // {
  //   label: "Support",
  //   items: [
  //     { label: "Contact Us", href: "/contact" },
  //     { label: "Live Chat", href: "/live-chat" },
  //     { label: "Customer Support", href: "/customer-support" },
  //   ],
  // },
];

const authLinks = [
  { label: "Login", href: "https://priority.verifiedcrm.com/login", variant: "outline" },
  { label: "Sign Up", href: "https://priority.verifiedcrm.com", variant: "primary" },
];

function MenuItem({ href, label, onClick, icon }) {
  return (
    <Link href={href} onClick={onClick} className="px-3 py-2 rounded-md hover:bg-black/5 text-black flex items-center gap-2">
      {icon ? <span className="shrink-0">{icon}</span> : null}
      <span>{label}</span>
    </Link>
  );
}

function Dropdown({ label, children }) {
  const [open, setOpen] = useState(false);
  const enhancedChildren = Children.map(children, (child) => {
    if (!isValidElement(child)) return child;
    const existingOnClick = child.props.onClick;
    const handleClick = (e) => {
      if (typeof existingOnClick === "function") existingOnClick(e);
      setOpen(false);
    };
    return cloneElement(child, { onClick: handleClick });
  });
  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger asChild>
        <button className="px-3 py-2 rounded-md hover:bg-muted/50 inline-flex items-center gap-1" aria-expanded={open}>
          {label}
          <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : "rotate-0"}`} />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content sideOffset={8} align="start" className="z-50 border border-black/10 rounded-xl p-0 bg-white text-black shadow-xl">
          <AnimatePresence>
            {open ? (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.16, ease: "easeOut" }}
                className="rounded-xl p-2 w-72 bg-white"
              >
                <div className="grid grid-cols-1 gap-1">
                  {enhancedChildren}
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

function getIcon(label) {
  const cls = "h-4 w-4 text-gold-300";
  switch (label) {
    case "Dashboard":
      return <Gauge className={cls} />;
    case "Leads & Deals":
      return <Workflow className={cls} />;
    case "Inventory & Vendors":
      return <Boxes className={cls} />;
    case "Inventory & Vendor Management":
      return <Boxes className={cls} />;
    case "Reports & Analytics":
      return <BarChart3 className={cls} />;
    case "Call Center":
      return <PhoneCall className={cls} />;
    case "Google Integration":
      return <BadgeCheck className={cls} />;
    case "Blog":
      return <BookOpen className={cls} />;
    case "FAQs":
      return <HelpCircle className={cls} />;
    case "Case Studies":
      return <Briefcase className={cls} />;
    case "Request a Demo":
      return <CalendarDays className={cls} />;
    case "Contact Us":
      return <Mail className={cls} />;
    case "Live Chat":
      return <MessageCircle className={cls} />;
    case "Customer Support":
      return <Headphones className={cls} />;
    default:
      return null;
  }
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border/60">
      <div className="container-max flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <Link href="/" className="inline-flex items-center gap-2">
            {/* <Image src="/verifiedcrm-mark.svg" alt="Verified CRM" width={36} height={36} priority /> */}
            <Image src="/verifiedcrm-logo-light.svg" alt="Verified CRM filtered-gold" width={250} height={44} priority className="relative top-[2px] border " />
            <span className="sr-only text-white">Verified CRM</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-1">
          {navbarConfig.map((item) => (
            item.items ? (
              <Dropdown key={item.label} label={item.label}>
                {item.items.map((sub) => (
                  <MenuItem key={sub.label} href={sub.href} label={sub.label} icon={getIcon(sub.label)} />
                ))}
              </Dropdown>
            ) : (
              <Link key={item.label} href={item.href} className="px-3 py-2 rounded-md hover:bg-muted/50 inline-flex items-center gap-2">
                {item.label === "Home" ? <HomeIcon className="h-4 w-4 text-gold-300" /> : null}
                {item.label === "Pricing" ? <Tag className="h-4 w-4 text-gold-300" /> : null}
                {item.label === "About Us" ? <Info className="h-4 w-4 text-gold-300" /> : null}
                {item.label}
              </Link>
            )
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2">
          {authLinks.map((a) => (
            <Link key={a.label} href={a.href} className={`btn-base ${a.variant === 'primary' ? 'btn-primary' : 'btn-outline'} px-4 py-2 text-sm inline-flex items-center gap-2`}>
              {a.label === "Login" ? <LogIn className="h-4 w-4" /> : <UserPlus className="h-4 w-4" />}
              {a.label}
            </Link>
          ))}
        </div>
        <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
          <Dialog.Trigger asChild>
            <button className="md:hidden px-3 py-2 rounded-md hover:bg-muted/50 inline-flex items-center gap-2">
              <MenuIcon className="h-5 w-5" />
              Menu
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <AnimatePresence>
              {mobileOpen ? (
                <>
                  <Dialog.Overlay asChild>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="fixed inset-0 bg-black/40"
                    />
                  </Dialog.Overlay>
                  <Dialog.Content asChild>
                    <motion.div
                      initial={{ x: 320 }}
                      animate={{ x: 0 }}
                      exit={{ x: 320 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="fixed right-0 top-0 h-full w-80 glass border-l border-border/60 p-4 overflow-y-auto"
                    >
                                {/* logo */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Image src="/verifiedcrm-mark.svg" alt="Verified CRM" width={32} height={32} />
                          <Image src="/verifiedcrm-wordmark.svg" alt="Verified CRM" width={160} height={40} className="relative top-[2px]" />
                        </div>
                        <button onClick={() => setMobileOpen(false)} className="px-2 py-1 hover:bg-muted/50 rounded-md">
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                      <div className="mt-4 grid gap-1">
                        {navbarConfig.map((item) => (
                          item.items ? (
                            <details key={item.label} className="group">
                              <summary className="px-3 py-2 rounded-md hover:bg-muted/50 cursor-pointer inline-flex items-center gap-2">
                                {item.label}
                              </summary>
                              <div className="pl-3 py-1 grid">
                                {item.items.map((sub) => (
                                  <MenuItem key={sub.label} href={sub.href} label={sub.label} icon={getIcon(sub.label)} onClick={() => setMobileOpen(false)} />
                                ))}
                              </div>
                            </details>
                          ) : (
                            <Link key={item.label} href={item.href} className="px-3 py-2 rounded-md hover:bg-muted/50 inline-flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                              {item.label === "Home" ? <HomeIcon className="h-4 w-4 text-gold-300" /> : null}
                              {item.label === "Pricing" ? <Tag className="h-4 w-4 text-gold-300" /> : null}
                              {item.label === "About Us" ? <Info className="h-4 w-4 text-gold-300" /> : null}
                              {item.label}
                            </Link>
                          )
                        ))}
                        <div className="grid grid-cols-2 gap-2 pt-2">
                          {authLinks.map((a) => (
                            <Link key={a.label} href={a.href} className={`btn-base ${a.variant === 'primary' ? 'btn-primary' : 'btn-outline'} px-4 py-2 text-sm text-center inline-flex items-center justify-center gap-2`} onClick={() => setMobileOpen(false)}>
                              {a.label === "Login" ? <LogIn className="h-4 w-4" /> : <UserPlus className="h-4 w-4" />}
                              {a.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </Dialog.Content>
                </>
              ) : null}
            </AnimatePresence>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </div>
  );
}

