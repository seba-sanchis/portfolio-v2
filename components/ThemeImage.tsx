import Image, { ImageProps } from "next/image";

type Props = Omit<ImageProps, "src" | "priority" | "loading"> & {
  lightImage: string;
  darkImage: string;
};

export default function ThemeImage(props: Props) {
  const { lightImage, darkImage, ...rest } = props;

  return (
    <>
      <Image {...rest} src={lightImage} className="dark:hidden" priority={true} />
      <Image {...rest} src={darkImage} className="hidden dark:block" priority={true} />
    </>
  );
}
