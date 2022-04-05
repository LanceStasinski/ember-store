import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ProductComponent extends Component {
  productImage = this.args.product.colors[0].image;

  toggleZoom() {}

  alt = this.args.product.name;
}
