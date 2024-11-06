/**
 * @file Nenerobo Chatbot Util module
 * @author luv-mirinae
 * @version 1.0.0-alpha
 * @license AGPL-3.0
 */

export class Util {
  constructor(name) {
    this.name = name;
  }
  greeting() {
    return `Hi, ${this.name}!`;
  }
}
