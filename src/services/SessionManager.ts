const SESSION_KEY = "user_data";

export type LoggedUser = {
  name: string
}

export type SessionData = {
  loggedUser: LoggedUser,
  token: string
}

class SessionManager {

  private dataStore : Storage

  constructor(storage = sessionStorage) {
    this.dataStore = storage;
  }

  public isLoggedIn = () : boolean => {
    const data = this.parseUserData();
    if (data && data.loggedUser && data.token) {
      return true;
    }
    return false;
  }

  public loginWithData = (data: {}) : void => {
    const writtenData : string = JSON.stringify(data);
    this.dataStore.setItem(SESSION_KEY, writtenData);
  }

  public logout = () => {
    this.dataStore.removeItem(SESSION_KEY);
  }

  public getUser = () : LoggedUser | null => {
    const data = this.parseUserData();
    if (data && data.loggedUser) {
      return data.loggedUser;
    }
    return null;
  }

  public getToken = () : string | null => {
    const data = this.parseUserData();
    if (data && data.token) {
      return data.token;
    }
    return null;
  }

  private parseUserData = () : SessionData | null => {
    try {
      const sessionString = sessionStorage.getItem(SESSION_KEY) as string;
      const data : SessionData = JSON.parse(sessionString);
      return data;
    } catch (e) {
      sessionStorage.removeItem(SESSION_KEY);
      return null;
    }
  }

}

export default SessionManager;
