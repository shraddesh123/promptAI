import PromptCard from "./PromptCard"


const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">{name} <span className="blue_gradient">Profile</span> </h1>
      <p className="desc te">{desc}</p>
    </section>
  )
}

export default Profile
