"use client";
import {
  Card,
  Text,
  Group,
  Center,
  createStyles,
  getStylesRef,
  rem,
  Button,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    height: rem(280),
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],

    [`&:hover .${getStylesRef("image")}`]: {
      transform: "scale(1.05)",
    },
  },

  image: {
    ...theme.fn.cover(),
    ref: getStylesRef("image"),
    backgroundSize: "cover",
    transition: "transform 500ms ease",
  },

  overlay: {
    position: "absolute",
    top: "20%",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage:
      "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .85) 90%)",
  },

  content: {
    height: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    zIndex: 1,
  },

  title: {
    color: theme.white,
    marginBottom: rem(1),
  },

  bodyText: {
    color: theme.colors.dark[2],
    marginLeft: rem(7),
  },

  author: {
    color: theme.colors.dark[2],
  },
}));

interface ImageCardProps {
  link: string;
  image: string;
  title: string;
  author: string;
  buttonTitle: string;
}

export function ImageCard({
  image,
  title,
  author,
  link,
  buttonTitle,
}: ImageCardProps) {
  const { classes, theme } = useStyles();

  return (
    <Card
      p="lg"
      shadow="lg"
      className={classes.card}
      radius="md"
    >
      <div
        className={classes.image}
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className={classes.overlay} />

      <div className={classes.content}>
        <div>
          <Text size="xl" className={classes.title} weight={500}>
            {title}
          </Text>

          <Group position="apart" spacing="xs">
            <Text size="xs" className={classes.author}>
              {author}
            </Text>

            <Button
              radius="md"
              variant="light"
              component="a"
              href={link}
              target="_blank"
              className="bg-[#eec9a2] text-[#6d4e2d] text-sm font-semibold hover:bg-[#eec9a2]"
            >
              {buttonTitle}
            </Button>
          </Group>
        </div>
      </div>
    </Card>
  );
}
