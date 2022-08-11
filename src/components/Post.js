import React, { useState } from "react";
// import { Card, Button } from "react-daisyui";

function Post({ data, deletePost, editPost }) {
    const [post, setPost] = useState(data);

    const onChangeHandler = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        editPost(post);
        // setVisible(false);
    };
    return (
        // <Card>
        //     <Card.Body className="overflow-auto">
        //         <Card.Title tag="h2">{data.title}</Card.Title>
        //         <p>{data.body}</p>
        //         <Card.Actions className="justify-end">
        //             <Button color="accent">Edit</Button>
        //             <Button color="error">Delete</Button>
        //         </Card.Actions>
        //     </Card.Body>
        // </Card>

        <div class="p-6 w-xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 justify-center">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {data.title}
                </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {data.body}
            </p>
            <button
                type="button"
                class="px-6 mr-2
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
                data-bs-toggle="modal"
                data-bs-target={`#modal-${post.id}`}
            >
                Edit
            </button>
            <div
                class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                id={`modal-${post.id}`}
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog relative w-auto pointer-events-none">
                    <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                            <h5
                                class="text-xl font-medium leading-normal text-gray-800"
                                id="exampleModalLabel"
                            ></h5>
                            <button
                                type="button"
                                class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <form onSubmit={onSubmitHandler}>
                            <div class="modal-body relative p-4">
                                Title:
                                <input
                                    className="w-full h-8"
                                    type="text"
                                    name="title"
                                    onChange={onChangeHandler}
                                    value={post.title}
                                />
                                <br />
                                Body:
                                <input
                                    className="w-full h-8"
                                    type="text"
                                    name="body"
                                    onChange={onChangeHandler}
                                    value={post.body}
                                />
                            </div>
                            <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                                <button
                                    type="button"
                                    class="px-6
                                    py-2.5
                                    bg-purple-600
                                    text-white
                                    font-medium
                                    text-xs
                                    leading-tight
                                    uppercase
                                    rounded
                                    shadow-md
                                    hover:bg-purple-700 hover:shadow-lg
                                    focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
                                    active:bg-purple-800 active:shadow-lg
                                    transition
                                    duration-150
                                    ease-in-out"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button
                                    class="px-6
                                    py-2.5
                                    bg-blue-600
                                    text-white
                                    font-medium
                                    text-xs
                                    leading-tight
                                    uppercase
                                    rounded
                                    shadow-md
                                    hover:bg-blue-700 hover:shadow-lg
                                    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                                    active:bg-blue-800 active:shadow-lg
                                    transition
                                    duration-150
                                    ease-in-out
                                    ml-1"
                                    data-bs-dismiss="modal"
                                >
                                    Save changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <button
                onClick={() => deletePost(data.id)}
                class="inline-flex items-center py-2.5 px-3 text-xs text-center text-white bg-red-700 rounded-md hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
                Delete
            </button>
        </div>
    );
}

export default Post;
