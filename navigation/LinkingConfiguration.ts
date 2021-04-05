import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Login: {
        screens: {
          Login: 'login',
        }
      },
      SignUp: {
        screens: {
          SignUp: 'sign up',
        }
      },
      Root: {
        screens: {
          Read: {
            screens: {
              Read: 'one',
            },
          },
          Write: {
            screens: {
              Write: 'two',
            },
          },
          Creation: {
            screens: {
              Creation: 'three',
            },
          },
        },
      },
    },
  },
};
