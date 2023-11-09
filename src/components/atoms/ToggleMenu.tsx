"use client";

import { IconMenu2, IconX } from "@tabler/icons-react";
import { ToggleMenuProps } from "@/src/shared/type";

const ToggleMenu = ({
  handleToggleMenuOnClick,
  isToggleMenuOpen,
}: ToggleMenuProps) => (
  <button
    type="button"
    className="ml-1.5 inline-flex items-center rounded-lg p-2.5 text-sm text-gray-500 transition hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200"
    aria-label="Toggle Menu"
    onClick={handleToggleMenuOnClick}
  >
    {isToggleMenuOpen ? (
      <IconX className="h-6 w-6" />
    ) : (
      <IconMenu2 className="h-6 w-6" />
    )}
  </button>
);

export default ToggleMenu;
