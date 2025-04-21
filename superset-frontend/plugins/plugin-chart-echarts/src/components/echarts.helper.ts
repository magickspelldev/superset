export enum LabelType {
  Key = 'key',
  Value = 'value',
  Percentage = 'percent',
  KeyValue = 'key_value',
  KeyPercentage = 'key_percent',
  ValuePercentage = 'value_percent',
  KeyValuePercentage = 'key_value_percent',
  Template = 'template',
}

export type CurrencyFormat = {
  symbolPosition: 'prefix' | 'suffix';
  symbol: string;
};

export type EchartItemValue = {
  value: number | string;
  name: number | string;
};

const currencySymbols: Record<string, string> = {
  RUB: '₽',
  USD: '$',
  EUR: '€',
  GBP: '£',
  INR: '₹',
  MXN: 'MX$',
  CNY: 'CN¥',
  JPY: '¥',
};

function formatValue(
  currencyFormat: CurrencyFormat,
  item: EchartItemValue,
): string {
  return currencyFormat.symbolPosition === 'prefix'
    ? `${currencySymbols[currencyFormat.symbol]} ${item.value}`
    : `${item.value} ${currencySymbols[currencyFormat.symbol]}`;
}

// todo вынести в хелпер и добавить вариации для отображений
export function transformLabelValues(
  items: any[],
  labelType: LabelType,
  currencyFormat: CurrencyFormat,
  labelTemplate: string,
): any[] {
  return items.map((item: any) => {
    const formattedItem = { ...item };

    if (labelType === LabelType.Key) {
      formattedItem.name = item.name;
    }

    if (labelType === LabelType.Value) {
      formattedItem.name = currencyFormat
        ? currencyFormat.symbolPosition === 'prefix'
          ? `${currencySymbols[currencyFormat.symbol]} ${item.value}`
          : `${item.value} ${currencySymbols[currencyFormat.symbol]}`
        : item.value;
    }

    if (labelType === LabelType.Percentage) {
      const total: number = items.reduce((sum, i) => sum + Number(i.value), 0);
      formattedItem.name = `${((item.value / total) * 100).toFixed(2)} %`;
    }

    if (labelType === LabelType.KeyValue) {
      const formattedValue = formatValue(currencyFormat, item);
      formattedItem.name = `${item.name}: ${formattedValue}`;
    }

    if (labelType === LabelType.ValuePercentage) {
      const total: number = items.reduce((sum, i) => sum + Number(i.value), 0);
      const formattedItemName = formatValue(currencyFormat, item);
      formattedItem.name = `${formattedItemName} (${(
        (item.value / total) *
        100
      ).toFixed(2)} %)`;
    }

    if (labelType === LabelType.KeyPercentage) {
      const total: number = items.reduce((sum, i) => sum + Number(i.value), 0);
      formattedItem.name = `${item.name}: ${(
        (item.value / total) *
        100
      ).toFixed(2)} %`;
    }

    if (labelType === LabelType.KeyValuePercentage) {
      const total: number = items.reduce((sum, i) => sum + Number(i.value), 0);
      const formattedItemName = formatValue(currencyFormat, item);
      formattedItem.name = `${item.name}: ${formattedItemName} (${(
        (item.value / total) *
        100
      ).toFixed(2)} %)`;
    }

    if (labelType === LabelType.Template) {
      /*
      Format data labels.
      Use variables: {name}, {value}, {percent}.\n represents a new line.
      ECharts compatibility: {a} (series), {b} (name), {c} (value), {d} (percentage)
      */
      const total: number = items.reduce(
        (sum, i) => Number(sum) + Number(i.value),
        0,
      );
      const percent = `(${((item.value / total) * 100).toFixed(2)} %)`;
      const formattedItemName = formatValue(currencyFormat, item);

      formattedItem.name = labelTemplate
        .replace(/{name}/g, item.name)
        .replace(/{b}/g, item.name)
        .replace(/(name)/g, item.name)
        .replace(/{value}/g, formattedItemName)
        .replace(/{c}/g, formattedItemName)
        .replace(/(value)/g, formattedItemName)
        .replace(/{percent}/g, percent)
        .replace(/{d}/g, percent)
        .replace(/(percentage)/g, percent);
    }

    if (item.children && Array.isArray(item.children)) {
      formattedItem.children = transformLabelValues(
        item.children,
        labelType,
        currencyFormat,
        labelTemplate,
      );
    }
    return formattedItem;
  });
}

export function getColor(color: {
  r: number;
  g: number;
  b: number;
  a: number;
}): string {
  const { r, g, b, a } = color;
  return a === 1 ? `rgb(${r},${g},${b})` : `rgba(${r},${g},${b},${a})`;
}
