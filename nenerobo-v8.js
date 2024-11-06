/**
 * @file Nenerobo Chatbot Main
 * @author luv-mirinae
 * @version 1.0.0-alpha
 * @license AGPL-3.0
 */

// Load modules
import { Util } from './modules/util.js';

export function onMessage(event) {
  const util = new Util(event.message);
  event.room.send(util.greeting());
}

export function onMessageDeleted(event) {}

export function onStartCompile() {}
