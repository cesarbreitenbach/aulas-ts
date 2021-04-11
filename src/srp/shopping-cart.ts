import { Item } from '../Interfaces/Item';
import { OrderStatus } from '../Interfaces/Order';

export class ShoppingCart {
  private readonly _items: Item[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: Item): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<Item[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  total(): number {
    return +this._items.reduce((total, next) => total + next.price, 0).toFixed(2);
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Carrinho vazio');
      return;
    }

    this._orderStatus = 'close';
    this.sendMessage(`Pedido com total de ${this.total()} recebido`);
    this.saveOrder();
    this.clear();
  }

  sendMessage(msg: string): void {
    console.log(`Mensagem enviada ${msg}`);
  }

  saveOrder(): void {
    console.log('Salvei no banco..');
  }

  clear(): void {
    console.log('Carrinho limpo');
    this._items.length = 0;
  }
}

const shoppingCart = new ShoppingCart();

shoppingCart.addItem({ name: 'caneta', price: 2 });
shoppingCart.addItem({ name: 'lapis', price: 1 });
shoppingCart.addItem({ name: 'boarracha', price: 0.5 });
shoppingCart.addItem({ name: 'caderno', price: 10 });

console.log(shoppingCart.items);
console.log('Total: ' + shoppingCart.total());

shoppingCart.checkout();
