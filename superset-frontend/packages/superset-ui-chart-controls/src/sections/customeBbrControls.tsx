/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { t } from '@superset-ui/core';
import {
  ControlPanelSectionConfig,
  formatSelectOptionsForRange,
  sharedControls,
} from '@superset-ui/chart-controls';

export const customeBbrControlConfig: ControlPanelSectionConfig = {
  label: t('Кастомные настройки ББР'),
  expanded: true,
  // tabOverride: 'data', // вкладка DATA
  // tabOverride: 'customize', // вкладка CUSTOMIZE
  controlSetRows: [
    [
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
          label: t('Свернуть таблицы'),
          renderTrigger: true,
          default: true,
          description: t('Чекбокс позволяет сворачивать табличные части'),
        },
      },
    ],
    [
      {
        name: 'hideColumns',
        config: {
          ...sharedControls.groupby,
          label: t('Скрыть колонки'),
          description: t('Columns to hide'),
        },
      },
    ],
    [
      {
        name: 'hideRows',
        config: {
          ...sharedControls.groupby,
          label: t('Скрыть строчки'),
          description: t('Rows to hide'),
        },
      },
    ],
    [
      {
        name: 'label_color_background',
        config: {
          type: 'ColorPickerControl', // ConditionalFormattingControl
          label: t('Цвет фона лейблов'),
          renderTrigger: true,
          default: '',
          description: t('Позволяет настроить цвета фона для лейблов'),
        },
      },
    ],
    [
      {
        name: 'label_color_text',
        config: {
          type: 'ColorPickerControl', // AnnotationLayerControl // normalize_across
          label: t('Цвет текста лейблов'),
          renderTrigger: true,
          default: '',
          description: t('Позволяет настроить цвета текста для лейблов'),
        },
      },
    ],
    [
      {
        name: 'label_text_size',
        config: {
          type: 'SelectControl', // SliderControl
          label: t('Font size'),
          description: t('Позволяет настроить размер текста для лейблов'),
          renderTrigger: true,
          choices: formatSelectOptionsForRange(6, 64),
          default: 12,
        },
      },
    ],
  ],
  // controlOverrides: {
  //   y_axis_format: {
  //     label: t('Number format'),
  //   },
  //   x_axis: {
  //     label: t('TEMPORAL X-AXIS'),
  //     ...temporalColumnMixin,
  //   },
  // },
  // formDataOverrides: formData => ({
  //   ...formData,
  //   metric: getStandardizedControls().shiftMetric(),
  // }),
};

export default customeBbrControlConfig;
