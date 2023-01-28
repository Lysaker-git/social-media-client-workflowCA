// import { login } from "./login";
// import { logout } from "./logout";

// const testMail = "testerMail987@noroff.no";
// const testPass = "testerPassword";
// const testerToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYxLCJuYW1lIjoiVGVzdFJvYlR3byIsImVtYWlsIjoidGVzdFJvYkBub3JvZmYubm8iLCJhdmF0YXIiOm51bGwsImJhbm5lciI6bnVsbCwiaWF0IjoxNjcxNDQyNjY5fQ.X_zMhOp7YXJyT6f7U7Zn3ljhSNN01des4vP090tdnzc";
// const testUser = {
//     email: testMail,
//     password: testPass,
//     accessToken: testerToken
// }

// const testTitle = "Testing with Jest";
// const testBody = "Some test i am doing";
// const testMedia = "";
// const testTags = "";
// const testPost = {
//     title: testTitle,
//     body: testBody,
//     media: testMedia,
//     tags: testTags
// }


// class LocalStorageMock {
//     constructor() {
//       this.store = {};
//     }
  
//     clear() {
//       this.store = {};
//     }
  
//     getItem(key) {
//       return this.store[key] || null;
//     }
  
//     setItem(key, value) {
//       this.store[key] = String(value);
//     }
  
//     removeItem(key) {
//       delete this.store[key];
//     }
//   }
  
// global.localStorage = new LocalStorageMock();

// function successFetch() {
//     return Promise.resolve({
//         ok: true,
//         status: 200,
//         statusText: "Ok",
//         json: () => Promise.resolve(testUser)
//     })
// }

// describe("creating item", () => {
//     it("Returns a item equal to the test post", async () => {
//         global.fetch = jest.fn(() => successFetch());
//         await login(testMail, testPass);

//     })
// })