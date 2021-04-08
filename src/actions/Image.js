import { ImageData } from "./type";

export const image_Data = () => async (dispatch) => {
  try {
    console.log("Working");
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    const resJson = await res.json();
    console.log("Check Data ", resJson);
    dispatch({
      type: ImageData,
      payload: resJson,
    });
  } catch (error) {
    console.log(error);
  }
};
