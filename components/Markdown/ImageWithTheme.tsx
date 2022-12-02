import Image from 'next/image';
import { useTheme } from 'next-themes';

import { ImageWithThemeProps } from '@/libs/types';

export default function ImageWithTheme({ alt, light, dark, ...props }: ImageWithThemeProps) {
  const { theme } = useTheme();

  return <Image alt={alt} src={theme === 'light' ? light : dark} {...props} />;
}
