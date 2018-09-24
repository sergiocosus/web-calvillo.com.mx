// @dynamic

export class Model {
  parse(obj): any {
    for (var prop in obj) this[prop] = obj[prop];
    return this;
  }

  parseDates(datesArray: string[]) {
    datesArray.forEach(field => {
      if (this[field]) {
        this[field] = new Date(this[field]);
      }
    });
  }

  replaceProperties(obj) {
    for (const prop in this) {
      if (Object.getOwnPropertyDescriptor(this, prop) && typeof this[prop] !== 'function')
      {
        this[prop] = obj[prop];
      }
    }
    return this;
  }
}
