import Image, { ImageProps } from "next/image";

type Props = Omit<ImageProps, "src" | "priority" | "loading"> & {
  lightImage: string;
  darkImage: string;
};

export default function ThemeImage(props: Props) {
  const { lightImage, darkImage, alt, ...rest } = props;

  return (
    <>
      <Image {...rest} src={lightImage} alt={alt} className="dark:hidden" priority={true} />
      <Image {...rest} src={darkImage} alt={alt} className="hidden dark:block" priority={true} />
    </>
  );
}
