import Link from "next/link"

const Form = ({ type, post, setPost, Submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left"> <span className="blue_gradient">{type} Post</span></h1>
      <p className="desc text-left max-w-md">
          {type} anad share amazing prompts with the world, and let your imagination run 
      </p>
    </section>
  )
}

export default Form
