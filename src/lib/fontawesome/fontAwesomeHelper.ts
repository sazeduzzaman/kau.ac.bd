import { library, IconDefinition } from "@fortawesome/fontawesome-svg-core";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";
import * as regularIcons from "@fortawesome/free-regular-svg-icons";
import * as brandIcons from "@fortawesome/free-brands-svg-icons";

export const getDynamicIcon = (iconClass: string): IconDefinition => {
  if (!iconClass) return solidIcons.faCircleInfo;

  const parts = iconClass.split(" "); // ["fa-solid", "fa-envelope"]
  let faType = parts[0];
  const rawName = parts[1]?.replace("fa-", "");

  // map API prefix to FontAwesome prefix
  if (faType === "fa-solid") faType = "fas";
  if (faType === "fa-regular") faType = "far";
  if (faType === "fa-brands") faType = "fab";

  const iconKey = `fa${rawName
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("")}`;

  const pack =
    faType === "fas"
      ? solidIcons
      : faType === "far"
      ? regularIcons
      : faType === "fab"
      ? brandIcons
      : solidIcons;

  const icon = (pack as any)[iconKey] as IconDefinition;

  if (icon) {
    library.add(icon);
    return icon;
  } else {
    console.warn(`⚠ FontAwesome Icon Not Found: ${iconClass} → ${iconKey}`);
    return solidIcons.faCircleInfo;
  }
};
