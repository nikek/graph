const startDatetime = 1511429647870;

export const singleTS = [
  { y: 1597 },
  { y: 1660 },
  { y: 1663 },
  { y: 1640 },
  { y: 2190 },
  { y: 2342 },
  { y: 2370 },
  { y: 2554 },
  { y: 2378 },
  { y: 2243 },
  { y: 2356 },
  { y: 2481 },
  { y: 1027 }
].map((o, i) => ({ x: startDatetime + i * 60000, y: o.y }));

export const singleTS2 = [
  { y: 1297 },
  { y: 1060 },
  { y: 1216 },
  { y: 943 },
  { y: 190 },
  { y: 845 },
  { y: 700 },
  { y: 1502 },
  { y: 2381 },
  { y: 2243 },
  { y: 2560 },
  { y: 3810 },
  { y: 3270 }
].map((o, i) => ({ x: startDatetime + i * 60000, y: o.y }));

export const singleTS3 = [
  { y: 297 },
  { y: 360 },
  { y: 216 },
  { y: 443 },
  { y: 2190 },
  { y: 2845 },
  { y: 2700 },
  { y: 2502 },
  { y: 1381 },
  { y: 1243 },
  { y: 1060 },
  { y: 810 },
  { y: 270 }
].map((o, i) => ({ x: startDatetime + i * 60000, y: o.y }));

const realData2 = [
  {
    currency: 'EUR',
    amount: 1297,
    week: '2017 w01'
  },
  {
    currency: 'EUR',
    amount: 1360,
    week: '2017 w02'
  },
  {
    currency: 'EUR',
    amount: 1463,
    week: '2017 w03'
  },
  {
    currency: 'EUR',
    amount: 1440,
    week: '2017 w04'
  },
  {
    currency: 'EUR',
    amount: 1790,
    week: '2017 w05'
  },
  {
    currency: 'EUR',
    amount: 2042,
    week: '2017 w06'
  },
  {
    currency: 'EUR',
    amount: 1270,
    week: '2017 w07'
  },
  {
    currency: 'EUR',
    amount: 1256,
    week: '2017 w08'
  },
  {
    currency: 'EUR',
    amount: 1651,
    week: '2017 w09'
  },
  {
    currency: 'EUR',
    amount: 2336,
    week: '2017 w10'
  },
  {
    currency: 'EUR',
    amount: 2596,
    week: '2017 w11'
  },
  {
    currency: 'EUR',
    amount: 2722,
    week: '2017 w12'
  },
  {
    currency: 'EUR',
    amount: 2193,
    week: '2017 w13'
  }
].map((o, i) => ({ x: i, y: o.amount }));

export const twentyfive = [
  { x: '0', y: 50 },
  { x: '1', y: 80 },
  { x: '2', y: 88 },
  { x: '3', y: 32 },
  { x: '4', y: 52 },
  { x: '5', y: 49 },
  { x: '6', y: 88 },
  { x: '7', y: 72 },
  { x: '8', y: 91 },
  { x: '9', y: 49 },
  { x: '10', y: 63 },
  { x: '11', y: 42 },
  { x: '12', y: 11 },
  { x: '13', y: 12 },
  { x: '14', y: 26 },
  { x: '15', y: 57 },
  { x: '16', y: 32 },
  { x: '17', y: 19 },
  { x: '18', y: 74 },
  { x: '19', y: 11 },
  { x: '20', y: 64 },
  { x: '21', y: 76 },
  { x: '22', y: 88 },
  { x: '23', y: 13 },
  { x: '24', y: 59 }
];

export const fifty = [
  { x: '0', y: 16 },
  { x: '1', y: 39 },
  { x: '2', y: 64 },
  { x: '3', y: 8 },
  { x: '4', y: 79 },
  { x: '5', y: 83 },
  { x: '6', y: 70 },
  { x: '7', y: 31 },
  { x: '8', y: 17 },
  { x: '9', y: 72 },
  { x: '10', y: 48 },
  { x: '11', y: 69 },
  { x: '12', y: 65 },
  { x: '13', y: 81 },
  { x: '14', y: 91 },
  { x: '15', y: 50 },
  { x: '16', y: 95 },
  { x: '17', y: 96 },
  { x: '18', y: 40 },
  { x: '19', y: 36 },
  { x: '20', y: 90 },
  { x: '21', y: 25 },
  { x: '22', y: 79 },
  { x: '23', y: 60 },
  { x: '24', y: 41 },
  { x: '25', y: 19 },
  { x: '26', y: 97 },
  { x: '27', y: 47 },
  { x: '28', y: 35 },
  { x: '29', y: 19 },
  { x: '30', y: 36 },
  { x: '31', y: 72 },
  { x: '32', y: 21 },
  { x: '33', y: 57 },
  { x: '34', y: 96 },
  { x: '35', y: 92 },
  { x: '36', y: 50 },
  { x: '37', y: 90 },
  { x: '38', y: 30 },
  { x: '39', y: 73 },
  { x: '40', y: 39 },
  { x: '41', y: 63 },
  { x: '42', y: 16 },
  { x: '43', y: 86 },
  { x: '44', y: 85 },
  { x: '45', y: 38 },
  { x: '46', y: 80 },
  { x: '47', y: 12 },
  { x: '48', y: 42 },
  { x: '49', y: 7 }
];
