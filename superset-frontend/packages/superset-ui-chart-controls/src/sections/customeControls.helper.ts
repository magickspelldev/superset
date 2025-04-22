import { sharedControls } from '..';
import { formatSelectOptionsForRange } from '../utils';

export const echartFontSettings = [
  [
    {
      name: 'label_color_background',
      config: {
        type: 'ColorPickerControl', // ConditionalFormattingControl
        label: 'Цвет фона лейблов',
        renderTrigger: true,
        default: '',
        description: 'Позволяет настроить цвета фона для лейблов',
      },
    },
  ],
  [
    {
      name: 'label_color_text',
      config: {
        type: 'ColorPickerControl', // AnnotationLayerControl // normalize_across
        label: 'Цвет текста лейблов',
        renderTrigger: true,
        default: '',
        description: 'Позволяет настроить цвета текста для лейблов',
      },
    },
  ],
  [
    {
      name: 'label_text_size',
      config: {
        type: 'SelectControl', // SliderControl
        label: 'Font size',
        description: 'Позволяет настроить размер текста для лейблов',
        renderTrigger: true,
        choices: formatSelectOptionsForRange(6, 64),
        default: 12,
      },
    },
  ],
];

export const switchTableSpoilerSettings = [
  {
    name: 'hidden_control',
    config: {
      type: 'HiddenControl',
    },
  },
  {
    name: 'switch_table_spoiler',
    config: {
      type: 'CheckboxControl',
      label: 'Свернуть таблицы',
      renderTrigger: true,
      default: true,
      description: 'Чекбокс позволяет сворачивать табличные части',
    },
  },
];

export const hideColumnssSetting = [
  {
    name: 'hideColumns',
    config: {
      ...sharedControls.groupby,
      label: 'Скрыть колонки',
      description: 'Columns to hide',
    },
  },
];

export const hideRowsSetting = [
  {
    name: 'hideRows',
    config: {
      ...sharedControls.groupby,
      label: 'Скрыть строчки',
      description:
        'Позволяет указать строки которые будут скрыты в представлении',
    },
  },
];

export const hideMetricsSettings = [
  {
    name: 'hideMetrics',
    config: {
      ...sharedControls.metricsEmpty,
      label: 'Скрыть метрики',
      description: 'Metrics to hide',
    },
  },
];
