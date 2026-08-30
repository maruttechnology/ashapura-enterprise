export interface ChartRow {
  label: string;
  values: Record<string, string | number>;
}

export interface ProductChartConfig {
  title: string;
  rowHeader?: string;
  columns: string[];
  columnUnit?: string;
  unitDescription?: string;
  note?: string;
  rows: ChartRow[];
  tabs?: {
    id: string;
    label: string;
    chart: Omit<ProductChartConfig, 'tabs'>;
  }[];
}

export const roundBarChart: ProductChartConfig = {
  title: 'Round Bars Weight Chart',
  rowHeader: 'Round',
  columnUnit: '',
  unitDescription: 'Standard nominal weight in kg per metre (kg/m)',
  columns: ['Weight'],
  note: '* Nominal weight values in kg/m (IS 2062 / EN 10277 standards).',
  rows: [
    { label: '10 mm', values: { 'Weight': '0.62' } },
    { label: '12 mm', values: { 'Weight': '0.90' } },
    { label: '16 mm', values: { 'Weight': '1.60' } },
    { label: '20 mm', values: { 'Weight': '2.50' } },
    { label: '22 mm', values: { 'Weight': '3.00' } },
    { label: '25 mm', values: { 'Weight': '3.80' } },
    { label: '28 mm', values: { 'Weight': '4.80' } },
    { label: '32 mm', values: { 'Weight': '6.30' } },
    { label: '36 mm', values: { 'Weight': '8.00' } },
    { label: '40 mm', values: { 'Weight': '9.90' } },
    { label: '45 mm', values: { 'Weight': '12.30' } },
    { label: '50 mm', values: { 'Weight': '15.40' } },
    { label: '53 mm', values: { 'Weight': '17.32' } },
    { label: '56 mm', values: { 'Weight': '19.34' } },
    { label: '63 mm', values: { 'Weight': '24.50' } },
    { label: '80 mm', values: { 'Weight': '39.46' } },
    { label: '90 mm', values: { 'Weight': '49.94' } },
    { label: '100 mm', values: { 'Weight': '61.66' } },
    { label: '110 mm', values: { 'Weight': '74.60' } },
  ],
};

export const squareBarChart: ProductChartConfig = {
  title: 'Square Bars Weight Chart',
  rowHeader: 'Square',
  columnUnit: '',
  unitDescription: 'Standard nominal weight in kg per metre (kg/m)',
  columns: ['Weight'],
  note: '* Nominal weight values in kg/m (IS 2062 / EN 10277 standards).',
  rows: [
    { label: '10x10', values: { 'Weight': '0.78' } },
    { label: '12x12', values: { 'Weight': '1.13' } },
    { label: '16x16', values: { 'Weight': '2.01' } },
    { label: '20x20', values: { 'Weight': '3.14' } },
    { label: '25x25', values: { 'Weight': '4.91' } },
    { label: '32x32', values: { 'Weight': '8.04' } },
    { label: '40x40', values: { 'Weight': '12.56' } },
    { label: '45x45', values: { 'Weight': '15.90' } },
    { label: '50x50', values: { 'Weight': '19.62' } },
    { label: '65x65', values: { 'Weight': '33.17' } },
    { label: '75x75', values: { 'Weight': '44.16' } },
    { label: '90x90', values: { 'Weight': '63.58' } },
    { label: '125x125', values: { 'Weight': '122.66' } },
    { label: '150x150', values: { 'Weight': '176.62' } },
    { label: '200x200', values: { 'Weight': '314.00' } },
  ],
};

