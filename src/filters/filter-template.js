import {ucfirst} from '../helpers';

const filterTemplate = (data) => {
  return `
    <a 
    href="${data.label}"
    class="main-navigation__item 
    ${data.label === `stats` ? `main-navigation__item--additional` : ``} 
    ${data.label === `all` ? `main-navigation__item--active` : ``}"
    >
    ${ucfirst(data.label)} 
    ${data.number > 0 ? `<span class="main-navigation__item-count">${data.number}</span>` : ``}
    </a>
  `;
};

export default filterTemplate;
