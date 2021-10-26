'use strict'

/*Задание №1.
1. Создайте новый объект tv;
2. Добавьте свойство currentChannel со значением 1;
3. Добавьте метод nextChannel(), который увеличивает currentChannel на единицу;
4. Добавьте метод previousChannel(), который уменьшает currentChannel на единицу;
5. Добавьте метод setChannel(number), который переходит на канал по номеру.*/

const tv = {
  currentChannel: 1,
  nextChannel() {
    this.currentChannel++
  },
  previousChannel() {
    this.currentChannel--
  },
  setChannel(number) {
    this.currentChannel = number;
  }
};

/*Задание №2.
Создайте объект, который описывает MP3 плеер.*/


const mp3 = {
  _isOn: false,
  _isPlay: false,
  _playList: [
    {
      singer: "Sting",
      title: "Desert of Rose",
    }, {
      singer: "Sting",
      title: "Shape of My Heart",
    }, {
      singer: "NK",
      title: "Красное вино",
    }, {
      singer: "Ed Sheeran",
      title: "Bad habits",
    }, {
      singer: "Imagine Dragons",
      title: "Wrecked",
    },
  ],

  _favoriteSongs: [],
  _currentSongNumber: 0,


  onOff() {
    this._isOn = !this._isOn;
  },

  get isOn() {
    return this._isOn;
  },

  playStop() {
    this._isPlay = !this._isPlay;
  },

  get isPlay() {
    return this._isPlay;
  },

  nextSong() {
    if (this._currentSongNumber < this._playList.length - 2) {
      this._currentSongNumber++;
    } else {
      this._currentSongNumber = 0;
    }
  },

  previousSong () {
    if (this._currentSongNumber > 0) {
      this._currentSongNumber--;
    } else {
      this._currentSongNumber = this._playList.length-1;
    }
  },

  get currentSongTitle() {
    return this._playList[this._currentSongNumber].title;
  },

  get currentSongSinger() {
    return this._playList[this._currentSongNumber].singer;
  },

  addToFavorite() {
    const isSongFavorite = this._favoriteSongs.find(item => this.currentSongTitle === item.title);
    if (!isSongFavorite) {
      this._favoriteSongs.push(this._playList[this._currentSongNumber]);
    }
  }  
}  
