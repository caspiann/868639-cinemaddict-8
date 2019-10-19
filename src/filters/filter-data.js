import {filterLabels, filtersCounts} from '../constants';
import {generateNumber} from "../helpers";
import filterTemplate from './filter-template';

const generateFilterData = (labelNumber) => {
  return {
    label: filterLabels[labelNumber],
    number: generateNumber(0, 20),
  };
};

const generateFilterDataList = (number) => {
  const data = [];
  for (let i = 0; i < number; i++) {
    data.push(generateFilterData(i));
  }
  return data;
};
const filtersData = generateFilterDataList(filtersCounts);

const createFilterTemplateList = (template, datas) => {
  const filterList = [];
  datas.forEach((data) => {
    filterList.unshift(template(data));
  });
  return filterList;
};

export const readyFilterList = createFilterTemplateList(filterTemplate, filtersData);
