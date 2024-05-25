
const Project = ({title,imageUrl, tags, liveLink, repoLink, content}) => {
  return (
    <section className="mt-10">
      <section className="text-stone-200 my-4">
<h1 className="text-2xl font-mono font-bold">{title}</h1>
<section className="rounded-2xl overflow-hidden my-4 border-[1px] border-stone-700">
<img src={imageUrl} alt="screenshot" />
      </section>
<h3 className="font-Poppins font-bold text-lg my-2 text-blue-300">Tech Stack : <span className="text-stone-200 font-semibold">{tags}</span></h3>
<p className="font-Poppins text-md text-justify text-stone-300">{content}</p>
<div className="flex gap-4 mt-4">
  <a className="group px-4 py-2 font-mono hover:bg-blue-600 hover:text-stone-200 rounded-3xl font-bold text-blue-400 flex gap-3 items-center border-blue-600 border-2 text-lg" href={liveLink} target="blank">Live <img src="https://img.icons8.com/?size=100&id=IvlXyn1yGmDS&format=png&color=179fff" className="h-[20px] w-auto group-hover:contrast(2) group-hover:brightness-200" alt="" /></a>
  <a className="group px-4 py-2 font-mono hover:bg-stone-200 hover:text-stone-700 rounded-3xl font-bold text-stone-200 flex gap-3 items-center border-stone-200 border-2 text-lg" href={repoLink} target="blank" >Source <img className="group-hover:invert" src="https://img.icons8.com/?size=20&id=64794&format=png&color=ffffff" alt="" /></a>

</div>
      </section>
      
    </section>
  )
}

export default Project