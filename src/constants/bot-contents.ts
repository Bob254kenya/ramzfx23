type TTabsTitle = {
    [key: string]: string | number;
};

type TDashboardTabIndex = {
    [key: string]: number;
};

export const tabs_title: TTabsTitle = Object.freeze({
    WORKSPACE: 'Workspace',
    CHART: 'Chart',
});

export const DBOT_TABS: TDashboardTabIndex = Object.freeze({
    BEST_BOTS: 0,
    DASHBOARD: 1,
    BOT_BUILDER: 2,
    AUTO_TRADES: 3,
    MANUAL_TRADING: 4,
    SCANNER: 5,
    ANALYSIS_TOOL: 6,
    SPEED_BOT: 7,
    PRO_SCANNER: 8,
});

export const MAX_STRATEGIES = 10;

export const TAB_IDS = [
    'id-best-bots',
    'id-dbot-dashboard',
    'id-bot-builder',
    'id-auto-trades',
    'id-manual-trading',
    'id-scanner',
    'id-analysistool',
    'id-pro-scanner',
    'id-speed-bot',
];

export const DEBOUNCE_INTERVAL_TIME = 500;
