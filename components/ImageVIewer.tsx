import ImageModal from 'react-native-image-modal';
export default function({navigation}){

    <ImageModal
              resizeMode="contain"
              imageBackgroundColor="#000000"
              style={{
                width: 250,
                height: 250,
              }}
              source={{
                uri: 'https://cdn.pixabay.com/photo/2019/07/25/18/58/church-4363258_960_720.jpg',
              }}
            />

}
