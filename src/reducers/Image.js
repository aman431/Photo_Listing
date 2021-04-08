import { ImageData } from "../actions/type";
// import details from '../components/Details/details';

const intialState = {
  imagedata: [],
};
// console.log(details);
export default function (state = intialState, action) {
  const { type, payload } = action;
  console.log("Payload", payload);
  switch (type) {
    case ImageData:
      return {
        ...state,
        imagedata: payload,
      };
    default:
      return state;
  }
}
