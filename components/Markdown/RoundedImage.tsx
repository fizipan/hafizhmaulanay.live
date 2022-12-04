import Image from 'next/image';
import { RoundedImageProps } from '@/libs/types';

export default function RoundedImage({ src, alt }: RoundedImageProps) {
  return <Image src={src} alt={alt} className="rounded-lg" />;
}
