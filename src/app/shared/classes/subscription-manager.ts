import {Subscription} from 'rxjs/Subscription';

/**
 * Class to store subscriptions and clear every one easily
 */
export class SubscriptionManager {
  subscriptions: Subscription[] = [];

  /**
   * Add a subscription
   * @param subscription
   */
  set add(subscription:Subscription){
    this.subscriptions.push(subscription);
  }

  /**
   * Unsubscribe all registered subscriptions
   */
  clear(){
    console.log('clear', this.subscriptions);
    this.subscriptions.forEach(
      subscription => {
        subscription.unsubscribe();
      }
    );
    this.subscriptions.length = 0;
  }
}
