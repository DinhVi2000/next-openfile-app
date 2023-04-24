import { useRouter } from "next/router";

function Post({ post }: any) {
  console.log("post :", post);
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h2>
        {post.id} {post.title}
      </h2>
      <p>{post.body}</p>
    </>
  );
}

export default Post;

export async function getStaticProps(context: any) {
  const { params } = context;
  console.log("params :", params);

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();
  console.log("data :", data);

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: data,
    },
  };
}

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  const paths = data.map((post: any) => ({
    params: { postId: `${post.id}` },
  }));

  console.log("paths :", paths);
  return {
    paths,
    fallback: true,
  };
}
