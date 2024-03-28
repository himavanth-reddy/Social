import { useDisclosure } from "@mantine/hooks";
import { Modal, ActionIcon, Avatar } from "@mantine/core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormData {
  content: string;
  tags: string | null;
  images: File[] | null;
}

function CreatePostModel() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [opened, { open, close }] = useDisclosure(false);

  const handleImageChange = () => {
    //tobe implemented
  };
  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data); // tobe implemented

  return (
    <>
      <Modal opened={opened} onClose={close} centered>
        <div className="flex items-center ">
          <Avatar radius="xl" />
          <h2 className="ml-4">Himavanth Reddy</h2>
        </div>

        {/*form to be implemented*/}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center"
        >
          <input
            {...register("content")}
            className="w-80 h-60 border border-black"
          />
          {errors.content?.message && <p>{errors.content?.message}</p>}
          <span className="flex flex-col gap-3">
            <input
              className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-[0.32rem] text-base font-normal leading-[2.15] text-surface transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:me-3 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-e file:border-solid file:border-inherit file:bg-transparent file:px-3  file:py-[0.32rem] file:text-surface focus:border-primary focus:text-gray-700 focus:shadow-inset focus:outline-none dark:border-black/70 dark:text-black  file:dark:text-black"
              id="formFileLg"
              type="file"
              accept="image/*"
              multiple
              {...register("images")}
              onChange={handleImageChange}
            />
            {errors.images?.message && <p>{errors.images?.message}</p>}

            <button
              className="w-full rounded border border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-[0.32rem] text-base font-normal leading-[2.15] text-surface transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:me-3 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-e file:border-solid file:border-inherit file:bg-transparent file:px-3  file:py-[0.32rem] file:text-surface focus:border-primary focus:text-gray-700 focus:shadow-inset focus:outline-none dark:border-black/70 dark:text-black  file:dark:text-black"
              type="submit"
            >
              Create Post
            </button>
          </span>
        </form>
      </Modal>

      <ActionIcon variant="filled" aria-label="create post" onClick={open}>
        <FontAwesomeIcon icon={faPlus} />
      </ActionIcon>
    </>
  );
}

export default CreatePostModel;
