const uploadImage = async (req, res) => {
  try {
    if (!req.files) {
      res.send({
        status: false,
        message: '请选择图片'
      });
    } else {
      let avatar = req.files.file;
      let uploadTime = new Date().getTime();
      avatar.mv(`./images/${uploadTime}-${avatar.name}`);

      res.send({
        status: true,
        message: '上传成功',
        data: {
          name: `${uploadTime}-${avatar.name}`,
          url: `/images/${uploadTime}-${avatar.name}`,
          mimetype: avatar.mimetype,
          size: avatar.size,
          id: uploadTime,
        }
      });
    }
  } catch (err) {
    res.status(500).send(err);
  }
}

module.exports = {
  uploadImage
};