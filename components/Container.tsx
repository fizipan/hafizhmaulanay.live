import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ContainerProps } from '@/libs/types';

export default function Container({ children }: ContainerProps) {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col justify-center px-8">
        <Navbar />
      </div>
      <main id="skip" className="flex flex-col justify-center bg-gray-50 px-8 dark:bg-gray-900">
        {children}
        <Footer />
      </main>
    </div>
  );
}
