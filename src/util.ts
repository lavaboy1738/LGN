export const resizeImage = (imagePath: string, size: number) => {
  if(imagePath){
      const imageURL = imagePath.match(/media\/screenshots/)
        ? imagePath.replace(
            "media/screenshots",
            `media/resize/${size}/-/screenshots`
          )
        : imagePath.replace("/media/games/", `/media/resize/${size}/-/games/`);
      return imageURL;
    }else{
      return "";
    }
  };