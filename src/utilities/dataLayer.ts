import { Serializable } from '../types/utility';

/**
 * @param {String} event            i.e. preorder
 * @param {String} action           i.e. submit
 * @param {Serializable=} context   i.e. { subscribeToNewsletter: true }
 */
export function pushTrackingEvent(
    event: string,
    action: string,
    context?: Serializable
): void {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, action, context });
}
