import { CalloutProps } from '@/libs/types';

export default function Callout({ emoji, children }: CalloutProps) {
  return (
    <div className="my-8 flex rounded-lg bg-gray-200 p-4 dark:bg-gray-800">
      <div className="mr-4 flex w-4 items-center">{emoji}</div>
      <div className="callout w-full">{children}</div>
    </div>
  );
}
