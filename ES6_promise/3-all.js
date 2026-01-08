import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
    return Promise.all([uploadPhoto(), createUser()])
      .then((responses) => {
          console.log(
              `${responses[0].body} ${responses[1].firstname} ${responses[1].lastname}`
          );
      })
    .catch(() => {
        console.log('Signup system offline');
    });
}
