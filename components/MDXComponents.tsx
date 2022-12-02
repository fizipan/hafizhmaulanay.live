import RoundedImage from '@/components/Markdown/RoundedImage';
import ImageWithTheme from '@/components/Markdown/ImageWithTheme';
import CustomLink from '@/components/Markdown/CustomLink';
import Callout from '@/components/Markdown/Callout';

const MDXComponents = {
  Image: RoundedImage,
  ImageWithTheme,
  a: CustomLink,
  Callout,
};

export default MDXComponents;
