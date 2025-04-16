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
import { ControlPanelSectionConfig } from '@superset-ui/chart-controls';

export const customeBbrControlConfig: ControlPanelSectionConfig = {
  label: t('Кастомные настройки ББР'),
  expanded: true,
  tabOverride: 'data',
  controlSetRows: [
    [
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
