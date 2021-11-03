'use strict'
class Device {
  constructor(name) {
    this._name = name;
    this._state = false;
  }
  get name() {
    return this._name;
  }

  get state() {
    return this._state;
  }

  on() {
    this._state = true;
  }

  off() {
    this._state = false;
  }
}

class AirConditioning extends Device {
  constructor(name) { 
    super(name);
    this._modes = ['heating', 'cooling', 'drying', 'ventilation'];
    this._currentMode = 1
    this._temperature = 15;
  }

  get currentMode() {
    return this._modes[this._currentMode];
  }

  changeMode() {
    if (this._currentMode < this._modes.length - 1 ) {
      this._currentMode++;
    } else {
      this._currentMode = 0;
    }
  }

  get temperature() {
    return this._temperature;
  }

  increaseTemperature() {
    if (this._temperature < 40) {
      this._temperature++;
    }
  }

  decreaseTemperature() {
    if (this._temperature > 14) {
      this._temperature--;
    }
  }
}

class TV extends Device {
  constructor (name) {
    super(name);
    this._channel = 1;
    this._channelList = ['1+1', 'CТБ', 'Интер', 'Украина', 'MusicBox'];
    this._volume = 20;
    this._isMute = false;
    this._volumeBeforeMute = this._volume;
  }

  get channelName() {
    return this._channelList[this._channel - 1];
  }

  set channel(channelNumber) {
    if(this._channelValid(channelNumber)) {
      this._channel = channelNumber;
    }
  }

  nextChannel() {
    if (this._channel  < this._channelList.length) {
      this._channel++;
    } else {
      this._channel = 1;
    }
  }

  previousChannel() {
    if (this._channel  > 1) {
      this._channel--;
    } else {
      this._channel = this._channelList.length;
    }
  }

  get volume() {
    return this._volume;
  }

  increaseVolume() {
    if (this._isMute) { 
      this.unMute();
    }
    if (this._volume < 100) {
      this._volume++;
    }
  }

  decreaseVolume() {
    if (this._isMute) {
      this.unMute();
    }
    if (this._volume > 0) {
      this._volume--;
    }
  }

  get isMute() {
    return this._isMute;
  }

  mute() {
    if (!this._isMute) {
      this._volumeBeforeMute = this._volume;
      this._isMute = true;
      this._volume = 0;
    }
  }

  unMute() {
    if (this._isMute){
      this._volume = this._volumeBeforeMute;
      this._isMute = false;
    }
  }

  _channelValid(channelNumber) {
    if (typeof channelNumber === "number" && Number.isInteger(channelNumber) && channelNumber > 0 && channelNumber <= this._channelList.length ) {
      return true;
    } 
  } 
} 

class SmartHouse {
  constructor(name) {
    this._name = name;
    this._devices = [];
  }

  get name() {
    return this._name;
  } 
  

  addDevice(device) {
    if (this.getDeviceByName(device.name)) {
      alert("Device already Exists");
    } else {
      this._devices.push(device);
    }
  }

  get devices() {
    return this._devices;
  }

  getDeviceByName(name) {
    return this._devices.find((item) => item.name === name)
  }

  deleteDeviceByName(name) {
    const index = this._devices.indexOf(this.getDeviceByName(name));
    this._devices.splice(index, 1);
  }

  offAllDevice() {
    this._devices.forEach((item) => {
      item.off();
    })
  }

}

const sh = new SmartHouse('name1');
sh.addDevice(new AirConditioning("AirCond1"));
sh.addDevice(new AirConditioning("AirCond2"));
sh.addDevice(new TV("TV1"));
console.log(sh.devices);
console.log(sh.getDeviceByName("AirCond1"));
sh.getDeviceByName("AirCond1").on();
console.log(sh.getDeviceByName("AirCond1"));
sh.getDeviceByName("AirCond2").on();
console.log(sh.getDeviceByName("AirCond2"));
sh.deleteDeviceByName("AirCond1")
console.log(sh.devices);
sh.offAllDevice();
console.log(sh.devices);
sh.addDevice(new AirConditioning("AirCond2"));
sh.getDeviceByName("AirCond2").on();
console.log(sh.getDeviceByName("AirCond2"));
