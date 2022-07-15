import { CSSProperties } from 'react';

export type EChartsInstance = any;

export type Opts = {
  devicePixelRatio?: number | undefined;
  renderer?: string | undefined;
  width?: number | string | undefined;
  height?: number | string | undefined;
};

export type EChartsReactProps = {
  echarts:any;
  canvasId?: string;
  className?: string;
  style?: CSSProperties;
  option: any;
  theme?: string | Record<string, any>;
  notMerge?: boolean;
  lazyUpdate?: boolean;
  showLoading?: boolean;
  loadingOption?: any;
  /**
   *  https://echarts.apache.org/zh/api.html#echarts.init
   */
  opts?: Opts;
  onChartReady?: (instance: EChartsInstance) => void;
  onEvents?: Record<string, Function>;
};

export type InitEchart = {
    dom: HTMLDivElement | HTMLCanvasElement;
    devicePixelRatio: number | undefined;
    width: number | string | undefined;
    height: number | string | undefined;
}
