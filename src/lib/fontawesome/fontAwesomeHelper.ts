import {
  library,
  IconDefinition,
  IconPrefix,
  IconName,
} from "@fortawesome/fontawesome-svg-core";

import * as solidIcons from "@fortawesome/free-solid-svg-icons";
import * as regularIcons from "@fortawesome/free-regular-svg-icons";
import * as brandIcons from "@fortawesome/free-brands-svg-icons";

/** Maps FA class prefix → real FontAwesome prefix */
const prefixMap: Record<string, IconPrefix> = {
  "fa-solid": "fas",
  "fa-regular": "far",
  "fa-brands": "fab",
};

/**
 * Dynamically loads any FontAwesome icon:
 * - Supports solid / regular / brands
 * - Adds icon to library
 * - Returns tuple: ["fas", "user"]
 */
export const getDynamicIcon = (
  iconClass: string
): [IconPrefix, IconName] => {
  if (!iconClass) return ["fas", "circle-info"];

  const parts = iconClass.split(" "); // ["fa-solid", "fa-circle-info"]
  const faType = parts[0]; // "fa-solid"
  const rawName = parts[1]?.replace("fa-", ""); // "circle-info"

  // Convert to actual FA prefix
  const prefix = prefixMap[faType] || "fas";

  // Build icon key used in imported packs: faCircleInfo
  const iconKey = `fa${rawName
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("")}`;

  // Select pack automatically
  const pack =
    faType === "fa-solid"
      ? solidIcons
      : faType === "fa-regular"
      ? regularIcons
      : faType === "fa-brands"
      ? brandIcons
      : solidIcons;

  // Try to get icon
  const icon = (pack as any)[iconKey] as IconDefinition;

  if (icon) {
    library.add(icon);
  } else {
    console.warn(`⚠ FontAwesome Icon Not Found: ${iconClass} → ${iconKey}`);
  }

  return [prefix, rawName as IconName];
};
