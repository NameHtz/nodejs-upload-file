import {RequestHandler, Request, Response, NextFunction} from 'express-serve-static-core';

 const uploadImage: RequestHandler = async (req: Request, res: Response) => {
  try {
    if (!req.files) {
      res.send({
        status: false,
        message: '请选择图片'
      });
    } else {
      let avatar: any = req.files.file;
      let uploadTime: number = new Date().getTime();

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

export default uploadImage