export class Location {
  constructor(
    name="",
    alias="",
    lat=null,
    lon=null
  ) {
    this.name = name;
    this.alias = alias;
    this.lat = lat;
    this.lon = lon;
  }
}

export class Phone {
  constructor(phone){
    this.display = phone;
  }
  get iso() {
    return this.display.replace(/-/g, '');
  }
}

export class DateTime {
  constructor(date = "Actual"){
    if(date === "Actual"){
      this.display = date;
    } else {
      this.display = new Date(date).getFullYear();
    }
  }
  get iso() {
    if(this.display === "Actual"){
      return new Date();
    } else {
      return new Date(this.display);
    }
  }
};