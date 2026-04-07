import { IconIllustration } from "@/ds/primitives/IconIllustration";
import { BullseyeArrowIcon, SuitcaseIcon, CalendarDayIcon } from "@/ds/primitives/icons/illustration-icons";

export function BullseyeIcon() {
  return (
    <IconIllustration variant="light" size="sm">
      <BullseyeArrowIcon />
    </IconIllustration>
  );
}

export function BriefcaseIcon() {
  return (
    <IconIllustration variant="light" size="sm">
      <SuitcaseIcon />
    </IconIllustration>
  );
}

export function CalendarIcon() {
  return (
    <IconIllustration variant="light" size="sm">
      <CalendarDayIcon />
    </IconIllustration>
  );
}
