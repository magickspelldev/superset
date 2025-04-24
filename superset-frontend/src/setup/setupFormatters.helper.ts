import { NumberFormatter } from '@superset-ui/core';

export enum RuFmt {
  SmartNumberRu = 'SMART_NUMBER_RU',
  Split = 'split',
  SplitDigit = 'split-digit',
  Ru3s = 'ru,3s',
  Ru6s = 'ru,6s',
  Ru9s = 'ru,9s',
}

export function getNewFormatterRu(key: RuFmt, point: number): NumberFormatter {
  return new NumberFormatter({
    id: key,
    formatFunc: (value: number) => {
      if (value === 0) return '0';
      let absoluteValue: number;
      if (point === 1) {
        absoluteValue = value;
      } else {
        absoluteValue = Math.abs(value);
      }
      if (absoluteValue >= 1000000000) {
        return `${(value / 1000000000).toFixed(point)} млрд.`;
      }
      if (absoluteValue >= 1000000) {
        return `${(value / 1000000).toFixed(point)} млн.`;
      }
      if (absoluteValue >= 1000) {
        return `${(value / 1000).toFixed(point)} тыс.`;
      }
      return value.toString();
    },
    label: 'Russian Number Format',
    description:
      'Formats numbers with Russian abbreviations (млн., млрд., тыс.)',
  });
}

export function getNewFormatterSplitter(
  key: RuFmt,
  fixed: boolean,
): NumberFormatter {
  return new NumberFormatter({
    id: key,
    formatFunc: (value: number) => {
      let val: string;
      if (fixed) {
        val = String(value.toFixed(2));
      } else {
        val = String(value.toFixed(0));
      }
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    },
    label: 'Russian Split Number Format',
    description: 'Formats numbers with Russian and splitter (" ")',
  });
}
