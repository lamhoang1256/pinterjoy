export interface IUser {
  image: string;
  userName: string;
  _id: string;
  _type: string;
}

export interface IPin {
  title: string;
  _id: string;
  destination: string;
  image: {
    asset: {
      url: string;
    };
  };
  postedBy: {
    _id: string;
    image: string;
    userName: string;
  };
  save: {
    _key: string;
    postedBy: {
      _id: string;
      image: string;
      userName: string;
    };
  }[];
}

export interface IPinDetail {
  _id: string;
  about: string;
  category: string;
  comments: {
    _key: string;
    comment: string;
    postedBy: {
      _id: string;
      image: string;
      userName: string;
    };
  }[];
  destination: string;
  image: {
    asset: {
      url: string;
    };
  };
  postedBy: {
    _id: string;
    image: string;
    userName: string;
  };
  save: any;
  title: string;
}
