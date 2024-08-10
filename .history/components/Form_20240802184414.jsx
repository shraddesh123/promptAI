import Link from "next/link"

const Form = ({ type, post, setPost, Submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left "> <span className="blue_gradient">{type} Post</span></h1>
      <p className="desc text-left max-w-md">
        {type} anad share amazing prompts with the world, and let your imagination run wild with any AI-powered platform.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism">
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">Your AI Prompt</span>
          <textarea value={post.prompt} onChange={(e) => setPost({
            ...post,
            prompt: e.target.value
          })}
            placeholder="Write your prompt here..."
            className="form_textarea" />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">Tag
            <span>(#product, #webdevelopement, #idea)</span>
          </span>
          <input value={post.tag} onChange={(e) => setPost({
            ...post,
            tag: e.target.value
          })}
            placeholder="#tag"
            className="form_textarea" >
          </input>
        </label>
      </form>
    </section>
  )
}

export default Form
