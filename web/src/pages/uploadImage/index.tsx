import React, {useState} from 'react';
import {Upload, Button, message, Image} from 'antd';
import {UploadChangeParam} from 'antd/lib/upload/interface';

interface imageListItem {
  id?: number;
  url?: string;
}

const UploadImage: React.FC = () => {

  const [imageList, setImageList] = useState([]);

  const onChangeFunc = (info: UploadChangeParam) => {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
      let data: object = info.file.response.data;
      let images: any = [...imageList, data]
      setImageList(images)
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.response.message}`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }

  const props = {
    name: 'file',
    action: 'http://127.0.0.1:8097/upload-image',
    headers: {
      authorization: 'authorization-text',
    },
  };

  return (
    <>
      <Upload {...props} onChange={onChangeFunc}>
        <Button>上传图片</Button>
      </Upload>
      <div>
        {
          imageList.map((item: imageListItem) => <Image
            key={item.id}
            width={200}
            src={`http://127.0.0.1:8097${item.url}`}/>)
        }
      </div>
    </>
  )
}

export default UploadImage;
