// Sign-up form select options
export const INVESTMENT_GOALS = [
  { value: "Growth", label: "Growth" },
  { value: "Income", label: "Income" },
  { value: "Balanced", label: "Balanced" },
  { value: "Conservative", label: "Conservative" },
];

export const RISK_TOLERANCE_OPTIONS = [
  { value: "Low", label: "Low" },
  { value: "Medium", label: "Medium" },
  { value: "High", label: "High" },
];

export const PREFERRED_INDUSTRIES = [
  { value: "Technology", label: "Technology" },
  { value: "Healthcare", label: "Healthcare" },
  { value: "Finance", label: "Finance" },
  { value: "Energy", label: "Energy" },
  { value: "Consumer Goods", label: "Consumer Goods" },
];

export const ALERT_TYPE_OPTIONS = [
  { value: "upper", label: "Upper" },
  { value: "lower", label: "Lower" },
];

export const CONDITION_OPTIONS = [
  { value: "greater", label: "Greater than (>)" },
  { value: "less", label: "Less than (<)" },
];

// TradingView Charts
export const MARKET_OVERVIEW_WIDGET_CONFIG = {
  colorTheme: "dark", // dark mode
  dateRange: "12M", // last 12 months
  locale: "en", // language
  largeChartUrl: "", // link to a large chart if needed
  isTransparent: true, // makes background transparent
  showFloatingTooltip: true, // show tooltip on hover
  plotLineColorGrowing: "#0FEDBE", // line color when price goes up
  plotLineColorFalling: "#0FEDBE", // line color when price falls
  gridLineColor: "rgba(240, 243, 250, 0)", // grid line color
  scaleFontColor: "#DBDBDB", // font color for scale
  belowLineFillColorGrowing: "rgba(41, 98, 255, 0.12)", // fill under line when growing
  belowLineFillColorFalling: "rgba(41, 98, 255, 0.12)", // fill under line when falling
  belowLineFillColorGrowingBottom: "rgba(41, 98, 255, 0)",
  belowLineFillColorFallingBottom: "rgba(41, 98, 255, 0)",
  symbolActiveColor: "rgba(15, 237, 190, 0.05)", // highlight color for active symbol
  tabs: [
    {
      title: "Financial",
      symbols: [
        { s: "NYSE:JPM", d: "JPMorgan Chase" },
        { s: "NYSE:WFC", d: "Wells Fargo Co New" },
        { s: "NYSE:BAC", d: "Bank Amer Corp" },
        { s: "NYSE:HSBC", d: "Hsbc Hldgs Plc" },
        { s: "NYSE:C", d: "Citigroup Inc" },
        { s: "NYSE:MA", d: "Mastercard Incorporated" },
      ],
    },
    {
      title: "Technology",
      symbols: [
        { s: "NASDAQ:AAPL", d: "Apple" },
        { s: "NASDAQ:GOOGL", d: "Alphabet" },
        { s: "NASDAQ:MSFT", d: "Microsoft" },
        { s: "NASDAQ:META", d: "Meta Platforms" },
        { s: "NYSE:ORCL", d: "Oracle Corp" },
        { s: "NASDAQ:INTC", d: "Intel Corp" },
      ],
    },
    {
      title: "Services",
      symbols: [
        { s: "NASDAQ:AMZN", d: "Amazon" },
        { s: "NYSE:BABA", d: "Alibaba Group Hldg Ltd" },
        { s: "NYSE:T", d: "At&t Inc" },
        { s: "NYSE:WMT", d: "Walmart" },
        { s: "NYSE:V", d: "Visa" },
      ],
    },
  ],
  support_host: "https://www.tradingview.com", // TradingView host
  backgroundColor: "#141414", // background color
  width: "100%", // full width
  height: 600, // height in px
  showSymbolLogo: true, // show logo next to symbols
  showChart: true, // display mini chart
};

export const HEATMAP_WIDGET_CONFIG = {
  dataSource: "SPX500",
  blockSize: "market_cap_basic",
  blockColor: "change",
  grouping: "sector",
  isTransparent: true,
  locale: "en",
  symbolUrl: "",
  colorTheme: "dark",
  exchanges: [],
  hasTopBar: false,
  isDataSetEnabled: false,
  isZoomEnabled: true,
  hasSymbolTooltip: true,
  isMonoSize: false,
  width: "100%",
  height: "600",
};

export const TOP_STORIES_WIDGET_CONFIG = {
  displayMode: "regular",
  feedMode: "market",
  colorTheme: "dark",
  isTransparent: true,
  locale: "en",
  market: "stock",
  width: "100%",
  height: "600",
};

