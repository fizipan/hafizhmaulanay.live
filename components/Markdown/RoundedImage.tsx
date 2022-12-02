import Image from 'next/image';
import { RoundedImageProps } from '@/libs/types';

export default function RoundedImage({ alt, ...props }: RoundedImageProps) {
  return <Image alt={alt} className="rounded-lg" {...props} />;
}
