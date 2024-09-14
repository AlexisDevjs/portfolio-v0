import { Drawer } from "vaul";
import { CodeIcon, MailIcon, StarIcon } from "./icons/icons";

export default function MenuList() {
  const menuItems = [
    { name: "Skills", href: "#skills", icon: <CodeIcon /> },
    { name: "Proyectos", href: "#proyectos", icon: <StarIcon /> },
    { name: "Contacto", href: "#contacto", icon: <MailIcon /> },
  ];

  return (
    <article className="md:hidden">
      <Drawer.Root shouldScaleBackground>
        <Drawer.Trigger asChild>
          <button type="button" title="Abrir menú">
            <svg
              className="pointer-events-none h-6 w-6 fill-current"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="2" x="7" width="9" height="1" rx="1"></rect>
              <rect y="7" width="16" height="1" rx="1"></rect>
              <rect y="12" width="9" height="1" rx="1"></rect>
            </svg>
          </button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] mt-24 fixed bottom-0 left-0 right-0">
            <div className="p-4 bg-white rounded-t-[10px] flex-1">
              <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8" />
              <div className="max-w-md mx-auto">
                <ul className="flex flex-col justify-center items-center divide-y divide-gray-100">
                  {menuItems.map((item) => (
                    <li
                      key={item.name}
                      className="flex flex-col justify-center items-center mx-8 w-full py-2"
                    >
                      <a
                        className="text-zinc-700 hover:text-zinc-700 text-[17px] flex gap-3"
                        href={item.href}
                      >
                        {item.icon}
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </article>
  );
}
