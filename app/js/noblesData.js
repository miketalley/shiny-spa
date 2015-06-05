(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else {
        // Browser globals
        root.level1 = factory();
    }
}(this, function () {
    var nobles = {};

    var path = '/images/nobles/';

    nobles.cards = [
      {
        image: path + 'IMG_0001.jpg',
        points: 3,
        cost: {
            red: 4,
            brown: 4
        }
      },
      {
        image: path + 'IMG_0002.jpg',
        points: 3,
        cost: {
            green: 3,
            red: 3,
            brown: 3
        }
      },
      {
        image: path + 'IMG_0003.jpg',
        points: 3,
        cost: {
            white: 3,
            red: 3,
            brown: 3
        }
      },
      {
        image: path + 'IMG_0004.jpg',
        points: 3,
        cost: {
            white: 4,
            blue: 4
        }
      },
      {
        image: path + 'IMG_0005.jpg',
        points: 3,
        cost: {
            white: 3,
            blue: 3,
            green: 3
        }
      },
      {
        image: path + 'IMG_0006.jpg',
        points: 3,
        cost: {
            blue: 4,
            green: 4
        }
      },
      {
        image: path + 'IMG_0007.jpg',
        points: 3,
        cost: {
            white: 3,
            blue: 3,
            brown: 3
        }
      },
      {
        image: path + 'IMG_0008.jpg',
        points: 3,
        cost: {
            white: 4,
            brown: 4
        }
      },
      {
        image: path + 'IMG_0009.jpg',
        points: 3,
        cost: {
            green: 4,
            red: 4
        }
      },
      {
        image: path + 'IMG_0010.jpg',
        points: 3,
        cost: {
            blue: 3,
            green: 3,
            red: 3
        }
      }
    ];

    return nobles;

}));
