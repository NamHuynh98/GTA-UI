export const generalId = () => `${Math.random().toString(16).slice(2)}`;

// cách dùng: convertArrToObjByKey(array, 'key')
export const convertArrToObjByKey = (Arr = [], keyName) => {
  return Arr.reduce((initObj, item) => {
    const key = item[keyName];
    return { ...initObj, [key]: item };
  }, {});
};

// cách dùng: convertObjToArray(obj)
export const convertObjToArray = (Obj) => {
  return Object.values(Obj);
};

// cách dùng:
// convertStringMoneyToNumber('3,000,123') => 3000123
// convertStringMoneyToNumber('3.000.123') => 3000123
export const convertStringMoneyToNumber = (stringMoney) => {
  return Number(stringMoney.replace(/[.,]+/g, ""));
};

// cách dùng: convertMoneyNumberToString(20000) => 20,000
export const convertMoneyNumberToString = (numberMoney) => {
  return new Intl.NumberFormat().format(numberMoney);
};
