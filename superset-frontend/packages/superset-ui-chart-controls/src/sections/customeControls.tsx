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
import {
  echartFontSettings,
  hideColumnssSetting,
  hideMetricsSettings,
  hideRowsSetting,
  switchTableSpoilerSettings,
} from './customeControls.helper';

export enum VizTypeCfg {
  Table = 'table',
  PivotTable = 'pivot_table',
  Pie = 'pie',
  Sunburst = 'sunburst',
  Area = 'area', // empty
  Sankey = 'sankey', // empty
  BigNumberTotal = 'big_number_total', // empty
  BigNumberWhithTrendline = 'big_number_whith_trendline', // empty
  Handlebars = 'wandlebars', // empty
  Waterfall = 'waterfall', // empty
  Step = 'step', // empty
  Smoothline = 'smoothline', // empty
  RegularBar = 'regular_bar', // empty
  Line = 'line', // empty
}

export function getCustomeControlConfig(
  vizType: VizTypeCfg,
): ControlPanelSectionConfig {
  const customeControlConfig: ControlPanelSectionConfig = {
    label: t('Кастомные настройки'),
    expanded: true,
    // tabOverride: 'data', // вкладка DATA
    // tabOverride: 'customize', // вкладка CUSTOMIZE
    controlSetRows: [],
  };

  if (vizType === VizTypeCfg.Table || vizType === VizTypeCfg.PivotTable) {
    customeControlConfig.controlSetRows.push(hideColumnssSetting);
  }
  if (vizType === VizTypeCfg.Table) {
    customeControlConfig.controlSetRows.push(hideMetricsSettings);
  }
  if (vizType === VizTypeCfg.PivotTable) {
    customeControlConfig.controlSetRows.push(switchTableSpoilerSettings);
    customeControlConfig.controlSetRows.push(hideRowsSetting);
  }

  if (vizType === VizTypeCfg.Pie || vizType === VizTypeCfg.Sunburst) {
    customeControlConfig.controlSetRows.push(...echartFontSettings);
  }

  return customeControlConfig;
}

export const customeControlConfig: ControlPanelSectionConfig = {
  label: t('Кастомные настройки'),
  expanded: true,
  // tabOverride: 'data', // вкладка DATA
  // tabOverride: 'customize', // вкладка CUSTOMIZE
  controlSetRows: [
    switchTableSpoilerSettings,
    hideColumnssSetting,
    hideRowsSetting,
    hideMetricsSettings,
    ...echartFontSettings,
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

export default customeControlConfig;
