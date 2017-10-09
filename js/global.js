
// (Event) http://www.wikalenda.com/feed/main/th/1-8/[0 : current,1 : upcoming]/1[PAGE]/

// (Travel)
// http://www.wikalenda.com/feed/main/th/9-13/[0 : current,1 : upcoming]/1[PAGE]/

module.exports = {
    BASE_URL: 'http://www.wikalenda.com/feed/',
    LANGUAGE: 'th',
    CATEID: '1', // 1-8 = event , 9-13 = travel
    TYPEID: '0', // 0 current , 1 upcoming
    PAGE: '1',
    COLOR: {
      ORANGE: '#C50',
      DARKBLUE: '#0F3274',
      LIGHTBLUE: '#6EA8DA',
      DARKGRAY: '#999',
    },
  };