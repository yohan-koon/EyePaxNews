import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

export const signIn = async () => {
  // Get the users ID token
  const {idToken} = await GoogleSignin.signIn();
  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  // Sign-in the user with the credential
  const userSignIn = await auth().signInWithCredential(googleCredential);
  return userSignIn;
};
