import TradingViewWidget from "@/components/TradingViewWidget";
import { MARKETS, toMarket } from "@/lib/constants";

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ market?: string | string[] }>;
}) => {
  const market = MARKETS[toMarket((await searchParams).market)];
  const scriptUrl = `https://s3.tradingview.com/external-embedding/embed-widget-`;

  return (
    <div className="flex min-h-screen home-wrapper">
      <section className="grid w-full gap-8 home-section">
        <div className="md:col-span-1 xl:col-span-1">
          <TradingViewWidget
            title="Market Overview"
            scriptUrl={`${scriptUrl}market-overview.js`}
            config={market.overview}
            className="custom-chart"
            height={600}
          />
        </div>
        <div className="md:col-span-1 xl:col-span-2">
          <TradingViewWidget
            title={market.featured.title}
            scriptUrl={`${scriptUrl}${market.featured.widget}.js`}
            config={market.featured.config}
            height={600}
          />
        </div>
      </section>
      <section className="grid w-full gap-8 home-section">
        <div className="h-full md:col-span-1 xl:col-span-1">
          <TradingViewWidget
            title={market.news.title}
            scriptUrl={`${scriptUrl}${market.news.widget}.js`}
            config={market.news.config}
            className="custom-chart"
            height={600}
          />
        </div>
        <div className="h-full md:col-span-1 xl:col-span-2">
          <TradingViewWidget
            scriptUrl={`${scriptUrl}market-quotes.js`}
            title={market.marketData.title}
            config={market.marketData.config}
            height={600}
          />
        </div>
      </section>
    </div>
  );
};
export default Home;
