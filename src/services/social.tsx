
import OAuthManager from 'react-native-social-login';
import Password from '../../password.json';

const social = new OAuthManager('driv');

social.configure({
    facebook: {
        client_id:      '470252004674909',
        client_secret:  'f32ce47f32a31334bf637254aa2d62cf',
    },
});
export default social;
