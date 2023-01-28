import { createPost } from "./create";

const testTitle = "Testing with Jest";
const testBody = "Some test i am doing";
const testMedia = "";
const testTags = "";
const testPost = {
    title: testTitle,
    body: testBody,
    media: testMedia,
    tags: testTags
}

function successFetch() {
    return Promise.resolve({
        ok: true,
        status: 200,
        statusText: "Ok",
        json: () => Promise.resolve(testPost)
    })
}

describe("creating item", () => {
    it("Returns a item equal to the test post", async () => {
        global.fetch = jest.fn(() => successFetch());
        const post = await createPost(testTitle, testBody, testMedia, testTags);
        expect(post).toEqual(testPost);
    })
})