import { helper } from '@ember/component/helper';

export default helper(function cartDisplay(positional) {
  const [list, count] = positional;
  return list.length !== 0 && count !== 0;
});
