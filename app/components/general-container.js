import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class GeneralContainerComponent extends Component {
  @service('shopping-cart') cart;

  get itemCount() {
    const count = this.cart.itemList.reduce((total, item) => {
      return (total += item.count);
    }, 0);

    const countString = count.toString();
    if (countString.charAt(0) === '0') {
      countString.slice(1);
    }
    return Number(countString);
  }
}
