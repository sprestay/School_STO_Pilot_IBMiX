import {
  ADD_PHOTO,
  ADD_ISLOGIN,
  EDIT_PROFILE,
  ADD_USER,
  ADD_USERS_DASHBOARD,
  CLEAN_REDUX
} from "./type";

export const AddPhotoAC = photo => {
  return {
    type: ADD_PHOTO,
    photo
  };
};

export const AddIsLogin = toogle => {
  return {
    type: ADD_ISLOGIN,
    isLogin: toogle
  };
};



export const EditProfilePageAC = newProfile => {
  return {
    type: EDIT_PROFILE,
    user: newProfile
  };
};

export const AddUserAC = user => {
  return {
    type: ADD_USER,
    user
  };
};



export const AddUsersDashBoard = users => {
  return {
    type: ADD_USERS_DASHBOARD,
    users
  };
};

export const CleanReduxAC = () => {
  return {
    type: CLEAN_REDUX
  };
};
