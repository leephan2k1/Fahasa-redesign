import Image from 'next/image';
import BannerSlider from './banner-slider';

export default function Banner() {
  return (
    <div className="w-full flex gap-x-6 justify-center">
      <div className="w-[70%] h-[35rem]">
        <BannerSlider />
      </div>
      <div className="hidden lg:flex flex-col space-y-4 w-[30%] h-[35rem]">
        <figure className="w-full h-[50%] relative rounded-2xl overflow-hidden ">
          <Image
            src={
              'https://cdn0.fahasa.com/media/wysiwyg/Thang-06-2023/Potico_T623_392x156%20.png'
            }
            alt="ads"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            className="absolute inset-0 bg-no-repeat bg-cover bg-center"
          />
        </figure>
        <figure className="w-full h-[50%] relative rounded-2xl overflow-hidden">
          <Image
            src={
              'https://cdn0.fahasa.com/media/wysiwyg/Thang-06-2023/TrangBalo_Resize_392x156.jpg'
            }
            alt="ads"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            className="absolute inset-0 bg-no-repeat bg-cover bg-center"
          />
        </figure>
      </div>
    </div>
  );
}
