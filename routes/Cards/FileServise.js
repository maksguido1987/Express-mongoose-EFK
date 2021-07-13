const uuid =  require('uuid');
const path =  require('path');

class FileServise {
  saveFile(file) {
    try {
      const fileName = uuid.v4() + '.jpg';
      const filePath = path.resolve('images', fileName);
      file.mv(filePath);
      return fileName;
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new FileServise();
