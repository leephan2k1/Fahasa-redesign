import Banner from '@/components/partials/banner';
import HomeAdsSection from '@/components/partials/home-ads-section';

export default function Home() {
  return (
    <main className="flex min-h-screen h-fit flex-col items-center justify-between">
      <div className="w-full">
        <div className="container-1200 mx-auto space-y-6">
          <Banner />
          <HomeAdsSection />
        </div>
      </div>
    </main>
  );
}
