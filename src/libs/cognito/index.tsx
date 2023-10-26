import { AuthenticationDetails, CognitoUserPool, CognitoUser, CognitoUserSession } from 'amazon-cognito-identity-js';

const userPoolId = process.env.NEXT_PUBLIC_USER_POOL_ID;
const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;

if (!userPoolId || !clientId) {
  throw new Error('User pool ID/Client ID is not provided');
}

const userPoolData = {
  UserPoolId: userPoolId,
  ClientId: clientId
};
const userPool = new CognitoUserPool(userPoolData);

export const signIn = ({ username, password }: { username: string, password: string }) => {
  const authenticationData = {
    Username: username,
    Password: password
  };
  const authenticationDetails = new AuthenticationDetails(authenticationData);
  const userData = {
    Username: username,
    Pool: userPool
  };
  const cognitoUser = new CognitoUser(userData);

  return new Promise<CognitoUserSession>((resolve, reject) => {
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (session: CognitoUserSession) => {
        resolve(session);
      },
      onFailure: (error: Error) => {
        reject(error);
      }
    });
  });
};

export const signUp = () => { };

export const signOut = async () => {
  const cognitoUser = userPool.getCurrentUser();

  await cognitoUser?.signOut();
};

export const getCurrentSession = () => {
  const cognitoUser = userPool.getCurrentUser();

  return new Promise<CognitoUserSession | null>((resolve, reject) => {
    cognitoUser?.getSession((error: Error | null, session: CognitoUserSession) => {
      if (error) {
        reject(error);
      }

      resolve(session);
    });

    resolve(null);
  });
};

export const checkValidSession = async () => {
  const session = await getCurrentSession();
  if (!session) {
    return false;
  }

  return session?.isValid();
};

export const getIdToken = async () => {
  const session = await getCurrentSession();
  if (!session) {
    return null;
  }

  return session?.getIdToken().getJwtToken();
};

export const getAccessToken = async () => {
  const session = await getCurrentSession();
  if (!session) {
    return null;
  }

  return session?.getAccessToken().getJwtToken();
};
