type ArrowDirection = "up-right" | "down" | "down-left";

type ArrowIconProps = {
  direction?: ArrowDirection;
};

export default function ArrowIcon({
  direction = "up-right",
}: ArrowIconProps) {
  return (
    <span
      className={`ui-arrow ui-arrow-${direction}`}
      aria-hidden="true"
    />
  );
}
