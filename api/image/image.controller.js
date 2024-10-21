const Service = require('./image.service.js')
const path = require('path')

class image_controller {
    imageservice = new Service();

    test_image = async (req, res) => {
        try {

            const result = await this.imageservice.test_image(req.file);

            res.status(200).json({ status: 200, message: 'success', data: result })
        } catch (e) {
            res.status(200).json({ status: 404, message: 'server error', data: e.message })
        }
    }

    get_image = async (req, res) => {
        try {
            // 이미지 파일 정보 가져오기
            const imageData = await this.imageservice.get_image(req.params);

            // 이미지 파일의 절대 경로 생성
            const filePath = path.join(__dirname, '..','..', 'uploads', imageData); // uploads 폴더에 파일이 있다고 가정
            console.log(filePath)
            // 파일 전송
            res.sendFile(filePath, (err) => {
                if (err) {
                    console.error('Error sending file:', err);
                    res.status(err.status || 500).json({ status: 500, message: err });
                } else {
                    console.log('File sent successfully:', filePath);
                }
            });
        } catch (e) {
            res.status(404).json({ status: 404, message: 'server error', data: e.message });
        }
    };

}

module.exports = image_controller;
