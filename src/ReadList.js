import React, { Component } from 'react';
import HTMLParser from 'fast-html-parser';
import axios from "axios";
/*import { gapi } from 'gapi-script';
import { GoogleSignin} from 'react-native-google-signin';*/


/**
 * read all files from folder and get only table sheets for filling a calendar
 */
class ReadList extends Component {
    constructor(props) {
        super(props);
        this.readNodeOfBody = this.readNodeOfBody.bind(this);
        this.readFilesAndBuildMap = this.readFilesAndBuildMap.bind(this);
        this.readFilesAndBuildMap();
    }

    readNodeOfBody(node) {
        var attrs = node.attributes;
        for (var key in attrs) {
            if (attrs[key] === 'data-id'); {
                //
            }
        }

    }

    readFilesAndBuildMap() {
        /*GoogleSignin.configure({
            scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
            webClientId: '', // client ID of type WEB for your server (needed to verify user ID and offline access)
            offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
            hostedDomain: '', // specifies a hosted domain restriction
            loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
            forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
            accountName: 'smolbars@gmail.com', // [Android] specifies an account name on the device that should be used
            iosClientId: '', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
            googleServicePlistPath: '', // [iOS] optional, if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
          });
      GoogleSignin.signIn();*/
      let url = "https://drive.google.com/drive/folders/1tVOoW0_V7AEFSOVcbYpbEfKoKoox7iWm";
      axios.get(url, {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Credentials': 'false',
          'Access-Control-Allow-Origin': '*'                    
        }}).then(res => {
				const restData = res.data;
				var root = HTMLParser.parse(restData);
				var bodyTag = root.querySelector('body');
				if ((bodyTag != null) && (bodyTag.childNodes != null)) {
                    bodyTag.childNodes.forEach(this.readNodeOfBody);
			}
	  });
    }

    render () {
        return (<div>test!!!!</div>);
    }
    
}
export default ReadList;