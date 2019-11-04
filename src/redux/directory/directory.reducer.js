const INITIAL_STATE = {
  sections: [
    {
      title: "candles",
      imageUrl:
        "https://res.cloudinary.com/dcs/image/upload/v1572895708/Swish%20Fox/Home-Page/homepage-candles-1.jpg",
      id: 1,
      linkUrl: "shop/candles"
    },
    {
      title: "home",
      imageUrl:
        "https://res.cloudinary.com/dcs/image/upload/v1572895324/Swish%20Fox/Home-Page/homepage-home.jpg",
      id: 2,
      linkUrl: "shop/home"
    },
    {
      title: "herdy",
      imageUrl:
        "https://res.cloudinary.com/dcs/image/upload/v1572895525/Swish%20Fox/Home-Page/homepage-herdy.jpg",
      id: 3,
      linkUrl: "shop/herdy"
    },
    {
      title: "christmas",
      imageUrl:
        "https://res.cloudinary.com/dcs/image/upload/v1572895955/Swish%20Fox/Home-Page/homepage-christmas.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/christmas"
    },
    {
      title: "weddings",
      imageUrl:
        "https://res.cloudinary.com/dcs/image/upload/v1572896331/Swish%20Fox/Home-Page/homepage-weddings.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop/weddings"
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