export const flatBarChart: ProductChartConfig = {
  title: 'MS Flat Bars (Patti) Weight Chart',
  rowHeader: 'MS Patti',
  columnUnit: 'mm',
  unitDescription: 'Values indicate standard nominal weight in Rmt KG (kg/m)',
  columns: ['3', '4', '5', '6', '8', '10', '12', '14', '16', '20', '25', '32', '40', '50'],
  note: '* All weights are nominal values in Rmt KG (IS 2062 standard).',
  rows: [
    { label: '20 mm', values: { '3': '0.47', '5': '0.78' } },
    { label: '25 mm', values: { '3': '0.59', '4': '0.78', '5': '0.98', '6': '1.18', '8': '1.57', '10': '1.96', '12': '2.36', '14': '2.75', '16': '3.14' } },
    { label: '30 mm', values: { '3': '0.71', '4': '0.94', '5': '1.18', '6': '1.41', '8': '1.88', '10': '2.36', '12': '2.83', '14': '3.30', '16': '3.77', '20': '4.71' } },
    { label: '40 mm', values: { '3': '0.94', '4': '1.26', '5': '1.57', '6': '1.88', '8': '2.51', '10': '3.14', '12': '3.77', '14': '4.40', '16': '5.02', '20': '6.28' } },
    { label: '50 mm', values: { '3': '1.18', '4': '1.57', '5': '1.96', '6': '2.36', '8': '3.14', '10': '3.92', '12': '4.71', '14': '5.49', '16': '6.28', '20': '7.85', '25': '9.81' } },
    { label: '65 mm', values: { '6': '3.06', '8': '4.08', '10': '5.10', '12': '6.12', '14': '7.14', '16': '8.16', '20': '10.20', '25': '12.76', '32': '16.33', '40': '20.41', '50': '25.51' } },
    { label: '75 mm', values: { '6': '3.53', '8': '4.71', '10': '5.89', '12': '7.06', '14': '8.24', '16': '9.42', '20': '11.77', '25': '14.72', '32': '18.84', '40': '23.55', '50': '29.44' } },
    { label: '100 mm', values: { '6': '4.71', '8': '6.28', '10': '7.85', '12': '9.42', '14': '10.99', '16': '12.56', '20': '15.70', '25': '19.62', '32': '25.12', '40': '31.40', '50': '39.25' } },
    { label: '125 mm', values: { '6': '5.89', '8': '7.85', '10': '9.81', '12': '11.77', '14': '13.74', '16': '15.70', '20': '19.62', '25': '24.53', '32': '31.40', '40': '39.25', '50': '49.06' } },
    { label: '150 mm', values: { '6': '7.06', '8': '9.42', '10': '11.77', '12': '14.13', '14': '16.48', '16': '18.84', '20': '23.55', '25': '29.44', '32': '37.68', '40': '47.10', '50': '58.87' } },
    { label: '175 mm', values: { '6': '8.24', '8': '10.99', '10': '13.74', '12': '16.48', '14': '19.23', '16': '21.98', '20': '27.47', '25': '34.34', '32': '43.96', '40': '54.95', '50': '68.69' } },
    { label: '200 mm', values: { '6': '9.42', '8': '12.56', '10': '15.70', '12': '18.84', '14': '21.98', '16': '25.12', '20': '31.40', '25': '39.25', '32': '50.24', '40': '62.80', '50': '78.50' } },
    { label: '225 mm', values: { '6': '10.60', '8': '14.13', '10': '17.66', '12': '21.19', '14': '24.73', '16': '28.26', '20': '35.32', '25': '44.16', '32': '56.52', '40': '70.65', '50': '88.31' } },
    { label: '250 mm', values: { '6': '11.77', '8': '15.70', '10': '19.62', '12': '23.55', '14': '27.47', '16': '31.40', '20': '39.25', '25': '49.06', '32': '62.80', '40': '78.50', '50': '98.12' } },
  ],
};

export const channelChart: ProductChartConfig = {
  title: 'Mild Steel Channels Weight Chart',
  rowHeader: 'Channel',
  columnUnit: '',
  unitDescription: 'Standard nominal weight in kg per metre (kg/m)',
  columns: ['Weight'],
  note: '* Standard ISMC nominal weight values in kg/m (IS 808 / IS 2062 standards).',
  rows: [
    { label: '75x40', values: { 'Weight': '6.80' } },
    { label: '100x50', values: { 'Weight': '9.20' } },
    { label: '125x65', values: { 'Weight': '12.80' } },
    { label: '150x75', values: { 'Weight': '16.40' } },
    { label: '200x75', values: { 'Weight': '22.20' } },
    { label: '250x82', values: { 'Weight': '34.00' } },
  ],
};

export const beamChart: ProductChartConfig = {
  title: 'Mild Steel I-Beams (Joists) Weight Chart',
  rowHeader: 'I Beam',
  columnUnit: '',
  unitDescription: 'Standard nominal weight in kg per metre (kg/m)',
  columns: ['Weight'],
  note: '* Standard ISMB nominal weight values in kg/m (IS 808 / IS 2062 standards).',
  rows: [
    { label: '100x50', values: { 'Weight': '8.00' } },
    { label: '125x70', values: { 'Weight': '13.20' } },
    { label: '150x75', values: { 'Weight': '15.00' } },
    { label: '175x85', values: { 'Weight': '19.50' } },
    { label: '200x100', values: { 'Weight': '25.40' } },
    { label: '250x125', values: { 'Weight': '37.30' } },
    { label: '300x140', values: { 'Weight': '44.20' } },
  ],
};

