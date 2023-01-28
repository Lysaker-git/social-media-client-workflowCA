import { login } from "./login";

// found a nifty way of dealing with localStorage in jest tests here: 
// https://robertmarshall.dev/blog/how-to-mock-local-storage-in-jest-tests/

class LocalStorageMock {
    constructor() {
      this.store = {};
    }
  
    clear() {
      this.store = {};
    }
  
    getItem(key) {
      return this.store[key] || null;
    }
  
    setItem(key, value) {
      this.store[key] = String(value);
    }
  
    removeItem(key) {
      delete this.store[key];
    }
  }
  
  global.localStorage = new LocalStorageMock();

const testMail = "testerMail987@noroff.no";
const testPass = "testerPassword";
const testerToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYxLCJuYW1lIjoiVGVzdFJvYlR3byIsImVtYWlsIjoidGVzdFJvYkBub3JvZmYubm8iLCJhdmF0YXIiOm51bGwsImJhbm5lciI6bnVsbCwiaWF0IjoxNjcxNDQyNjY5fQ.X_zMhOp7YXJyT6f7U7Zn3ljhSNN01des4vP090tdnzc";
const testUser = {
    email: testMail,
    password: testPass,
    accessToken: testerToken
}

function successFetch() {
    return Promise.resolve({
        ok: true,
        status: 200,
        statusText: "Ok",
        json: () => Promise.resolve(testUser)
    })
}

describe("login", () => {
    it("Returns and stores token and profile when supplied with right login information", async () => {
        global.fetch = jest.fn(() => successFetch());
        const testProfile = await login(testMail, testPass);
        const receivedToken = JSON.parse(global.localStorage.getItem("token"));
        expect(testProfile).toEqual(testUser);
        expect(receivedToken).toEqual(testerToken);
    })
})