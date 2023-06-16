import Image from 'next/image';

export default function HomeAdsSection() {
  return (
    <section className="grid grid-cols-4 gap-x-4 w-full min-h-[25rem]">
      <figure className="relative">
        <Image
          alt="ads"
          fill
          className="absolute inset-0"
          src={
            'https://cdn0.fahasa.com/media/wysiwyg/Thang-06-2023/SubBannerT6_Coupon_310x210-06.png'
          }
        />
      </figure>
      <figure className="relative">
        <Image
          alt="ads"
          fill
          className="absolute inset-0"
          src={
            'https://cdn0.fahasa.com/media/wysiwyg/Thang-06-2023/BinhTayT6_V1_SmallBanner_310x210.png'
          }
        />
      </figure>
      <figure className="relative">
        <Image
          alt="ads"
          fill
          className="absolute inset-0"
          src={
            'https://cdn0.fahasa.com/media/wysiwyg/Thang-06-2023/Tamlinh_mainbanner_T6_Smallbanner_310x210.png'
          }
        />
      </figure>
      <figure className="relative">
        <Image
          alt="ads"
          fill
          className="absolute inset-0"
          src={
            'https://cdn0.fahasa.com/media/wysiwyg/Thang-06-2023/TuSachThieuNhi_T623_Banner_SmallBanner_310x210.png'
          }
        />
      </figure>
    </section>
  );
}
