import React, {Component} from 'react';
import {Upload, Button, message, Image} from 'antd';

export default class UploadImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageList: []
    }
  }
  static getDerivedStateFromProps(props, state) {
    if(props !== state){
      return true
    }
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {

  }
  onChange = info => {
    if (info.file.status !== 'uploading') {
      // console.log(info.file, info.fileList);
      let data = info.file.response.data;
      let imageList = this.state.imageList;
      imageList.push(data)
      this.setState({
        imageList
      })
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.response.message}`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }

  render() {
    const props = {
      name: 'file',
      action: 'http://127.0.0.1:8097/upload-image',
      headers: {
        authorization: 'authorization-text',
      },
    };

    return (
      <div>
        <Upload {...props} onChange={this.onChange}>
          <Button>上传图片</Button>
        </Upload>
        <div>
          {
            this.state.imageList.map(item => <Image
              key={item.id}
              width={200}
              src={`http://127.0.0.1:8097${item.url}`}/>)
          }
        </div>
      </div>
    )
  }
}