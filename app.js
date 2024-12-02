//1

// const promise = new Promise((resolve, reject) => {
//   const num = Math.random();

//   if (num < 0.5) {
//     resolve("The promise resolved successfully!");
//   } else {
//     reject("The promise was rejected.");
//   }
// });

// promise
//   .then((message) => {
//     console.log("Resolved");
//   })
//   .catch((err) => {
//     console.error("Rejected");
//   });

//2

// const fetchLInk = async () => {
//   const url1 = "https://dummyjson.com/users";
//   const url2 = "https://jsonplaceholder.typicode.com/users";

//   try {
//     const response = await Promise.race([
//       fetch(url1).then((res) => res.json()),
//       fetch(url2).then((res) => res.json()),
//     ]);

//     return response;
//   } catch (err) {
//     console.error("Error:" + err);
//   }
// };

// fetchLink();

//3

// const promise1 = new Promise((resolve) => {
//   setTimeout(() => resolve([1, 2, 3]), 1000);
// });

// const promise2 = new Promise((resolve) => {
//   setTimeout(() => resolve([4, 5, 6]), 2000);
// });

// const promise3 = new Promise((_, reject) => {
//   setTimeout(() => reject("Promise 3 Rejected"), 1500);
// });

// const promiseMerge = async () => {
//   try {
//     const results = await Promise.allSettled([promise1, promise2, promise3]);

//     const mergedArr = results
//       .filter((result) => result.status === "fulfilled")
//       .flatMap((result) => result.value);

//     return mergedArr;
//   } catch (err) {
//     console.error("Error:", err);
//   }
// };

// promiseMerge();

//4

const fetchApi = async () => {
  const url1 = "https://fakestoreapi.com/users";
  const url2 = "https://jsonplaceholder.typicode.com/users";

  try {
    const [data1, data2] = await Promise.all([
      fetch(url1).then((res) => {
        if (!res.ok) throw new Error(`Error: ${url1}`);
        return res.json();
      }),
      fetch(url2).then((res) => {
        if (!res.ok) throw new Error(`Error: ${url2}`);
        return res.json();
      }),
    ]);

    const combinedArr = [...data1, ...data2];

    return combinedArr;
  } catch (error) {
    console.error("Error:", error);
  }
};

fetchApi();
