import {filterLabels} from './constants';
import {generateNumber} from "./helpers";
import filterTemplate from './filter-template';

const generateFilterData = (labelNumber) => {
  return {
    label: filterLabels[labelNumber],
    number: generateNumber(0, 20),
  };
};

const generatefilterDataList = (number) => {
  const data = [];
  for (let i = 0; i < number; i++) {
    data.push(generateFilterData(i));
  }
  return data;
};
const filtersData = generatefilterDataList(5);

const createFilterTemplateList = (template, data) => {
  const filterList = [];
  data.forEach((d) => {
    filterList.unshift(template(d));
  });
  return filterList;
};

export const readyFilterList = createFilterTemplateList(filterTemplate, filtersData);
