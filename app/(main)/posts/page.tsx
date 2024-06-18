import PostsTable from "@/components/post/postsTable";
import BackButton from "@/components/BackButton";
import PostPagination from "@/components/PostPagination";

const Posts = () => {
  return (
    <>
      <BackButton text="Go Back" link="/" />
      <PostsTable />
      <PostPagination />
    </>
  );
};

export default Posts;
