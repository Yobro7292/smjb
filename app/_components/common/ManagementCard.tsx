import { Card, Text, Badge, createStyles, rem } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  rating: {
    position: "absolute",
    top: theme.spacing.xs,
    right: rem(12),
    pointerEvents: "none",
  },

  title: {
    display: "block",
    marginTop: theme.spacing.md,
    marginBottom: rem(5),
    fontSize:"14px"
  },

  action: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[1],
    }),
  },

  footer: {
    marginTop: theme.spacing.md,
  },
}));

interface ArticleCardProps {
  image: string;
  title: string;
  description: string;
  rating: string;
}

export function ManagementCard({
  className,
  image,
  title,
  description,
  rating,
  ...others
}: ArticleCardProps &
  Omit<React.ComponentPropsWithoutRef<"div">, keyof ArticleCardProps>) {
  const { classes, cx } = useStyles();

  return (
    <Card
      withBorder
      radius="md"
      className={cx(classes.card, className)}
      {...others}
    >
      <Card.Section className="flex justify-center items-center">
        {/* <Image width={100} src={image} height={50} alt={title} className="object-top w-auto max-h-[10rem]" /> */}
        <div className="w-full h-[10rem] bg-cover bg-top" style={{backgroundImage: `url(${image})`}} ></div>
      </Card.Section>

      <Badge
        className={classes.rating}
        variant="gradient"
        gradient={
          rating === "Trustee"
            ? { from: "yellow", to: "red" }
            : rating === "Manager"
            ? { from: "teal", to: "lime" }
            : { from: "indigo", to: "cyan" }
        }
      >
        {rating}
      </Badge>

      <Text className={classes.title} fw={500}>
        {title}
      </Text>

      <Text fz="sm" color="dimmed" lineClamp={4}>
        {description}
      </Text>
    </Card>
  );
}
