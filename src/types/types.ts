export type IRegisterUser = {
  username: string;
  fullName: string;
  email: string;
  password: string;
  confirmPassword?: string;
  avatar?: File;
};

export type ILoginUser = {
  email: string;
  password: string;
  confirmPassword: string;
};

export type IUser = {
  user: {
    avatar: {
      url: string;
    };
    _id: string;
    username: string;
    fullName: string;
    email: string;
  };
};

export type ISong = {
  success: boolean;
  songs: [
    _id: string,
    {
      file: {
        url: string;
      };
      poster: {
        url: string;
      };
      title: string;
      description: string;
      totat_length: string;
      release_date: string;
      artist: {
        poster: {
          avatar: string;
        };
        _id: string;
        bio: string;
        name: string;
        age: number;
        genre: string;
        country: string;
        gender: "Male" | "Female";
        songs: [];
      };
    }
  ];
};

export interface Song {
  artist: {
    age: number;
    avatar: {
      url: string;
      public_id: string;
    };
    bio: string;
    country: string;
    gender: string;
    genre: string;
    name: string;
    songs: string[];
    __v: number;
    _id: string;
  };
  description: string;
  file: {
    url: string;
    public_id: string;
  };
  poster: {
    url: string;
    public_id: string;
  };
  release_date: string;
  title: string;
  total_length: string;
  __v: number;
  _id: string;
}

export interface SongApiResponse {
  success: boolean;
  songs: Song[];
}

export type ISingleSong = {
  song: {
    description: string;
    title: string;
    poster: {
      url: string;
    };
    file: {
      url: string;
    };
    total_length: string;
    release_date: string;
    _id: string;
    artist: {
      age: number;
      avatar: {
        url: string;
        public_id: string;
      };
      bio: string;
      country: string;
      gender: string;
      genre: string;
      name: string;
      songs: string[];
      __v: number;
      _id: string;
    };
  };
};
