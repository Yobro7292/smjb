import { Rating, Group } from "@mantine/core";

function RatingStars({ value }: { value: number }) {
  return (
    <Group position="center">
      <Rating value={value} readOnly />
    </Group>
  );
}
export default RatingStars