export const MARKET_DATA_WIDGET_CONFIG = {
  title: "Stocks",
  width: "100%",
  height: 600,
  locale: "en",
  showSymbolLogo: true,
  colorTheme: "dark",
  isTransparent: false,
  backgroundColor: "#0F0F0F",
  symbolsGroups: [
    {
      name: "Financial",
      symbols: [
        { name: "NYSE:JPM", displayName: "JPMorgan Chase" },
        { name: "NYSE:WFC", displayName: "Wells Fargo Co New" },
        { name: "NYSE:BAC", displayName: "Bank Amer Corp" },
        { name: "NYSE:HSBC", displayName: "Hsbc Hldgs Plc" },
        { name: "NYSE:C", displayName: "Citigroup Inc" },
        { name: "NYSE:MA", displayName: "Mastercard Incorporated" },
      ],
    },
    {
      name: "Technology",
      symbols: [
        { name: "NASDAQ:AAPL", displayName: "Apple" },
        { name: "NASDAQ:GOOGL", displayName: "Alphabet" },
        { name: "NASDAQ:MSFT", displayName: "Microsoft" },
        { name: "NASDAQ:META", displayName: "Meta Platforms" },
        { name: "NYSE:ORCL", displayName: "Oracle Corp" },
        { name: "NASDAQ:INTC", displayName: "Intel Corp" },
      ],
    },
    {
      name: "Services",
      symbols: [
        { name: "NASDAQ:AMZN", displayName: "Amazon" },
        { name: "NYSE:BABA", displayName: "Alibaba Group Hldg Ltd" },
        { name: "NYSE:T", displayName: "At&t Inc" },
        { name: "NYSE:WMT", displayName: "Walmart" },
        { name: "NYSE:V", displayName: "Visa" },
      ],
    },
  ],
};

// French market (Euronext Paris)
const FR_SYMBOL_GROUPS = [
  {
    name: "Financial",
    symbols: [
      { s: "EURONEXT:BNP", d: "BNP Paribas" },
      { s: "EURONEXT:CS", d: "AXA" },
      { s: "EURONEXT:GLE", d: "Societe Generale" },
      { s: "EURONEXT:ACA", d: "Credit Agricole" },
      { s: "EURONEXT:AMUN", d: "Amundi" },
      { s: "EURONEXT:WLN", d: "Worldline" },
    ],
  },
  {
    name: "Technology",
    symbols: [
      { s: "EURONEXT:SU", d: "Schneider Electric" },
      { s: "EURONEXT:DSY", d: "Dassault Systemes" },
      { s: "EURONEXT:CAP", d: "Capgemini" },
      { s: "EURONEXT:STMPA", d: "STMicroelectronics" },
      { s: "EURONEXT:HO", d: "Thales" },
      { s: "EURONEXT:SOP", d: "Sopra Steria" },
    ],
  },
  {
    name: "Luxury & Consumer",
    symbols: [
      { s: "EURONEXT:MC", d: "LVMH" },
      { s: "EURONEXT:RMS", d: "Hermes" },
      { s: "EURONEXT:OR", d: "L'Oreal" },
      { s: "EURONEXT:KER", d: "Kering" },
      { s: "EURONEXT:RI", d: "Pernod Ricard" },
      { s: "EURONEXT:BN", d: "Danone" },
    ],
  },
  {
    name: "Industry & Energy",
    symbols: [
      { s: "EURONEXT:TTE", d: "TotalEnergies" },
      { s: "EURONEXT:AIR", d: "Airbus" },
      { s: "EURONEXT:SAF", d: "Safran" },
      { s: "EURONEXT:AI", d: "Air Liquide" },
      { s: "EURONEXT:DG", d: "Vinci" },
    ],
  },
];

export const FR_MARKET_OVERVIEW_WIDGET_CONFIG = {
  ...MARKET_OVERVIEW_WIDGET_CONFIG,
  tabs: FR_SYMBOL_GROUPS.map(({ name, symbols }) => ({ title: name, symbols })),
};

// The stock heatmap widget has no French data source, so France gets a CAC 40 chart instead
export const FR_INDEX_CHART_WIDGET_CONFIG = {
  symbol: "EURONEXT:PX1",
  interval: "D",
  range: "12M",
  style: 3,
  theme: "dark",
  locale: "en",
  timezone: "Europe/Paris",
  allow_symbol_change: false,
  hide_side_toolbar: true,
  hide_volume: true,
  save_image: false,
  backgroundColor: "#141414",
  gridColor: "#141414",
  width: "100%",
  height: 600,
};

// TradingView's French news feeds are sparse and stale, so France shows its economic calendar instead
export const FR_ECONOMIC_CALENDAR_WIDGET_CONFIG = {
  colorTheme: "dark",
  isTransparent: true,
  locale: "en",
  countryFilter: "fr",
  importanceFilter: "-1,0,1",
  width: "100%",
  height: 600,
};

export const FR_MARKET_DATA_WIDGET_CONFIG = {
  ...MARKET_DATA_WIDGET_CONFIG,
  symbolsGroups: FR_SYMBOL_GROUPS.map(({ name, symbols }) => ({
    name,
    symbols: symbols.map(({ s, d }) => ({ name: s, displayName: d })),
  })),
};

