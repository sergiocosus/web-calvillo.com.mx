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
}
