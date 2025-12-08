// lib/dynamicFontAwesome.ts
import { library } from "@fortawesome/fontawesome-svg-core";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

/**
 * Adds a FontAwesome icon to the library dynamically.
 * iconClass: string from API like "fa-solid fa-circle-info"
 */
export const addIconToLibrary = (iconClass: string) => {
  const parts = iconClass.split(" "); // ["fa-solid", "fa-circle-info"]
  const iconName = parts[1]?.replace("fa-", ""); // "circle-info"

  const iconKey = `fa${iconName
    .split("-")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join("")}`; // e.g., faCircleInfo

  const icon = (solidIcons as any)[iconKey] as IconDefinition;

  if (icon) {
    library.add(icon);
    return ["fas", iconName] as const;
  } else {
    console.warn(`Icon ${iconClass} not found in solidIcons`);
    return ["fas", "circle-info"] as const; // fallback
  }
};