export const MARKETS = {
  fr: {
    label: "France",
    overview: FR_MARKET_OVERVIEW_WIDGET_CONFIG,
    featured: {
      title: "CAC 40",
      widget: "advanced-chart",
      config: FR_INDEX_CHART_WIDGET_CONFIG,
    },
    news: {
      title: "Economic Calendar",
      widget: "events",
      config: FR_ECONOMIC_CALENDAR_WIDGET_CONFIG,
    },
    marketData: { title: "Stocks", config: FR_MARKET_DATA_WIDGET_CONFIG },
  },
  us: {
    label: "United States",
    overview: MARKET_OVERVIEW_WIDGET_CONFIG,
    featured: {
      title: "Stock Heatmap",
      widget: "stock-heatmap",
      config: HEATMAP_WIDGET_CONFIG,
    },
    news: {
      title: undefined,
      widget: "timeline",
      config: TOP_STORIES_WIDGET_CONFIG,
    },
    marketData: { title: undefined, config: MARKET_DATA_WIDGET_CONFIG },
  },
};

export type Market = keyof typeof MARKETS;

export const toMarket = (value?: string | string[]): Market =>
  value === "us" ? "us" : "fr";

export const SYMBOL_INFO_WIDGET_CONFIG = (symbol: string) => ({
  symbol: symbol.toUpperCase(),
  colorTheme: "dark",
  isTransparent: true,
  locale: "en",
  width: "100%",
  height: 170,
});

export const CANDLE_CHART_WIDGET_CONFIG = (symbol: string) => ({
  allow_symbol_change: false,
  calendar: false,
  details: true,
  hide_side_toolbar: true,
  hide_top_toolbar: false,
  hide_legend: false,
  hide_volume: false,
  hotlist: false,
  interval: "D",
  locale: "en",
  save_image: false,
  style: 1,
  symbol: symbol.toUpperCase(),
  theme: "dark",
  timezone: "Etc/UTC",
  backgroundColor: "#141414",
  gridColor: "#141414",
  watchlist: [],
  withdateranges: false,
  compareSymbols: [],
  studies: [],
  width: "100%",
  height: 600,
});

export const BASELINE_WIDGET_CONFIG = (symbol: string) => ({
  allow_symbol_change: false,
  calendar: false,
  details: false,
  hide_side_toolbar: true,
  hide_top_toolbar: false,
  hide_legend: false,
  hide_volume: false,
  hotlist: false,
  interval: "D",
  locale: "en",
  save_image: false,
  style: 10,
  symbol: symbol.toUpperCase(),
  theme: "dark",
  timezone: "Etc/UTC",
  backgroundColor: "#141414",
  gridColor: "#141414",
  watchlist: [],
  withdateranges: false,
  compareSymbols: [],
  studies: [],
  width: "100%",
  height: 600,
});

export const TECHNICAL_ANALYSIS_WIDGET_CONFIG = (symbol: string) => ({
  symbol: symbol.toUpperCase(),
  colorTheme: "dark",
  isTransparent: "true",
  locale: "en",
  width: "100%",
  height: 400,
  interval: "1h",
  largeChartUrl: "",
});

export const COMPANY_PROFILE_WIDGET_CONFIG = (symbol: string) => ({
  symbol: symbol.toUpperCase(),
  colorTheme: "dark",
  isTransparent: "true",
  locale: "en",
  width: "100%",
  height: 440,
});

export const COMPANY_FINANCIALS_WIDGET_CONFIG = (symbol: string) => ({
  symbol: symbol.toUpperCase(),
  colorTheme: "dark",
  isTransparent: "true",
  locale: "en",
  width: "100%",
  height: 464,
  displayMode: "regular",
  largeChartUrl: "",
});

export const POPULAR_STOCK_SYMBOLS = [
  // Tech Giants (the big technology companies)
  "AAPL",
  "MSFT",
  "GOOGL",
  "AMZN",
  "TSLA",
  "META",
  "NVDA",
  "NFLX",
  "ORCL",
  "CRM",

  // Growing Tech Companies
  "ADBE",
  "INTC",
  "AMD",
  "PYPL",
  "UBER",
  "ZOOM",
  "SPOT",
  "SQ",
  "SHOP",
  "ROKU",

  // Newer Tech Companies
  "SNOW",
  "PLTR",
  "COIN",
  "RBLX",
  "DDOG",
  "CRWD",
  "NET",
  "OKTA",
  "TWLO",
  "ZM",

  // Consumer & Delivery Apps
  "DOCU",
  "PTON",
  "PINS",
  "SNAP",
  "LYFT",
  "DASH",
  "ABNB",
  "RIVN",
  "LCID",
  "NIO",

  // International Companies
  "XPEV",
  "LI",
  "BABA",
  "JD",
  "PDD",
  "TME",
  "BILI",
  "DIDI",
  "GRAB",
  "SE",
];

export const NO_MARKET_NEWS =
  '<p class="mobile-text" style="margin:0 0 20px 0;font-size:16px;line-height:1.6;color:#4b5563;">No market news available today. Please check back tomorrow.</p>';

export const WATCHLIST_TABLE_HEADER = [
  "Company",
  "Symbol",
  "Price",
  "Change",
  "Market Cap",
  "P/E Ratio",
  "Alert",
  "Action",
];
