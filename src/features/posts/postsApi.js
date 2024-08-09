export const getPosts = async () => {
  const resposce = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  return resposce.json();
};
