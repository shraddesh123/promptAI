import PromptCard from "./PromptCard"


const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">{name} <span class>Profile</span> </h1>

    </section>
  )
}

export default Profile
