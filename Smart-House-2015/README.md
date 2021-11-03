1. Выбрать первое устройство
Кондиционер

2. Чертеж первого устройства
класс Сonditioner
   состояние
		_nanameme : String
		_state : Boolean
		_currentMode : Number
		_modes: String[]   // heating, cooling, drying, ventilation
		_temperature: Number (14-40)

   поведение
      getName() : String
      getState() : Boolean
      on() : void
      off() : void
	   getCurrentMode(): String
	   changeMode() : void
      getTemperature() : Number
      increaseTemperature() : void
      decreaseTemperature() : void */

4. Выбрать второе устройство
Телевизор


5. Чертеж второго устройства
класс TV
  состояние
		_name : String
		_state : Boolean
		_channel : Number
		_channelList: String[]   // 1+1 CТБ Интер Украина MusicBox
		_volume: Number (0-100)
		_isMute: Boolean
		_volumeBeforeMute: Number

  поведение
      getName() : String
      getState() : Boolean
      on() : void
      off() : void
	   getChannelName(): String
	   setChannel(number) : void
	   nextChannel: void
      previousChannel: void
      getVolume():Number
      increaseVolume() : void
      decreaseVolume() : void
      getMute(): Boolean
      mute() : void
      unmute() : void

7. Общий код двух устройств выносим в класс родитель (наследнование)
класс Device
  состояние
		_name : String
		_state : Boolean

  поведение
      getName() : String
      getState() : Boolean
      on() : void
      off() : void


8. Чертеж класса Дом
   класс SmartHouse
      
  состояние
      _name: String
      _devices: [Object]
      
  поведение
      getName(): String+
      addDevice(device): void
      getDevices(): [Object] +
      getDeviceByName(name): Object
      deleteDeviceByName(name): void
      offAllDevice(): void
      //delayedOff1(name: String, delay: Number, callback: Function): void
      //delayedOff2(name: String, delay: Number): Promise

   