export const productCharts: Record<string, ProductChartConfig> = {
  'ms-angles': {
    title: 'Angle Size & Weight Chart',
    rowHeader: 'Angle (mm)',
    columnUnit: 'mm',
    unitDescription: 'Values indicate standard nominal weight in kg per metre (kg/m)',
    columns: ['3', '5', '6', '8', '10', '12'],
    note: '* All weights are nominal values in kg/m (IS 808 standard).',
    rows: [
      { label: '20x20', values: { '3': '0.90' } },
      { label: '25x25', values: { '3': '1.10', '5': '1.80' } },
      { label: '30x30', values: { '3': '1.40' } },
      { label: '35x35', values: { '5': '2.60' } },
      { label: '37x37', values: { '3': '1.67' } },
      { label: '40x40', values: { '5': '3.00', '6': '3.50' } },
      { label: '50x50', values: { '5': '3.80', '6': '4.50' } },
      { label: '65x65', values: { '5': '4.91', '6': '5.80', '8': '7.70' } },
      { label: '75x75', values: { '5': '5.70', '6': '6.80', '8': '8.90', '10': '11.00' } },
      { label: '90x90', values: { '6': '8.20', '8': '10.80', '10': '13.40', '12': '12.80' } },
      { label: '100x100', values: { '6': '9.20', '8': '12.10', '10': '14.90', '12': '17.70' } },
    ],
  },
  'ms-pipes': {
    title: 'Hollow Sections & Pipes Size & Weight Chart',
    rowHeader: 'Size',
    columnUnit: '',
    unitDescription: 'Standard nominal weights according to wall thickness',
    columns: ['1.60 mm', '2.00 mm', '2.60 mm', '3.00 mm', '3.60 mm', '4.00 mm', '5.00 mm', '6.00 mm'],
    note: '* All weights are standard nominal values (IS 4923 / IS 1161 / IS 1239 standards).',
    rows: [
      { label: '20 x 20', values: { '1.60 mm': '6.00', '2.00 mm': '7.00', '2.60 mm': '9.00', '3.00 mm': '10.00' } },
      { label: '25 x 25', values: { '1.60 mm': '7.50', '2.00 mm': '9.60', '2.60 mm': '12.00', '3.00 mm': '13.00' } },
      { label: '32 x 32', values: { '1.60 mm': '9.30', '2.00 mm': '12.00', '2.60 mm': '14.00', '3.00 mm': '16.00', '3.60 mm': '19.20', '4.00 mm': '22.00' } },
      { label: '40 x 40', values: { '1.60 mm': '11.00', '2.00 mm': '14.00', '2.60 mm': '18.00', '3.00 mm': '20.00', '3.60 mm': '22.80', '4.00 mm': '26.00', '5.00 mm': '34.00' } },
      { label: '50 x 50', values: { '1.60 mm': '13.90', '2.00 mm': '17.60', '2.60 mm': '23.00', '3.00 mm': '24.00', '3.60 mm': '30.00', '4.00 mm': '34.00', '5.00 mm': '41.00' } },
      { label: '50 x 25', values: { '1.60 mm': '11.20', '2.00 mm': '13.60', '2.60 mm': '18.00', '3.00 mm': '20.00', '3.60 mm': '22.80', '4.00 mm': '26.00', '5.00 mm': '34.00' } },
      { label: '60 x 40', values: { '1.60 mm': '14.00', '2.00 mm': '17.60', '2.60 mm': '23.00', '3.00 mm': '24.00', '3.60 mm': '30.00', '4.00 mm': '34.00', '5.00 mm': '41.00' } },
      { label: '60 x 60', values: { '1.60 mm': '17.20', '2.00 mm': '23.00', '2.60 mm': '28.00', '3.00 mm': '33.00', '3.60 mm': '38.00', '4.00 mm': '41.00', '5.00 mm': '50.00' } },
      { label: '66 x 33', values: { '1.60 mm': '14.00', '2.00 mm': '18.00', '2.60 mm': '23.00', '3.00 mm': '25.00', '3.60 mm': '30.00', '4.00 mm': '34.00', '5.00 mm': '41.00' } },
      { label: '72 x 72', values: { '1.60 mm': '20.20', '2.00 mm': '25.30', '2.60 mm': '33.00', '3.00 mm': '37.00', '3.60 mm': '42.00', '4.00 mm': '50.00', '5.00 mm': '59.00' } },
      { label: '80 x 80', values: { '1.60 mm': '22.40', '2.00 mm': '28.00', '2.60 mm': '36.40', '3.00 mm': '42.00', '3.60 mm': '52.00', '4.00 mm': '57.00', '5.00 mm': '70.00' } },
      { label: '80 x 40', values: { '1.60 mm': '17.50', '2.00 mm': '22.00', '2.60 mm': '27.00', '3.00 mm': '32.00', '3.60 mm': '38.00', '4.00 mm': '43.00', '5.00 mm': '52.50' } },
      { label: '80 x 60', values: { '1.60 mm': '20.20', '2.00 mm': '25.30', '2.60 mm': '32.70', '3.00 mm': '38.00', '3.60 mm': '45.10', '4.00 mm': '50.00', '5.00 mm': '60.00' } },
      { label: '90 x 90', values: { '2.00 mm': '32.60', '2.60 mm': '42.00', '3.00 mm': '48-49', '3.60 mm': '58.30', '4.00 mm': '64.00', '5.00 mm': '80.00' } },
      { label: '96 x 48', values: { '1.60 mm': '20.20', '2.00 mm': '26.00', '2.60 mm': '33.00', '3.00 mm': '38-39', '3.60 mm': '45.00', '4.00 mm': '50.00', '5.00 mm': '60.50' } },
      { label: '100 x 100', values: { '2.00 mm': '36.70', '2.60 mm': '47.70', '3.00 mm': '55.00', '3.60 mm': '66.00', '4.00 mm': '73.00', '5.00 mm': '89.00' } },
      { label: '113 x 113', values: { '2.00 mm': '40.40', '2.60 mm': '52.20', '3.00 mm': '60.60', '3.60 mm': '72.30', '4.00 mm': '80.00', '5.00 mm': '100.00', '6.00 mm': '116.00' } },
      { label: '120 x 60', values: { '1.60 mm': '26.00', '2.00 mm': '33.00', '2.60 mm': '42.50', '3.00 mm': '50.00', '3.60 mm': '58.30', '4.00 mm': '64.50', '5.00 mm': '80.00' } },
      { label: '132 x 132', values: { '2.60 mm': '62.80', '3.00 mm': '72.50', '3.60 mm': '85.70', '4.00 mm': '96.00', '5.00 mm': '118.00', '6.00 mm': '150.00' } },
      { label: '145 x 82', values: { '2.60 mm': '52.00', '3.00 mm': '60.60', '3.60 mm': '72.30', '4.00 mm': '80.00', '5.00 mm': '100.00', '6.00 mm': '116.00' } },
      { label: '150 x 150', values: { '2.60 mm': '72.80', '3.00 mm': '84.00', '3.60 mm': '102.20', '4.00 mm': '112.00', '5.00 mm': '138.00', '6.00 mm': '165.00' } },
      { label: '172 x 92', values: { '2.60 mm': '63.20', '3.00 mm': '73.00', '3.60 mm': '88.00', '4.00 mm': '96.50', '5.00 mm': '120.00', '6.00 mm': '143.00' } },
      { label: '180 x 180', values: { '3.00 mm': '100.00', '3.60 mm': '121.00', '4.00 mm': '134.00', '5.00 mm': '156.00' } },
      { label: '200 x 100', values: { '4.00 mm': '110.00', '5.00 mm': '125.00', '6.00 mm': '160.00' } },
      { label: '200 x 200', values: { '4.00 mm': '150.00', '5.00 mm': '180.00', '6.00 mm': '220.00' } },
      { label: '240 x 120', values: { '4.00 mm': '130.00', '5.00 mm': '160.00', '6.00 mm': '200.00' } },
      { label: '225 x 225', values: { '4.00 mm': '160.00', '5.00 mm': '200.00', '6.00 mm': '240.00' } },
      { label: '300 x 150', values: { '4.00 mm': '160.00', '5.00 mm': '200.00', '6.00 mm': '240.00' } },
    ],
  },
  'channels': channelChart,
  'beams': beamChart,
  'round-bars': roundBarChart,
  'square-bars': squareBarChart,
  'pata-patti': flatBarChart,
  'bright-bars': {
    title: 'Bright Bars Weight Chart',
    rowHeader: 'Size',
    columns: [],
    unitDescription: 'Select bar profile below to view corresponding nominal weights',
    rows: [],
    tabs: [
      {
        id: 'round',
        label: 'Round Bar',
        chart: {
          title: 'Bright Round Bars Weight Chart',
          rowHeader: 'Round',
          unitDescription: 'Standard nominal weight in kg per metre (kg/m)',
          columns: ['Weight'],
          note: '* Nominal weight values in kg/m (IS 2062 / EN 10277 standards).',
          rows: roundBarChart.rows,
        },
      },
      {
        id: 'flat',
        label: 'Flat Bar (MS Patti)',
        chart: {
          title: 'Bright Flat Bars (Patti) Weight Chart',
          rowHeader: 'MS Patti',
          columnUnit: 'mm',
          unitDescription: 'Values indicate standard nominal weight in Rmt KG (kg/m)',
          columns: flatBarChart.columns,
          note: '* All weights are nominal values in Rmt KG (IS 2062 standard).',
          rows: flatBarChart.rows,
        },
      },
      {
        id: 'square',
        label: 'Square Bar',
        chart: {
          title: 'Bright Square Bars Weight Chart',
          rowHeader: 'Square',
          unitDescription: 'Standard nominal weight in kg per metre (kg/m)',
          columns: ['Weight'],
          note: '* Nominal weight values in kg/m (IS 2062 / EN 10277 standards).',
          rows: squareBarChart.rows,
        },
      },
    ],
  },
};
